import { NextResponse, NextRequest } from 'next/server'
import { IUser } from '../../../../data/users'
import { User } from '@/class/User';
import { getDateString } from '@/utils/getDateString';
import { findRepeatElement } from '@/utils/findRepeatElement';

export const USERS: IUser[] = [
  { "isBlocked": false, "name": "Lionel", "email": "test@gmail.com", "password": "1", "login": "Lionel", "createdAt": "2023-08-06 18:56:55", "lastLogin": "2023-08-06 18:56:55", "id": "Xf5LIcnOu01kp5yPvzRwn" },
  { "isBlocked": false, "name": "Harry", "email": "test@harry.com", "password": "12", "login": "Harry", "createdAt": "2023-08-06 19:19:33", "lastLogin": "2023-08-06 19:19:33", "id": "o-IoZ1Gnt71qE_OsoUbEf" },
  { "isBlocked": false, "name": "Alice", "email": "test@alice.com", "password": "123", "login": "Alice", "createdAt": "2023-08-04 12:40:14", "lastLogin": "2023-08-04 13:32:14", "id": "0D_DDaxvRg2dS9MX4OT0t" },
  { "isBlocked": false, "name": "Vasya", "email": "test@vasya.com", "password": "any", "login": "Vasya", "createdAt": "2023-08-05 14:45:34", "lastLogin": "2023-08-04 13:32:14", "id": "HNOgcJMvTvmb6N4rrNOfP" },
]

export async function GET(request: NextRequest) {
  // // if request: Request (global type) only this variant
  // const { searchParams } = new URL(request.url)

  const searchParams = request.nextUrl.searchParams;
  const key = searchParams.get('key');

  if (!key || key !== process.env.API_ROUTES_SECRET) {
    return NextResponse.json({ message: 'You are not authenticated to call to this API' }, { status: 401 });
  }

  return NextResponse.json(USERS, { status: 200 });
}


export async function POST(request: NextRequest) {

  const body = await request.json();

  const repeatedLogin = findRepeatElement(USERS, 'login', body.login);

  if (repeatedLogin) {
    return NextResponse.json({
      message: 'This login is already exists',
      error: true
    }, {
      status: 409,
    })
  }

  const lastLogin = getDateString();

  const userObj: Omit<IUser, 'id' | 'createdAt'> = { ...body, lastLogin };

  const USER = new User(userObj);

  USERS.push(USER);

  return NextResponse.json({
    message: 'You are registered',
    username: `${USER.name}`,
    id: `${USER.id}`
  }, {
    status: 200,
  })
}

export async function PATCH(request: NextRequest) {
  const body = await request.json();

  const noUser = !USERS.find(user => user.id === body.id);

  if (noUser) return NextResponse.json({
    message: 'There is no user with such id',
    id: `${body.id}`
  }, {
    status: 409,
  })

  USERS.map(user => {
    user.id === body.id && (
      body.isBlocked === 'locked' ? user.isBlocked = true :
        body.isBlocked === 'unlocked' ? user.isBlocked = false :
          body.lastLogin ? user.lastLogin = body.lastLogin :
            ''
    )
  })

  return NextResponse.json({
    message: 'Status is changed',
    username: `${body.id}`,
    id: `${body.id}`
  }, {
    status: 200,
  })
}


export async function DELETE(request: NextRequest) {

  const body = await request.json();
  const userId = body.id;
  const userIndex = USERS.findIndex(user => user.id === userId);

  if (userIndex === -1) return NextResponse.json({
    message: 'There is no user with such id',
    id: `${body.id}`
  }, {
    status: 409,
  })

  USERS.splice(userIndex, 1);

  return NextResponse.json({
    message: `User ${userId} is deleted`,
    id: userId
  }, {
    status: 200,
  })
}


