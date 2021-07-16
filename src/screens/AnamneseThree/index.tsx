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
  Text,
  TitleRadio,
} from "./styles";

export default function AnamneseThree() {
  const navigation = useNavigation();

  function NavigationTo() {
    navigation.navigate("Welcome");
  }
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
        <TInput />
      </Content>
      <ConfirmButton children="Confirmar" onPress={NavigationTo} />
    </Container>
  );
}
