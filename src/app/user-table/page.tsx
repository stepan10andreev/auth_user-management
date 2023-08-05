import { RegistrationForm } from '@/components/RegistrationFormContainer/RegistrationForm/RegistrationForm'
import { RegistrationFormContainer } from '@/components/RegistrationFormContainer/RegistrationFormContainer'
import { UserTable } from '@/components/UserTable/UserTable'
import { Container } from '@/components/ui-components/Container/Container'
import { Content } from '@/components/ui-components/Content/Content'
import { Header } from '@/components/ui-components/Header/Header'
import { Welcome } from '@/components/ui-components/Welcome/Welcome'
import { USER_SERVICE } from '@/services/user.service'



export default async function UserTablePage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const usersList = await USER_SERVICE.getUsers();

  return (
    <>
      <Header>
        <Container>
          <Welcome greeting={`Hi, ${searchParams.name}!`} As='h1' />
        </Container>
      </Header>
      <Content>
          <UserTable usersList={usersList} />
      </Content>
    </>
  )
}
