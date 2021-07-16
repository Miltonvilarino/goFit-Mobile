import React from "react";
import { View } from "react-native";
import BackButton from "../../components/BackButton";
import RadioB from "./RadioButton";
import {
  ConfirmButton,
  Container,
  Title,
  Content,
  TInput,
  Text,
  TitleRadio,
} from "./styles";

export default function AnamneseThree() {
  return (
    <Container>
      <BackButton screen={"/AnamneseTwo"} />
      <Title text="ANAMNESE" />
      <Content>
        <View>
          <TitleRadio>Possui alguma doença/condição física?</TitleRadio>
          <RadioB />
        </View>
        <Text>Explique:</Text>
        <TInput width="272" height="27px" />
      </Content>
      <ConfirmButton children="Confirmar" />
    </Container>
  );
}
