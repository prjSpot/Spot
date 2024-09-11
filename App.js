import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet,  Image, TouchableOpacity } from 'react-native';
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
        <WithLocalSvg style={styles.Logoimg} asset={Logo}/> 
        <Text style={styles.label}>회원가입</Text>
      


      <View style={styles.row}>
        <Text style={styles.labelText}>닉네임</Text>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="닉네임"
            value={nickname}
            onChangeText={setNickname}
          />
      </View>
      <View style={styles.row}>
        <Text style={styles.labelText}>아이디</Text>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="아이디"
            value={userId}
            onChangeText={setUserId}
          />
      </View>
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
      <Text style={styles.hintPass}>비밀번호 일치 Label</Text>

      <Text style={styles.labelText}>전화번호</Text>
      <View style={styles.row}>
        <TextInput
          style={[styles.inputTel, { flex: 1 }]}
          placeholder="전화번호"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>전송</Text>
          </TouchableOpacity>
      </View>

      <Text style={styles.labelText}>인증번호</Text>
      <View style={styles.row}>
        <TextInput
          style={[styles.inputTel, { flex: 1 }]}
          placeholder="인증번호"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>확인</Text>
          </TouchableOpacity>
    </View>

      <TouchableOpacity style={[styles.nextButton]}>
        <Text style={styles.buttonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 58,
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#6e2fad',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 30,
    marginRight: 58,
    
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 18,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    marginBottom: 10,
    marginRight: 57,
    borderRadius: 5,
  },
  hint: {
    fontSize: 11,
    color: '#888',
    marginBottom: 18,
    marginTop:-2,
  },
  hintPass: {
    fontSize: 11,
    color: '#888',
    marginBottom: 18,
    marginTop:-2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  Logoimg: {
    width: 100,
    height: 10,  
    alignSelf: 'center',
    marginBottom: 20,
    marginRight: 58,
  },
  labelText: {
    marginRight: 30,  // Text와 TextInput 간 간격 조정
    fontSize: 16,
    marginBottom:10,
    
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 14,
    marginRight: 58,
    borderStyle:'solid',
    borderWidth: 0.5,
  },
  inputTel: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    textAlign: 'center',
    borderStyle:'solid',
  },
  nextButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 58,
    borderStyle:'solid',
    borderWidth: 0.5,
    marginTop: 20,
  }
});

export default SignUpScreen;
