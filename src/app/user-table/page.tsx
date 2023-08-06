import { Toolbar } from '@/components/Toolbar/Toolbar'
import { UserTable } from '@/components/UserTable/UserTable'
import { Container } from '@/components/ui-components/Container/Container'
import { Content } from '@/components/ui-components/Content/Content'
import { Header } from '@/components/ui-components/Header/Header'
import { Welcome } from '@/components/ui-components/Welcome/Welcome'
import { AuthConfig } from '@/configs/auth'
import { USER_SERVICE } from '@/services/user.service'
import { getServerSession } from 'next-auth/next'
import Link from 'next/link'
import { IUser } from '../../../data/users'

export const USERS: IUser[] = [
  { "isBlocked": false, "name": "Lionel", "email": "test@gmail.com", "password": "1", "login": "Lionel", "createdAt": "2023-08-06 18:56:55", "lastLogin": "2023-08-06 18:56:55", "id": "Xf5LIcnOu01kp5yPvzRwn" },
  { "isBlocked": false, "name": "Harry", "email": "test@harry.com", "password": "12", "login": "Harry", "createdAt": "2023-08-06 19:19:33", "lastLogin": "2023-08-06 19:19:33", "id": "o-IoZ1Gnt71qE_OsoUbEf" },
  { "isBlocked": false, "name": "Alice", "email": "test@alice.com", "password": "123", "login": "Alice", "createdAt": "2023-08-04 12:40:14", "lastLogin": "2023-08-04 13:32:14", "id": "0D_DDaxvRg2dS9MX4OT0t" },
  { "isBlocked": false, "name": "Vasya", "email": "test@vasya.com", "password": "any", "login": "Vasya", "createdAt": "2023-08-05 14:45:34", "lastLogin": "2023-08-04 13:32:14", "id": "HNOgcJMvTvmb6N4rrNOfP" },
]

export default async function UserTablePage() {

  const session = await getServerSession(AuthConfig);
  session && await USER_SERVICE.login(session.user.id as string);

  const usersList = await USER_SERVICE.getUsers();

  return (
    <>
      <Header>
        <Container>
          <Welcome greeting={`Hi, ${session ? session.user?.name : 'You are not authorized'}!`} As='h1' />
          {!session && <Link href="/">Home</Link>}
        </Container>
      </Header>
      {session && (
        <Content>
          <Toolbar userId={session.user.id as string} />
          <UserTable usersList={usersList} />
        </Content>
      )}
    </>
  )
}
