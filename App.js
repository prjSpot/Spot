import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet,  Image } from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import * as Font from "expo-font";
import Logo from './assets/img1.svg';






const SignUpScreen = () => {

  const [nickname, setNickname] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');



  return (
    <View style={styles.container}>
      
      <Text style={styles.logo}>Spot</Text>

      <WithLocalSvg style={styles.Logo} asset={Logo}/> 
      

      <Text style={styles.label}>회원가입</Text>

      <TextInput
        style={styles.input}
        placeholder="닉네임"
        value={nickname}
        onChangeText={setNickname}
      />

      <TextInput
        style={styles.input}
        placeholder="아이디"
        value={userId}
        onChangeText={setUserId}
      />
      <Text style={styles.hint}>아이디 중복여부 알림창</Text>

      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="비밀번호 확인"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <View style={styles.row}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="전화번호"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <Button title="전송" />
      </View>

      <View style={styles.row}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="인증번호"
          value={verificationCode}
          onChangeText={setVerificationCode}
        />
        <Button title="확인"  />
      </View>

      <Button title="다음"  />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#6e2fad',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  hint: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  Logo: {
    width: 50,  
    height: 10,  
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default SignUpScreen;
