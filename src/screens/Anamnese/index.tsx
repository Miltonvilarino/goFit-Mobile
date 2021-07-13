import React from 'react'
import { View } from 'react-native'
import BackButton from '../../components/BackButton'
import Input from '../../components/Input'
import { Container, Title, Texto, ConfirmButton, Content } from './styles'

export default function Anamnese() {
  return (
    <Container>
      <BackButton screen={'/Aluno'} />
      <Title text="ANAMNESE" />
      <Content>
        <View>
          <Texto>Peso:</Texto>
          <Input
            width="77px"
            height="27px"
            masked
            mask={"SS"}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="decimal-pad"
          />
        </View>

        <View style={{marginLeft: 18}}>
          <Texto>Altura:</Texto>
          <Input
            width="77px"
            height="27px"
            masked
            mask={"9,99"}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
          />
        </View>
      </Content>
      <ConfirmButton children="Confirmar" />
    </Container>
  )
}
