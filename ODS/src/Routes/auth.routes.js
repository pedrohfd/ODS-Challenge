import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import Start from '../pages/Start';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Start"
      component={Start}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    />
    <AuthStack.Screen
      name="SignUp"
      component={SignUp}
      options={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;
