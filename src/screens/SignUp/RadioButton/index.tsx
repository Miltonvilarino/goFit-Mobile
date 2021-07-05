import React, { useState } from 'react'
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group'
import { View } from 'react-native'

const radioButtonsData: RadioButtonProps[] = [
  {
    id: '1',
    label: 'Masculino',
    value: 'option1',
    size: 16,
    color: '#FE0707',
    labelStyle: {
      color: '#F2EBEB',
      marginLeft: 12,
      fontSize: 14,
    },
    containerStyle: {
      marginLeft: 0,
    },
  },
  {
    id: '2',
    label: 'Feminino',
    value: 'option2',
    size: 16,
    color: '#FE0707',
    labelStyle: {
      color: '#F2EBEB',
      marginLeft: 12,
      fontSize: 14,
    },
  },
  {
    id: '3',
    label: 'Flex',
    size: 16,
    color: '#FE0707',
    value: 'option3',
    labelStyle: {
      color: '#F2EBEB',
      marginLeft: 12,
      fontSize: 14,
    },
  },
]

export default function RadioB() {
  const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>(
    radioButtonsData,
  )

  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    setRadioButtons(radioButtonsArray)
  }

  return (
    <View>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        layout="row"
      />
    </View>
  )
}
