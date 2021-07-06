import styled from "styled-components/native";
import Button from "../../../components/Button";
import { theme } from "../../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 36px;
  line-height: 45px;
  color: #f2ebeb;
  margin-top: 94px;
  font-family: 'Quicksand_700Bold';
`;

export const Content = styled.View`
  margin-right: 144px;
  margin-left: 44px;
  margin-top: 97px;
`;

export const Texto = styled.Text`
  width: 168px;
  height: 80px;
  font-family: 'Quicksand_500Medium';
  font-size: 16px;
  line-height: 20px;
  color: #f2ebeb;
  margin-bottom: 8px;
`;

export const ConfirmButton = styled(Button)`
  margin-top: 123px;
  margin-bottom: 128px;
`;
