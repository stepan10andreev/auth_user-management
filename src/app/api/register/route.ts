import { findRepeatElement } from '@/utils/findRepeatElement';
import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  const { email, password, login, name } = await request.json();

  const users = await prisma.user.findMany();

  const repeatedUser = findRepeatElement(users, 'login', login);

  if (repeatedUser) {
    return NextResponse.json({
      message: 'This login is already exists',
      error: true
    }, {
      status: 409,
    })
  }

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
