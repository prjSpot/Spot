import { ScrollView, Text, Pressable, TextInput } from 'react-native';
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

  // 아이폰 환경설정에서 텍스트 크기 조절해도 동일하게 되도록
  Text.defaultProps = Text.defaultProps || {};
  // allowFontScaling이 폰트 사이즈를 그대로 유지시키는 메서드래여
  Text.defaultProps.allowFontScaling = false;
  
  TextInput.defaultProps = TextInput.defaultProps || {};
  //바로 아래 코드는 자동완성 비활성화 코드인데 혹시 나중에 쓸지도 몰라서..
  //TextInput.defaultProps.autoCorrect = false;
  TextInput.defaultProps.allowFontScaling = false;

export default Index;