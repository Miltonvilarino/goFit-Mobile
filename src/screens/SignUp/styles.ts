import styled from "styled-components/native";
import Button from "../../components/Button";
import Input from "../../components/Input";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 30px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 28px;
`;

export const Form = styled.View`
  margin-top: 57px;
`;

export const TInput = styled(Input)`
  margin-top: 14px;
`;

export const TitleRadio = styled.Text`
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
color: #F2EBEB;
margin-top: 14px;
margin-bottom: 8px;
margin-right: auto;
`;
