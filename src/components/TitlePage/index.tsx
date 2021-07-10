import React from 'react'
import { Container } from './styles'

type Props = {
  text: string;
}

export default function TitlePage({text}: Props) {
  return (
    <Container>
      {text}
    </Container>
  )
}
