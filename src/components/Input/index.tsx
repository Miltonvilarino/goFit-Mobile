import React, { useState } from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { Container, TextInput, Title, MaskedInput } from './styles'

type Props = {
  style?: object;
  icon?: string;
  title?: string;
  placeholder?: string;
  secureTextEntry?: any;
  autoCorrect?: any;
  autoCapitalize?: any;
  masked?: any;
  props?: string;
  width: string;
  height: string;
}

export default function Input({
  style,
  icon,
  title,
  placeholder,
  secureTextEntry,
  autoCorrect,
  autoCapitalize,
  masked,
  ...props
}: Props) {
  const [maskedValue, setMaskedValue] = useState('')
  const [unMaskedValue, setUnmaskedValue] = useState('')

  return (
    <View style={style}>
      {title && <Title>{title}</Title>}
      <Container {...props}>
        {icon && (
          <Icon name={icon} size={20} color="white" style={{ marginLeft: 7 }} />
        )}
        {masked ? (
          <MaskedInput
            mask="99/99/9999"
            onChangeText={(text, rawText) => {
              setMaskedValue(text)
              setUnmaskedValue(rawText)
            }}
            keyboardType="numeric"
          />
        ) : (
          <TextInput
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            autoCorrect={autoCorrect}
            autoCapitalize={autoCapitalize}
          />
        )}
      </Container>
    </View>
  )
}
