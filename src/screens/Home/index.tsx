import React from 'react'
import { View, Text, Image } from 'react-native'
import { Link } from '@react-navigation/native'

import PesoImg from '../../assets/peso.png'
import Button from '../../components/Button'

import { styles } from './styles'

type Props =  View & {
  navigation: any;
}

export default function Home({ navigation }: Props) {
  return (
    <View>
      <View style={styles.container}>
        <Image source={PesoImg} style={styles.image} resizeMode="stretch" />
        <Button title="Entrar" activeOpacity={0.7} onPress={() => navigation.navigate('SignIn')} />
        <View style={styles.content}>
          <Link to="/SignUp" style={styles.title}>
            Não tem conta ainda? Cadastre-se
          </Link>
        </View>
      </View>
    </View>
  )
}
