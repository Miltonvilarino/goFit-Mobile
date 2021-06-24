import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts }  from 'expo-font'
import { Quicksand_400Regular, Quicksand_500Medium, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import AppLoading from 'expo-app-loading';
import { Background } from './src/components/Background';

import { Routes } from './src/routes';

export default function App(){
  const [fontsLoaded] =  useFonts({
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  );
}
