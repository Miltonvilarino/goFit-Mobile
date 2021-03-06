import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import AlunoProfessor from '../screens/AlunoProfessor';
import Professor from '../screens/Professor';
import Aluno from '../screens/Aluno';
import CodeRecovery from '../screens/CodeRecovery';
import PasswordRecovery from '../screens/PasswordRecovery';
import NewPassword from '../screens/NewPassword';
import Anamnese from '../screens/Anamnese';
import AnamneseOne from '../screens/AnamneseOne';
import AnamneseTwo from '../screens/AnamneseTwo';
import AnamneseThree from '../screens/AnamneseThree';
import Welcome from '../screens/Welcome';
const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <Screen name='Welcome' component={Welcome} />
      <Screen name='Home' component={Home} />
      <Screen name='Anamnese' component={Anamnese} />
      <Screen name='SignUp' component={SignUp} />
      <Screen name='AnamneseOne' component={AnamneseOne} />
      <Screen name='AnamneseTwo' component={AnamneseTwo} />
      <Screen name='AnamneseThree' component={AnamneseThree} />
      <Screen name='Aluno' component={Aluno} />
      <Screen name='SignIn' component={SignIn} />
      <Screen name='AlunoProfessor' component={AlunoProfessor} />
      <Screen name='Professor' component={Professor} />
      <Screen name='PasswordRecovery' component={PasswordRecovery} />
      <Screen name='NewPassword' component={NewPassword} />
      <Screen name='CodeRecovery' component={CodeRecovery} />
    </Navigator>
  );
}
