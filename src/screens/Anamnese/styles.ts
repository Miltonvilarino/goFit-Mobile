import styled from "styled-components/native";
import Button from "../../components/Button";
import TitlePage from "../../components/TitlePage";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled(TitlePage)`
  margin-top: 94px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 137px;
`;

export const Texto = styled.Text`
  font-family: "Quicksand_500Medium";
  font-size: 16px;
  line-height: 20px;
  color: #f2ebeb;
  margin-bottom: 6px;
`;

export const ConfirmButton = styled(Button)`
  margin-bottom: 80px;
  margin-top: 140px;
`;
