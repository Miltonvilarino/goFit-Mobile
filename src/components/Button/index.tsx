import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { styles } from './styles';

export function Button() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
    </TouchableOpacity>
  );
}

