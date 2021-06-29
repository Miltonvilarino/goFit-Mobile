import React, { ReactNode } from 'react'
import { ActivityIndicator } from 'react-native'

import { Container, Text } from './styles'

type Props = {
  children: ReactNode;
  loading?: string;
  onPress?: any;
}

export default function Button({ children, loading, ...rest }: Props) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  )
}
