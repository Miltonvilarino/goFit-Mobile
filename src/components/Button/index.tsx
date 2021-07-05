import React, { ReactNode } from 'react'
import { ActivityIndicator } from 'react-native'

import { Container, Text } from './styles'

type Props = {
  children: ReactNode;
  loading?: string;
  onPress?: any;
  width?: string;
  height?: string;
}

export default function Button({ children, loading, ...props }: Props) {
  return (
    <Container {...props}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  )
}
