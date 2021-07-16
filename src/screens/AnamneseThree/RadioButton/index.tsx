import React, { useState } from "react";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";
import { View } from "react-native";

const radioButtonsData: RadioButtonProps[] = [
  {
    id: "1",
    label: "Sim",
    value: "option1",
    size: 16,
    color: "#FE0707",
    labelStyle: {
      color: "#F2EBEB",
      marginLeft: 8,
      fontSize: 14,
      fontFamily: "Quicksand_400Regular",
    },
    containerStyle: {
      padding: 10,
    },
  },
  {
    id: "2",
    label: "Não",
    value: "option2",
    size: 16,
    color: "#FE0707",
    labelStyle: {
      color: "#F2EBEB",
      marginLeft: 8,
      fontSize: 14,
      fontFamily: "Quicksand_400Regular",
    },
    containerStyle: {
      padding: 10,
    },
  },
];

export default function RadioB() {
  const [radioButtons, setRadioButtons] =
    useState<RadioButtonProps[]>(radioButtonsData);

  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <View>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        layout="row"
      />
    </View>
  );
}
