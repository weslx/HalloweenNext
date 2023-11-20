import { PrismaClient } from "@prisma/client";
import { currentUser } from "@clerk/nextjs";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const { cashback } = await request.json();
  const user = await currentUser();
  if (!user) {
    return Response.json(
      { error: "Usuário não identificado!" },
      { status: 401 }
    );
  }
  try {
    const cliq = await prisma.user.update({
      where: {
        email: user.emailAddresses[0].emailAddress,
      },
      data: {
        cashback: Number(cashback),
      },
    });
    return Response.json("Voce ganhou " + cashback + "% de cashback");
  } catch (error) {
    return Response.json({ error: "Ocorreu um erro!" }, { status: 500 });
  } finally {
    prisma.$disconnect;
  }
}
