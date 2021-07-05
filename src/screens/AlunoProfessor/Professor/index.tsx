import React from 'react'
import BackButton from '../../../components/BackButton'
import Input from '../../../components/Input'
import {Container, Title, Texto, ConfirmButton, Content} from './styles'

export default function Professor() {
  return (
    <Container>
      <BackButton screen={'/AlunoProfessor'} />
      <Title>Professor</Title>
      <Content>
        <Texto>Para dar continuidade, é necessário que você informe seu CREF:</Texto>
        <Input width="123px" height="25px" masked mask={"SSSSSS-S/SS"} />
      </Content>
      <ConfirmButton children="Confirmar" />
    </Container>
  )
}
