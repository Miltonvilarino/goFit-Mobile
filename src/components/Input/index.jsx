import React, { forwardRef } from 'react'

import Icon from 'react-native-vector-icons/Feather';

import { Container, TInput } from './styles'

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="white" style={{ marginLeft: 7 }} />}
      <TInput {...rest} ref={ref}/>
    </Container>
  )
}

export default forwardRef(Input)
