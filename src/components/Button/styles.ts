import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

interface ContainerProps {
  width?: string;
  height?: string;
}

export const Container = styled(BaseButton)`
  width: ${(props:ContainerProps) => props.width ? `${props.width}` : '158px'};
  height: ${(props:ContainerProps) => props.height ? `${props.height}` : '40px'};
  background: #BF1622;
  border-radius: 21px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
`;
