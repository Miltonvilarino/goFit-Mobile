import React from "react";
//import { useNavigation } from "@react-navigation/native";
import welcome from "../../assets/welcome.png";
import { Container, Text, ConfirmButton, Content, Form } from "./styles";
import BackButton from "../../components/BackButton";

export default function Welcome() {
  return (
    <Container>
      <BackButton screen={"/AnamneseThree"} />
      <Content>
        <Form source={welcome} resizeMode="stretch" />
        <Text>
          Olá (Nome), seja bem-vindo!Agora você ja pode começar seus treinos!
        </Text>
      </Content>
      <ConfirmButton children="Avançar" />
    </Container>
  );
}
