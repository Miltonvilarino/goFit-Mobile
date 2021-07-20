import React from "react";
import { View } from "react-native";
import BackButton from "../../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/Input";
import { Container, Title, Texto, ConfirmButton, Content } from "./styles";

export default function Anamnese() {
  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate("AnamneseOne");
  }
  return (
    <Container>
      <BackButton screen={"/Aluno"} />
      <Title text="ANAMNESE" />
      <Content>
        <View>
          <Texto>Peso:</Texto>
          <Input
            width="77px"
            height="27px"
            masked
            type="currency"
            options={{
              suffix: 'Kg',
              decimalSeparator: '.',
              precision: 1
            }}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="decimal-pad"
          />
        </View>

        <View style={{ marginLeft: 18 }}>
          <Texto>Altura:</Texto>
          <Input
            width="77px"
            height="27px"
            masked
            type="currency"
            options={{
              suffix: 'm',
              decimalSeparator: ',',
              precision: 2
            }}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
          />
        </View>
      </Content>
      <ConfirmButton children="Confirmar" onPress={handleNavigation} />
    </Container>
  );
}
