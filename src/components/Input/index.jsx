import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { Container, TextInput, Title } from "./styles";

export default function Input({
  style,
  icon,
  title,
  placeholder,
  secureTextEntry,
  autoCorrect,
  autoCapitalize,
  ...props
}) {
  return (
    <View style={style}>
      {title && <Title>{title}</Title>}
      <Container {...props}>
        {icon && (
          <Icon name={icon} size={20} color="white" style={{ marginLeft: 7 }} />
        )}
        <TextInput
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          autoCorrect={autoCorrect}
          autoCapitalize={autoCapitalize}
        />
      </Container>
    </View>
  );
}
