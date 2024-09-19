import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { WithLocalSvg } from 'react-native-svg/css';
import * as Font from "expo-font";
import idRadio from '../../assets/idRadio.svg'; 
import line4 from '../../assets/line4.svg'; 
import line5 from '../../assets/line5.svg'; 
import ellipseSnsLogin from '../../assets/ellipseSnsLogin.svg'; 
import eventBanner from '../../assets/eventBanner.svg'; 
import ellipseSnsLoginCheck from '../../assets/ellipseSnsLoginCheck.svg'; 

const LoginScreen = () => {
  const [userId, setUserId] = useState(''); // 사용자 아이디 상태
  const [password, setPassword] = useState(''); // 비밀번호 상태
  const [isIdSaved, setIsIdSaved] = useState(false); // 아이디 저장 여부 상태

  // 아이디 저장 버튼 클릭 시 상태 변경 함수 - 아이디저장 체크박스용
  const handleIdSavePress = () => {
    setIsIdSaved(!isIdSaved);
  };

  return (
    <View>
      <Text style={styles.logo}>Spot</Text>
      <TextInput
            style={[styles.inputId]}
            placeholder="아이디 입력" // 아이디 입력 텍스트
            value={userId}
            onChangeText={setUserId} // 아이디 변경 시 상태 업데이트
          />
      <TextInput
            style={[styles.inputPass]}
            placeholder="비밀번호 입력" // 비밀번호 입력 텍스트
            value={password}
            onChangeText={setPassword} // 비밀번호 변경 시 상태 업데이트
          />

      <TouchableOpacity onPress={handleIdSavePress}>
        <View style={styles.idSaveView}>
          <WithLocalSvg style={styles.idRadio} asset={idRadio} /> {/* 아이디 저장 체크 박스 아이콘 */}
          <Text style={styles.idSave}>아이디 저장</Text>
          {isIdSaved && (
            <WithLocalSvg style={styles.idSaveCheck} asset={ellipseSnsLoginCheck} />
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.loginBtn}>로그인</Text> 
      </TouchableOpacity>

      <View style={styles.idForgotView}>
        <TouchableOpacity>
          <Text style={styles.forgot}>아이디 찾기</Text>
        </TouchableOpacity>

        <WithLocalSvg style={styles.line4} asset={line4}/>

        <TouchableOpacity>
          <Text style={styles.forgot}>비밀번호 찾기</Text>
        </TouchableOpacity>

        <WithLocalSvg style={styles.line4} asset={line4}/> 

        <TouchableOpacity>
          <Text style={styles.forgot}>회원 가입</Text> 
        </TouchableOpacity>
      </View>

      <View style={styles.orAlign}>
        <WithLocalSvg style={styles.line5} asset={line5}/> 
        <Text style={styles.orText}>또는</Text>
        <WithLocalSvg style={styles.line6} asset={line5}/> 
      </View>

      <Text style={styles.snsLoginText}>SNS 로그인</Text> 

      <View style={styles.snsAlignImg}>
        <WithLocalSvg style={styles.ellipseSnsLogin} asset={ellipseSnsLogin}/> {/* SNS 로그인 아이콘 */}
        <WithLocalSvg style={styles.ellipseSnsLogin} asset={ellipseSnsLogin}/> 
        <WithLocalSvg style={styles.ellipseSnsLogin} asset={ellipseSnsLogin}/> 
      </View>

      <View style={styles.snsAlignText}>
        <Text style={styles.snsLoginText2}>네이버</Text> 
        <Text style={styles.snsLoginText2}>카카오</Text> 
        <Text style={styles.snsLoginText2}>구글</Text> 
      </View>

      <WithLocalSvg style={styles.eventBanner} asset={eventBanner}/>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    margin: 0,
  },
  logo: {
    fontSize: 68,
    fontFamily: 'Lobster',
    color: '#8236E2',
    marginBottom: 0,
    marginTop: 101,
    marginLeft: 145,
  },
  inputId: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#E6E9F3',
    color: 'black',
    marginTop: 40,
    marginHorizontal: 58, 
    fontFamily: 'SCDream3',
    height: 40,
  },
  inputPass: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#E6E9F3',
    color: 'black',
    marginBottom: 10,
    marginTop: 16,
    marginHorizontal: 58, 
    fontFamily: 'SCDream3',
    height: 40,
  },
  loginBtn: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5,
    paddingTop: 10,
    marginTop: 20, 
    marginHorizontal: 58, 
    color: 'black',
    height: 40,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'SCDream3',
  },
  idRadio: {
    marginLeft: 58,
    marginRight: 58,
    marginBottom: 23,
    color: '#4d4d4d',
  },
  idSave: {
    fontFamily: 'SCDream3',
    marginLeft: -54,
    color: '#4d4d4d',
  },
  idSaveView: {
    flexDirection: 'row',
  },
  line4: {
    marginHorizontal: 18,
  },
  forgot: {
    color: '#4d4d4d',
    fontFamily: 'SCDream3',
  },
  idForgotView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    padding: "auto",
    margin: "auto",
    justifyContent: 'space-between',
  },
  line5: {
    marginHorizontal: 18,
    marginTop: 60,
  },
  line6: {
    marginHorizontal: 18,
    marginTop: 60,
  },
  orText: {
    color: '#8236E2',
    fontFamily: 'SCDream3',
    fontSize: 16,
    marginTop: 60,
  },
  orAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, 
  },
  snsLoginText: {
    marginTop: 32,
    fontFamily: 'SCDream3',
    fontSize: 16,
    textAlign: 'center',
  },
  snsAlignImg: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '22%',
    marginRight: '22%',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  // ellipseSnsLogin: {
  //   height: 51,
  //   width: 51,
  // },
  snsLoginText2: {
    marginTop: 12,
    fontFamily: 'SCDream3',
    fontSize: 12,
    textAlign: 'center',
  },
  snsAlignText: {
    flexDirection: 'row',
    marginLeft: '25%',
    marginRight: '26%',
    justifyContent: 'space-between',
  },
  eventBanner: {
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
  },
  idSaveCheck: {
    marginLeft: -79.5,
    marginTop: 2,
  },
});

export default LoginScreen;
