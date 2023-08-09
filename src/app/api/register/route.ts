import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  const { email, password, login, name } = await request.json();

  // try catch
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password,
      login,
      lastLogin: new Date(),
    },
  })

  return NextResponse.json({
    message: 'You are registered successfully',
    username: `${newUser.name}`,
    id: `${newUser.id}`
  },
    { status: 200 });
}
