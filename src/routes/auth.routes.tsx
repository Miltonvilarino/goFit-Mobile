import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import AlunoProfessor from '../screens/AlunoProfessor'
import Professor from '../screens/AlunoProfessor/Professor'
import Aluno from '../screens/AlunoProfessor/Aluno'
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
      <Screen name="Aluno" component={Aluno} />
      <Screen name="Home" component={Home} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="AlunoProfessor" component={AlunoProfessor} />
      <Screen name="Professor" component={Professor} />
      <Screen name="PasswordRecovery" component={PasswordRecovery} />
      <Screen name="NewPassword" component={NewPassword} />
      <Screen name="CodeRecovery" component={CodeRecovery} />
    </Navigator>
  )
}
