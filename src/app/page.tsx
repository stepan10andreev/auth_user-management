import { RegistrationForm } from '@/components/RegistrationFormContainer/RegistrationForm/RegistrationForm'
import { RegistrationFormContainer } from '@/components/RegistrationFormContainer/RegistrationFormContainer'
import { Container } from '@/components/ui-components/Container/Container'
import { Content } from '@/components/ui-components/Content/Content'

export default function Home() {
  return (
    <Content>
      <Container>
        <RegistrationFormContainer />
      </Container>
    </Content>
  )
}
