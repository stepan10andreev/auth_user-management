import { NextResponse, NextRequest } from 'next/server'
import { IUser } from '../../../../data/users'
import { User } from '@/class/User';
import { getDateString } from '@/utils/getDateString';
import { findRepeatElement } from '@/utils/findRepeatElement';
import { PrismaClient } from '@prisma/client'
import { PRISMA_SERVICE } from '@/services/prisma.service';

const prisma = new PrismaClient();

export const USERS: IUser[] = [
]

export async function GET(request: NextRequest) {
  // const searchParams = request.nextUrl.searchParams;
  // const key = searchParams.get('key');

  // if (!key || key !== process.env.API_ROUTES_SECRET) {
  //   return NextResponse.json({ message: 'You are not authenticated to call to this API' }, { status: 401 });
  // }
  const users = await prisma.user.findMany();

  return NextResponse.json(users, { status: 200 });
}


// export async function POST(request: NextRequest) {

//   const body = await request.json();

//   const repeatedLogin = findRepeatElement(USERS, 'login', body.login);

//   if (repeatedLogin) {
//     return NextResponse.json({
//       message: 'This login is already exists',
//       error: true
//     }, {
//       status: 409,
//     })
//   }

//   const lastLogin = getDateString();

//   const userObj: Omit<IUser, 'id' | 'createdAt'> = { ...body, lastLogin };

//   const USER = new User(userObj);

//   USERS.push(USER);

//   return NextResponse.json({
//     message: 'You are registered',
//     username: `${USER.name}`,
//     id: `${USER.id}`
//   }, {
//     status: 200,
//   })
// }

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

  // const body = await request.json();
  // const userId = body.id;
  // const userIndex = USERS.findIndex(user => user.id === userId);

  // if (userIndex === -1) return NextResponse.json({
  //   message: 'There is no user with such id',
  //   id: `${body.id}`
  // }, {
  //   status: 409,
  // })

  // USERS.splice(userIndex, 1);

  // return NextResponse.json({
  //   message: `User ${userId} is deleted`,
  //   id: userId
  // }, {
  //   status: 200,
  // })
}


