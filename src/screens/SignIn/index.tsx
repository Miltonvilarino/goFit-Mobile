import React from 'react'
import { Container, FormInput, Logo, Title, SubmitButton } from './styles'
import BackButton from '../../components/BackButton'
import PesoImg from '../../assets/peso.png'

export default function SignIn() {
  return (
      <Container>
        <BackButton screen={'/Home'} />
        <Logo source={PesoImg} resizeMode="stretch" />
          <FormInput
          icon="mail"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="E-mail"
          />
          <FormInput
            icon="lock"
            secureTextEntry
            placeholder="Senha"
          />
        <SubmitButton children="Entrar" />
          <Title>Esqueceu a senha?</Title>
      </Container>
  )
}
