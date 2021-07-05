import React from 'react'
import { useNavigation } from '@react-navigation/native'
import BackButton from '../../../components/BackButton'
import { Container, Title, Texto, ConfirmButton, Content, PasswordInput } from './styles'

export default function NewPassword() {
  const navigation = useNavigation()

  function NavigationTo() {
    navigation.navigate('')
  }
  return (
    <Container>
      <BackButton screen={'/CodeRecovery'} />
      <Title>Recuperação de senha</Title>
      <Content>
        <Texto>
          Crie sua nova senha:
        </Texto>
        <PasswordInput autoCorrect={false} autoCapitalize="none" secureTextEntry />
        <Texto>
          Confirmar senha:
        </Texto>
        <PasswordInput autoCorrect={false} autoCapitalize="none" secureTextEntry />
      </Content>
      <ConfirmButton children="Enviar" onPress={NavigationTo} />
    </Container>
  )
}
