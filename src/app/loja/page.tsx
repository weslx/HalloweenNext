import { currentUser } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function findUserByEmail(email) {
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
    return <div>Hello {user.emailAddresses[0].emailAddress}</div>;
  } else {
    // O usuário não existe, então criamos um novo registro
    const newUser = await prisma.user.create({
      data: {
        name: user.firstName,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return <div>Hello {newUser.email}</div>;
  }
}
