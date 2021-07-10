import React from 'react'
import { Container, SubmitButton, TInput, Form, TitleRadio } from './styles'
import BackButton from '../../components/BackButton'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import RadioB from './RadioButton'

export default function SignUp() {
  const navigation = useNavigation()

  function handleNavigation() {
    navigation.navigate('AlunoProfessor')
  }
  return (
    <ScrollView>
      <Container>
        <BackButton screen={'/Home'} />
        <Form>
          <TInput width="272px" height="27px" title="Nome:" />
          <TInput width="272px" height="27px" title="Sobrenome:" />
          <TInput
            width="130px"
            height="27px"
            title="Data de Nascimento:"
            masked
            mask={'99/99/9999'}
            keyboardType="numeric"
          />
          <TitleRadio>Gênero</TitleRadio>
          <RadioB />
          <TInput
            width="272px"
            height="27px"
            title="E-mail:"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TInput
            width="272px"
            height="27px"
            title="Senha:"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TInput
            width="272px"
            height="27px"
            title="Confirmar senha:"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
          />
        </Form>
        <SubmitButton children="Cadastrar" onPress={handleNavigation} />
      </Container>
    </ScrollView>
  )
}
