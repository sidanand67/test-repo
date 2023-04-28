import React, { useEffect, useState } from 'react';

import {View,AppRegistry} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Splash from './src/screens/Splash';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';

const Stack = createNativeStackNavigator(); 

const App = () => {
  const [login, setLogin] = useState(false); 

  useEffect(() => {
    setTimeout(() => {
      setLogin(true); 
    }, (2000));
  }, []); 

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {
          !login ? (
            <Stack.Screen name='splash' component={Splash} /> 
          )
          : (
            <>
              <Stack.Screen name='login' component={Login} /> 
              <Stack.Screen name="signUp" component={SignUp} />
              <Stack.Screen name='signIn' component={SignIn} /> 
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

AppRegistry.registerComponent(()=>App)