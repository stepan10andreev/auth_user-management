import { RegistrationForm } from '@/components/RegistrationFormContainer/RegistrationForm/RegistrationForm'
import { RegistrationFormContainer } from '@/components/RegistrationFormContainer/RegistrationFormContainer'
import { Container } from '@/components/ui-components/Container/Container'
import { Content } from '@/components/ui-components/Content/Content'
import { Header } from '@/components/ui-components/Header/Header'
import { Welcome } from '@/components/ui-components/Welcome/Welcome'



export default function UserTablePage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  return (
    <Header>
      <Container>
        <Welcome greeting={`Hi, ${searchParams.name}!`} As='h1' />
      </Container>
    </Header>
  )
}
