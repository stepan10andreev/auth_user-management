import { NextResponse, NextRequest } from 'next/server'
import { USERS } from '../../../../data/users'
import { headers } from 'next/dist/client/components/headers';

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

  console.log(body);
  USERS.push(body);

  return new Response('You are registered', {
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
