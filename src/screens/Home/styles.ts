import styled from "styled-components/native";
import Button from "../../components/Button";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  margin: 126px 241px 122px;
`;

export const SubmitButton = styled(Button)`
`;

export const Title = styled.Text`
  margin-top: 16px;
  font-size: 14px;
  line-height: 17px;
  color: #f2ebeb;
  text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.6);
`;
