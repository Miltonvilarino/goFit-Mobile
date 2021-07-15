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
  TitleRadio,
} from "./styles";

export default function AnamneseOne() {
  return (
    <Container>
      <BackButton screen={"/Anamnese"} />
      <Title text="ANAMNESE" />
      <Content>
        <View>
          <TitleRadio>Objetivos:</TitleRadio>
          <RadioB />
        </View>
        <TInput width="272px" height="27px" />
      </Content>
      <ConfirmButton children="Confirmar" />
    </Container>
  );
}
