import React from 'react'
import { Container, FormInput, Logo, Title, SubmitButton } from './styles'
import PesoImg from '../../assets/peso.png'

export default function SingIn() {
  return (
      <Container>
        <Logo source={PesoImg} resizeMode="stretch" />
          <FormInput
          icon="mail-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Email"
          />
          <FormInput
            icon="lock-closed-outline"
            secureTextEntry
            placeholder="Senha"
          />
        <SubmitButton children="Entrar" />
          <Title>Esqueceu a senha?</Title>
      </Container>
  )
}
