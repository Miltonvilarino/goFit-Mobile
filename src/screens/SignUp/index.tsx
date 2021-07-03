import React from 'react'
import { Container, SubmitButton, TInput, Form } from './styles'
import BackButton from '../../components/BackButton'

export default function SignUp() {
  return (
    <Container>
      <BackButton screen={'/Home'} />
      <Form>
        <TInput width="272px" height="27px" title="Nome:" />
        <TInput width="272px" height="27px" title="Sobrenome:" />
        <TInput width="130px" height="27px" title="Data de Nascimento:" />
        <TInput width="272px" height="27px" title="E-mail:" />
        <TInput width="272px" height="27px" title="Senha:" secureTextEntry />
        <TInput width="272px" height="27px" title="Confirmar senha:" secureTextEntry />
      </Form>

      <SubmitButton children="Cadastrar" />
    </Container>
  )
}
