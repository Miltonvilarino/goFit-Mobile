import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { styles } from './styles';

export function Button({children}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  );
}

