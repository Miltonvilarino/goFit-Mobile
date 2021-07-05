import React from 'react';
import {Container, TextB} from './styles'
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native'

export default function AlunoProfessor() {
  const navigation = useNavigation()

  function NavigationToAluno() {
    navigation.navigate('Aluno')
  }

  function NavigationToProfessor() {
    navigation.navigate('Professor')
  }

  return (
    <Container>
      <BackButton screen={'/SignUp'} />
      <Button children="Aluno" width="204px" height="52px" onPress={NavigationToAluno}/>
        <TextB>Ou</TextB>
      <Button children="Professor" width="204px" height="52px" onPress={NavigationToProfessor} />
    </Container>
  )
}
