import { NextResponse, NextRequest } from 'next/server'
import { IUser, USERS } from '../../../../data/users'
import { headers } from 'next/dist/client/components/headers';
import { User } from '@/class/User';
import { getDateString } from '@/utils/getDateString';
import { findRepeatElement } from '@/utils/findRepeatElement';

export async function GET(request: NextRequest) {
  // // if request: Request (global type) only this variant
  // const { searchParams } = new URL(request.url)
  console.log(request)
  const searchParams = request.nextUrl.searchParams;
  const key = searchParams.get('key');

  if (!key || key !== process.env.API_ROUTES_SECRET) {
    return NextResponse.json({ message: 'You are not authenticated to call to this API' });
  }

  return NextResponse.json(USERS);
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

  const userObj: Omit<IUser, 'id' | 'createdAt'> = {...body, lastLogin};

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


export async function DELETE(request: NextRequest) {
  const headersList = headers();
  const userId = headersList.get('userId');
  const userIndex = USERS.findIndex(user => user.id === userId);

  // logic delete
  USERS.splice(userIndex, 1);
  // logic что массив уменьшился тогда возвращаем 200

  return NextResponse.json({
    message: `User ${userId} is deleted`,
    id: userId
  }, {
    status: 200,
  })
}


// fetch('http://localhost:8080/users', {
//         method: 'DELETE',
//         headers: {
//             userId: id
//         }
//     })


// fetch('http://localhost:8080/users?key=  &userId=2', {
//         method: 'DELETE',
//         headers: {
//             user: id
//         }
//     })
