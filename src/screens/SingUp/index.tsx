import React from 'react'
import { View, Text, Image } from 'react-native'
import { Link } from '@react-navigation/native'

import PesoImg from '../../assets/peso.png'
import Button from '../../components/Button'

import { styles } from './styles'

export default function SignUp() {
  return (
    <View>
      <View style={styles.container}>
        <Image source={PesoImg} style={styles.image} resizeMode="stretch" />
        <Button title="Entrar" activeOpacity={0.7} />
        <View style={styles.content}>
          <Link to="" style={styles.title}>
            SINGUP
          </Link>
        </View>
      </View>
    </View>
  )
}
