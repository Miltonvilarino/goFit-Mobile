import React from "react";
import { Link } from "@react-navigation/native";
import { Container, FormInput, Logo, Title, SubmitButton } from "./styles";
import BackButton from "../../components/BackButton";
import PesoImg from "../../assets/peso.png";

export default function SignIn() {
  return (
    <Container>
      <BackButton screen={"/Home"} />
      <Logo source={PesoImg} resizeMode="stretch" />
      <FormInput
        icon="mail"
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="E-mail"
      />
      <FormInput icon="lock" secureTextEntry placeholder="Senha" />
      <SubmitButton children="Entrar" />
      <Title>
        <Link to="/PasswordRecovery">Esqueceu a senha?</Link>
      </Title>
    </Container>
  );
}
