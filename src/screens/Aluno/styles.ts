import styled from "styled-components/native";
import Button from "../../components/Button";
import TitlePage from "../../components/TitlePage";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled(TitlePage)``;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 82px;
`;

export const Forma = styled.Image`
  position: absolute;
`;

export const Texto = styled.Text`
  width: 100px;
  height: 158px;
  font-family: "Quicksand_500Medium";
  font-size: 16px;
  line-height: 20px;
  color: #f2ebeb;
`;

export const ConfirmButton = styled(Button)`
  margin-bottom: 80px;
  margin-top: 93px;
`;
