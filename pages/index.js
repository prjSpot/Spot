import { ScrollView, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const Index = () => {
  const navigation = useNavigation();
    

    return (
        <ScrollView style={{ marginTop: 60, marginLeft: 20 }}>
            <Pressable style={{padding: 10}} onPress={() => navigation.navigate('LoadingScreen')}>
                <Text>로딩 페이지</Text>
            </Pressable>
            <Pressable style={{padding: 10}} onPress={() => navigation.navigate('SignUpScreen')}>
                <Text>회원가입 페이지</Text>
            </Pressable>
            <Pressable style={{padding: 10}} onPress={() => navigation.navigate('LoginScreen')}>
                <Text>로그인 페이지</Text>
            </Pressable>
            <Pressable style={{padding: 10}} onPress={() => navigation.navigate('FindUserIdScreen')}>
                <Text>ID 찾기 페이지</Text>
            </Pressable>
            <Pressable style={{padding: 10}} onPress={() => navigation.navigate('ForgotPassScreen')}>
                <Text>비밀번호 찾기 페이지</Text>
            </Pressable>
            <Pressable style={{padding: 10}} onPress={() => navigation.navigate('ResetPassScreen')}>
                <Text>비밀번호 재설정 페이지</Text>
            </Pressable>
            <Pressable style={{padding: 10}} onPress={() => navigation.navigate('ForgotNameScreen')}>
                <Text>닉네임 찾기 페이지</Text>
            </Pressable>
            <Pressable style={{padding: 10}} onPress={() => navigation.navigate('SettingScreen')}>
                <Text>더보기(환경설정) 페이지</Text>
            </Pressable>
        </ScrollView>
    );
  };

export default Index;