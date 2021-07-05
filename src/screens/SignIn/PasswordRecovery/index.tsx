import React from 'react'
import { useNavigation } from '@react-navigation/native'
import BackButton from '../../../components/BackButton'
import { Container, Title, Texto, ConfirmButton, Content, EmailInput } from './styles'

export default function PasswordRecovery() {
  const navigation = useNavigation()

  function NavigationTo() {
    navigation.navigate('CodeRecovery')
  }
  return (
    <Container>
      <BackButton screen={'/SignIn'} />
      <Title>Recuperação de senha</Title>
      <Content>
        <Texto>
          Insira seu e-mail para o envio do código de recuperação de senha:
        </Texto>
        <EmailInput autoCorrect={false} autoCapitalize="none" />
      </Content>
      <ConfirmButton children="Enviar" onPress={NavigationTo} />
    </Container>
  )
}
