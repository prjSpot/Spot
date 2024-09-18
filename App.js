import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './SignUpScreen'; // 회원가입 페이지
import ForgotPassScreen from './ForgotPassScreen'; // 비밀번호 찾기 페이지
import ResetPassScreen from './ResetPassScreen';
import FindUserIdScreen from './FindUserIdScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPass" component={ForgotPassScreen} />
        <Stack.Screen name="ResetPass" component={ResetPassScreen} />
        <Stack.Screen name="FindUserId" component={FindUserIdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
