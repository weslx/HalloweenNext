import { PrismaClient } from "@prisma/client";
import { currentUser } from "@clerk/nextjs";

const prisma = new PrismaClient();

export async function POST(request) {
  const { cashback } = await request.json();
  const user = await currentUser();
  try {
    const cliq = await prisma.user.update({
      where: {
        email: user.emailAddresses[0].emailAddress,
      },
      data: {
        cashback: Number(cashback),
      },
    });
    return Response.json(cliq);
  } catch (error) {
    // Você pode usar seu próprio serviço de registro de erros aqui
    console.log({ error });
    // Você pode renderizar qualquer interface de usuário de fallback personalizada
    return Response.json({ error: "Ocorreu um erro!" }, { status: 500 });
  }
}
