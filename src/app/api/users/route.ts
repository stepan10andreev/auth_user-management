import { NextResponse, NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { PRISMA_SERVICE } from '@/services/prisma.service';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();

  return NextResponse.json(users, { status: 200 });
}


export async function PATCH(request: NextRequest) {
  const { id, isBlocked, lastLogin } = await request.json();

  const users = await prisma.user.findMany();

  const noUser = !users.find(user => user.id === id);

  if (noUser) return NextResponse.json({
    message: 'There is no user with such id',
    id: `${id}`
  }, {
    status: 409,
  })

  users.map(async (user) => {
    user.id === id && (
      isBlocked === 'locked' ? await PRISMA_SERVICE.update(id, 'isBlocked', true) :
        isBlocked === 'unlocked' ? await PRISMA_SERVICE.update(id, 'isBlocked', false) :
          lastLogin ? await PRISMA_SERVICE.update(id, 'lastLogin', new Date()) :
            ''
    )
  })

  return NextResponse.json({
    message: 'Status is changed',
    id: `${id}`
  }, {
    status: 200,
  })
}


export async function DELETE(request: NextRequest) {
  const { id } = await request.json();

  const user = await prisma.user.delete({
    where: { id }
  })

  return NextResponse.json({
    message: `User ${user.id} is deleted`,
    id: user.id
  }, {
    status: 200,
  })
}


