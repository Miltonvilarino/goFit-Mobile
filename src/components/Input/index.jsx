import React, { forwardRef } from 'react'

import { Ionicons } from '@expo/vector-icons';

import { Container, TInput } from './styles'

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && <Ionicons name={icon} size={20} color="white" style={{ marginLeft: 7 }} />}
      <TInput {...rest} ref={ref}/>
    </Container>
  )
}

export default forwardRef(Input)
