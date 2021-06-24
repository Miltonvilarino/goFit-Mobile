import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar
} from 'react-native';

import PesoImg from '../../assets/peso.jpg';
import { Button } from '../../components/Button';

import { styles } from './styles';

export function SignIn(){
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={PesoImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <Button children="Entrar"/>
      <View style={styles.content}>
        <Text style={styles.title}>
          Não tem conta ainda? Cadastre-se
        </Text>
      </View>
    </View>
  )
}
