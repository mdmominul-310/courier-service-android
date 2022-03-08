import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import AppStack from './AppStack';
import Register from '../screens/Register';
import AllOrderScreen from '../screens/AllOrderScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Dashboard" component={AppStack} />
      <Stack.Screen name="AllOrders" component={AllOrderScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
