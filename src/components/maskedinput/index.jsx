import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { MaskedTextInput} from "react-native-mask-text";

export default function Masked() {
  const [maskedValue, setMaskedValue] = useState("");
  const [unMaskedValue, setUnmaskedValue] = useState("");

  return (
    <View style={styles.container}>
      <MaskedTextInput
        mask="99/99/9999"
        onChangeText={(text, rawText) => {
          setMaskedValue(text);
          setUnmaskedValue(rawText);
        }}
        style={styles.input}
        keyboardType="numeric"
      />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
