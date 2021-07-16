import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
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
  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate("AnamneseTwo");
  }
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
      <ConfirmButton children="Confirmar" onPress={handleNavigation} />
    </Container>
  );
}
