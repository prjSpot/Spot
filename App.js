import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from './pages/LoadingPage/LoadingScreen';
import SignUpScreen from './pages/UserPage/SignUpScreen';
import LoginScreen from './pages/UserPage/LoginScreen';
import FindUserIdScreen from './pages/UserPage/FindUserIdScreen';
import ForgotPassScreen from './pages/UserPage/ForgotPassScreen';
import ResetPassScreen from './pages/UserPage/ResetPassScreen';
import ForgotNameScreen from './pages/UserPage/ForgotNameScreen';
import SettingScreen from './pages/UserPage/SettingScreen';
import Index from './pages/index';

const App = () => {

  const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="index" component={Index} options={{ headerShown: false }}/>
          <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="FindUserIdScreen" component={FindUserIdScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="ForgotPassScreen" component={ForgotPassScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="ResetPassScreen" component={ResetPassScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="ForgotNameScreen" component={ForgotNameScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="SettingScreen" component={SettingScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

export default App;