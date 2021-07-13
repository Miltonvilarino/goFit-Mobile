import styled from "styled-components/native";
import { MaskedTextInput } from "react-native-mask-text";

interface ContainerProps {
  width?: string;
  height?: string;
}

export const Container = styled.View`
  width: ${(props:ContainerProps) => props.width ? `${props.width}` : '242px'};
  height: ${(props:ContainerProps) => props.height ? `${props.height}` : '34px'};
  background: #333232;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e6dfdf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.75);
  border-radius: 6px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: "#B3AEAE",
})`
  flex: 1;
  font-size: 16px;
  margin-left: 9px;
  color: #fff;
  font-family: 'Quicksand_400Regular';
`;

export const MaskedInput = styled(MaskedTextInput)`
  flex: 1;
  font-size: 16px;
  margin-left: 9px;
  color: #fff;
`;

export const Title = styled.Text`
  font-size: 18px;
  line-height: 22px;
  color: #F2EBEB;
  margin-bottom: 8px;
  margin-right: auto;
  font-family: 'Quicksand_500Medium';
`;
