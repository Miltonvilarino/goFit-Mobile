import styled from "styled-components/native";
import Button from "../../components/Button";
import TitlePage from "../../components/TitlePage";
import Input from "../../components/Input";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;
export const Content = styled.View`
  align-items: baseline;
`;
export const Title = styled(TitlePage)`
  margin-top: 94px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 25px;
`;

export const TitleRadio = styled.Text`
  font-size: 18px;
  line-height: 22px;
  color: #f2ebeb;
  margin-top: 80px;
  margin-bottom: 8px;
  margin-right: auto;
  margin-left: 10px;
  font-family: "Quicksand_500Medium";
`;

export const ConfirmButton = styled(Button)`
  margin-bottom: 80px;
  margin-top: 140px;
`;
