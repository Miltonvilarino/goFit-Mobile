import React from 'react'
import { Container, SubmitButton, TInput, Form, TitleRadio } from './styles'
import BackButton from '../../components/BackButton'
import { ScrollView } from 'react-native'

import RadioB from './RadioButton'

export default function SignUp() {
  return (
    <ScrollView>
    <Container>
      <BackButton screen={'/Home'} />
      <Form>
        <TInput width="272px" height="27px" title="Nome:" />
        <TInput width="272px" height="27px" title="Sobrenome:" />
        <TInput width="130px" height="27px" title="Data de Nascimento:" masked/>
        <TitleRadio>Gênero</TitleRadio>
        <RadioB />
        <TInput width="272px" height="27px" title="E-mail:" />
        <TInput width="272px" height="27px" title="Senha:" secureTextEntry />
        <TInput width="272px" height="27px" title="Confirmar senha:" secureTextEntry />
      </Form>
      <SubmitButton children="Cadastrar" />
    </Container>
    </ScrollView>
  )
}
