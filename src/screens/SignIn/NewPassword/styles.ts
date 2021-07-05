import styled from "styled-components/native";
import Button from "../../../components/Button";
import Input from '../../../components/Input'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 28px;
  line-height: 35px;
  width: 214px;
  height: 67px;
  color: #f2ebeb;
  margin-top: 94px;
  font-family: 'Quicksand_700Bold';
`;

export const Content = styled.View`
  margin-top: 97px;
`;

export const Texto = styled.Text`
  width: 278px;
  height: 20px;
  font-family: 'Quicksand_500Medium';
  font-size: 18px;
  line-height: 20px;
  color: #f2ebeb;
  margin-top: 16px;
`;

export const PasswordInput = styled(Input)`
  margin-top: 8px;
`;

export const ConfirmButton = styled(Button)`
  margin-top: 32px;
  margin-bottom: 128px;
`;
