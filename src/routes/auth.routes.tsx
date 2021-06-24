import React from 'react';
import  { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import SingIn  from '../screens/SingIn';
import SignUp from '../screens/SingUp';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
      >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="SignIn"
        component={SingIn}
      />
      <Screen
        name="SignUp"
        component={SignUp}
      />
    </Navigator>
  )
}
