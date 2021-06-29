import React from 'react'
import { View } from 'react-native'
import { Container, Foto, Title, Content } from './styles'
import Button from '../../components/Button'
import PesoImg from '../../assets/peso.png'
import Input from '../../components/Input'

export default function SingIn() {
  return (
    <View>
      <Container>
        <Foto source={PesoImg}  resizeMode="stretch" />
        <Input style icon="call" placeholder="email"/>
        <Button children="Entrar" />
        <Content>
          <Title>SINGUP</Title>
        </Content>
      </Container>
    </View>
  )
}
