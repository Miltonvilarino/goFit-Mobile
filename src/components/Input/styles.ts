import styled from "styled-components/native";

export const Container = styled.View`
  width: 242px;
  height: 34px;
  background: #333232;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e6dfdf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.75);
  border-radius: 6px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: "#B3AEAE"
})`
  flex: 1;
  font-size: 16px;
  margin-left: 9px;
  color: #fff;
`;
