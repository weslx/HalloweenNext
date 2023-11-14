import { currentUser, UserButton } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email: email,
    },
  });
}

export default async function Page() {
  const user = await currentUser();

  if (!user) return <div>Not logged in</div>;

  const existingUser = await findUserByEmail(
    user.emailAddresses[0].emailAddress
  );

  if (existingUser) {
    // O usuário já existe no banco de dados
    return (
      <div>
        <UserButton />
        <h1>Bem-vindo {user.emailAddresses[0].emailAddress}</h1>
        <Link href="/jogo">Cashback</Link>
      </div>
    );
  } else {
    // O usuário não existe, então criamos um novo registro
    const newUser = await prisma.user.create({
      data: {
        name: user.firstName || "Anonymous",
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return <div></div>;
  }
}
