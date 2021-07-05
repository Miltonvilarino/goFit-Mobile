import React from 'react'
import BackButton from '../../../components/BackButton'
import { Container, Title, Texto, ConfirmButton, Content } from './styles'

export default function Aluno() {
  return (
    <Container>
      <BackButton screen={'/AlunoProfessor'} />
      <Title>Aluno</Title>
      <Content>
        <Texto>
          Agora precisamos que você preencha um formulário de anamnese
        </Texto>
      </Content>
      <ConfirmButton children="Confirmar" />
    </Container>
  )
}
