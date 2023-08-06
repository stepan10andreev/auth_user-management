import { NextResponse, NextRequest } from 'next/server'
import { IUser } from '../../../../data/users'
import { User } from '@/class/User';
import { getDateString } from '@/utils/getDateString';
import { findRepeatElement } from '@/utils/findRepeatElement';
import { USERS } from '@/app/user-table/page';

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


