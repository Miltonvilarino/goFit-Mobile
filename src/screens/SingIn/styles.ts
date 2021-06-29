import styled from "styled-components/native";
import Button from "../../components/Button";
import Input from "../../components/Input";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 14px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;

export const Logo = styled.Image`
  margin: 121px 188px 91px;
`;

export const Title = styled.Text`
margin-top: 30px;
font-size: 14px;
line-height: 17px;
color: #f2ebeb;
text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.6);
`;
