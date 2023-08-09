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

export default async function UserTablePage() {

  const session = await getServerSession(AuthConfig);
  session && await USER_SERVICE.login(session.user.id as string);

  const usersList = await USER_SERVICE.getUsers();
  console.log(session)
  console.log(usersList)

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
