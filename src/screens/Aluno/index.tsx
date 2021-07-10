import React from 'react'
import FormaImg from '../../assets/forma.png'
import BackButton from '../../components/BackButton'
import {
  Container,
  Title,
  Texto,
  ConfirmButton,
  Content,
  Forma,

} from './styles'

export default function Aluno() {
  return (
    <Container>
      <BackButton screen={'/AlunoProfessor'} />
      <Title text="ALUNO"/>
      <Content>
        <Forma source={FormaImg} resizeMode="stretch"/>
        <Texto>
          Agora precisamos que você preencha um formulário de anamnese
        </Texto>
      </Content>
      <ConfirmButton children="Confirmar" />
    </Container>
  )
}
