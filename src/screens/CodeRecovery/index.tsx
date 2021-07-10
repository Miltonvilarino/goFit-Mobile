import React from 'react'
import { useNavigation } from '@react-navigation/native'
import BackButton from '../../components/BackButton'
import { Container, Title, Texto, ConfirmButton, Content, CodeInput } from './styles'

export default function CodeRecovery() {
  const navigation = useNavigation()

  function NavigationTo() {
    navigation.navigate('NewPassword')
  }
  return (
    <Container>
      <BackButton screen={'/PasswordRecovery'} />
      <Title>Recuperação de senha</Title>
      <Content>
        <Texto>
        Insira o código que chegou em seu e-mail:
        </Texto>
        <CodeInput width="156px" height="27px" autoCorrect={false} autoCapitalize="none" />
      </Content>
      <ConfirmButton children="Enviar" onPress={NavigationTo} />
    </Container>
  )
}
