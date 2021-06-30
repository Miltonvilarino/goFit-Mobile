import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Link } from '@react-navigation/native'
import { Container } from './styles'

type Props = {
  screen: string;
}

export default function BackButton({ screen }: Props) {
  return (
    <Container>
      <Link to={screen}>
        <AntDesign name="left" size={20} color="white" />
      </Link>
    </Container>
  )
}
