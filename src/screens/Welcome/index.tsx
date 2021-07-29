import React from 'react';
//import { useNavigation } from '@react-navigation/native';
import welcome from '../../assets/welcome.png';
import { Container, Texto, ConfirmButton, Content, Form } from './styles';
import BackButton from '../../components/BackButton';

export default function Welcome() {
  return (
    <Container>
      <BackButton screen={'/AnamneseThree'} />
      <Content>
        <Form source={welcome} resizeMode='stretch' />
        <Texto>
          Olá (Nome), seja {'\n'} bem-vindo!{'\n'}
          Agora você ja pode {'\n'}começar seus treinos!
        </Texto>
      </Content>
      <ConfirmButton children='Avançar' />
    </Container>
  );
}
