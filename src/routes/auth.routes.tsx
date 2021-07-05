import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import AlunoProfessor from '../screens/AlunoProfessor'
import Aluno from '../screens/Aluno'
import Professor from '../screens/Professor'
import CodeRecovery from '../screens/SignIn/CodeRecovery'
import PasswordRecovery from '../screens/SignIn/PasswordRecovery'
import NewPassword from '../screens/SignIn/NewPassword'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
        },
      }}
      >
      <Screen name="PasswordRecovery" component={PasswordRecovery} />
      <Screen name="NewPassword" component={NewPassword} />
      <Screen name="CodeRecovery" component={CodeRecovery} />
      <Screen name="Professor" component={Professor} />
      <Screen name="AlunoProfessor" component={AlunoProfessor} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="Home" component={Home} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Aluno" component={Aluno} />
    </Navigator>
  )
}
