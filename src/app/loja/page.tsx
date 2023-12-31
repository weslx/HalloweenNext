import { currentUser, UserButton } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import style from "./style.module.css";

const prisma = new PrismaClient();

async function findUserByEmail(email: any) {
  return prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      cashback: true,
    },
  });
}

export default async function Page() {
  const user = await currentUser();

  if (!user) {
    return <div>Not logged in</div>;
  }

  let cashback;
  const existingUser = await findUserByEmail(
    user.emailAddresses[0].emailAddress
  );

  if (existingUser) {
    cashback = existingUser.cashback;
  }

  if (existingUser) {
    return (
      <div className={style.fundo}>
        <div className={style.borda}>
          <UserButton />
          <h1>
            Bem-vindo de volta {user.emailAddresses[0].emailAddress}, Você tem{" "}
            {cashback}% de cashback
          </h1>
          <Link href="/jogo">Cashback</Link>
        </div>
      </div>
    );
  } else {
    try {
      const newUser = await prisma.user.create({
        data: {
          name: user.firstName || "Anonymous",
          email: user.emailAddresses[0].emailAddress,
        },
      });

      return (
        <div className={style.fundo}>
          <div className="">
            <UserButton />
            <h1>
              Você acaba de criar sua conta, jogue o jogo abaixo (se nao
              carregar o css aperte F5) {user.emailAddresses[0].emailAddress}
            </h1>
            <Link href="/jogo">Cashback</Link>
          </div>
        </div>
      );
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  }
}
