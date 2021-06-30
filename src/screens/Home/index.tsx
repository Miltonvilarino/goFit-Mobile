import React from 'react'
import { Link } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import PesoImg from '../../assets/peso.png'

import { Container, Logo, Title, SubmitButton } from './styles'

export default function Home() {
  const navigation = useNavigation()

  function handleNavigation() {
    navigation.navigate('SignIn')
  }

  return (
    <Container>
      <Logo source={PesoImg} resizeMode="stretch" />
      <SubmitButton children="Entrar" onPress={handleNavigation} />
      <Title>
        <Link to="/SignUp">Não tem conta ainda? Cadastre-se</Link>
      </Title>
    </Container>
  )
}
