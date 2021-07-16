import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../components/BackButton";
import RadioB from "./RadioButton";
import { ConfirmButton, Container, Title, Content, TitleRadio } from "./styles";

export default function AnamneseTwo() {
  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate("AnamneseThree");
  }
  return (
    <Container>
      <BackButton screen={"/AnamneseOne"} />
      <Title text="ANAMNESE" />
      <Content>
        <View>
          <TitleRadio>Você ja praticou atividade física?</TitleRadio>
          <RadioB />
        </View>
      </Content>
      <ConfirmButton children="Confirmar" onPress={handleNavigation} />
    </Container>
  );
}
