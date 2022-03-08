import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import { NativeBaseProvider } from 'native-base';
import Context from './src/Context/Context';
import UseAuth from './src/Hooks/UseAuth';
import UseFirebase from './src/Hooks/useFirebase';
import AlertWarning from './src/components/Shared/AlertWarning';

function App() {
  const { user } = UseFirebase();
  return (
    <Context>
      <NativeBaseProvider>
        <NavigationContainer>
          {user.email ? <AppStack /> : <AuthStack />}
          {/* <AppStack /> */}
          {/* <AlertWarning /> */}
        </NavigationContainer>
      </NativeBaseProvider>
    </Context>
  );
}

export default App;
