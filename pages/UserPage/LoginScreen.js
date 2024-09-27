import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import * as Font from "expo-font";
import idRadio from '../../assets/idRadio.svg';
import line4 from '../../assets/line4.svg';
import line5 from '../../assets/line5-1.svg';
import ellipseSnsLogin from '../../assets/ellipseSnsLogin.svg';
import eventBanner from '../../assets/eventBanner.svg';
import ellipseSnsLoginCheck from '../../assets/ellipseSnsLoginCheck.svg';

const LoginScreen = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isIdSaved, setIsIdSaved] = useState(false); 
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  const handleIdSavePress = () => {
    setIsIdSaved(!isIdSaved);
  };

  const loadFonts = async () => {
    await Font.loadAsync({
      'Lobster': require('../../assets/fonts/Lobster-Regular.ttf'),
      'SCDream1': require('../../assets/fonts/SCDream1.otf'),
      'SCDream2': require('../../assets/fonts/SCDream2.otf'),
      'SCDream3': require('../../assets/fonts/SCDream3.otf'),
      'SCDream4': require('../../assets/fonts/SCDream4.otf'),
      'SCDream5': require('../../assets/fonts/SCDream5.otf'),
      'SCDream6': require('../../assets/fonts/SCDream6.otf'),
      'SCDream7': require('../../assets/fonts/SCDream7.otf'),
      'SCDream8': require('../../assets/fonts/SCDream8.otf'),
      'SCDream9': require('../../assets/fonts/SCDream9.otf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={styles.login}>
      <View style={styles.loginLogo}>
        <Text style={styles.logo}>Spot</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextInput
              style={[styles.inputId]}
              placeholder="아이디 입력"
              value={userId}
              onChangeText={setUserId}
            />
        <TextInput
              style={[styles.inputPass]}
              placeholder="비밀번호 입력"
              value={password}
              onChangeText={setPassword}
            />

        <TouchableOpacity onPress={handleIdSavePress}>
          <View style={styles.idSaveView}>
            <View style={styles.radioWrapper}>
              <WithLocalSvg 
                style={styles.idRadio} 
                asset={idRadio} 
                width={normalize(16, width)}
                height={normalize(16, height)} 
              />
              {isIdSaved && (
                <WithLocalSvg style={styles.idSaveCheck} 
                  asset={ellipseSnsLoginCheck} 
                  width={normalize(12, width)}
                  height={normalize(12, height)} 
                />
              )}
            </View>
            <Text style={styles.idSave}>아이디 저장</Text>
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
          <WithLocalSvg asset={line5} width={normalize(140, width)}/> 
            <Text style={styles.orText}>또는</Text>
          <WithLocalSvg asset={line5} width={normalize(140, width)}/> 
        </View>

        <Text style={styles.snsLoginText}>SNS 로그인</Text>

        <View style={styles.snsLoginLink}>
          <View style={styles.snsOneSet}>
            <WithLocalSvg style={styles.ellipseSnsLogin} asset={ellipseSnsLogin}/>
            <Text style={styles.snsLoginText2}>네이버</Text>
          </View>
          <View style={styles.snsOneSet}>
            <WithLocalSvg style={styles.ellipseSnsLogin} asset={ellipseSnsLogin}/>
            <Text style={styles.snsLoginText2}>카카오</Text> 
          </View>
          <View style={styles.snsOneSet}>
            <WithLocalSvg style={styles.ellipseSnsLogin} asset={ellipseSnsLogin}/>
            <Text style={styles.snsLoginText2}>구글</Text>
          </View>
        </View>

        <WithLocalSvg style={styles.eventBanner} asset={eventBanner}/> 
      </ScrollView>
    </View>


  );
};

// 화면 너비와 높이 가져오기
const { width, height } = Dimensions.get('window');

// Pixel3a 기준 화면크기 설정
const baseWidth = 412;
const baseHeight = 832;

// rem 비율 계산 함수
const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;

// 크기 조정 함수 (폰트와 높이에 관한 크기는 height, 너비에 관한 크기는 width)
const normalize = (size, based = 'width') => {
  const newSize = based === 'height' ? size * scaleHeight : size * scaleWidth;
  return Math.round(newSize);
};

const styles = StyleSheet.create({
  login: {
    width: '80%',
    alignSelf: 'center',
  },
  loginLogo: {
    alignItems: 'center',
  },
  logo: {
    fontSize: normalize(68, height),
    fontFamily: 'Lobster',
    color: '#8236E2',
    marginBottom: 0,
    marginTop: normalize(100, height),
    alignItems: 'center',
  },
  inputId: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#E6E9F3',
    color: 'black',
    marginTop: normalize(40, height),
    marginHorizontal: normalize(20, width), 
    fontFamily: 'SCDream3',
    height: normalize(40, height),
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
    marginHorizontal: normalize(20, width), 
    fontFamily: 'SCDream3',
    height: normalize(40, height),
  },
  loginBtn: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5,
    paddingTop: 10,
    marginTop: 20, 
    marginHorizontal: normalize(20, width), 
    color: 'black',
    heigt: normalize(40, height),
    textAlign: 'center',
    fontSize: normalize(20, height),
    fontFamily: 'SCDream3',
  },
  radioWrapper: {
    position: 'relative', 
    width: normalize(16, width), 
    height: normalize(16, height), 
    marginRight : normalize(8, width),
  },
  idSaveCheck: {
    position: 'absolute', 
    top: '15%',
    left: '15%',
  },
  idSave: {
    fontFamily: 'SCDream3',
    color: '#4d4d4d',
  },
  idSaveView: {
    flexDirection: 'row',
    marginLeft: normalize(20, width), 
  },
  line4: {
    marginHorizontal: normalize(16, width),
  },
  forgot: {
    color: '#4d4d4d',
    fontFamily: 'SCDream3',
  },
  idForgotView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(16, height),
    padding: "auto",
    margin: "auto",
    justifyContent: 'space-between',
  },
  orText: {
    color: '#8236E2',
    fontFamily: 'SCDream3',
    fontSize: normalize(16, height),
    marginHorizontal: normalize(16, width),
  },
  orAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: normalize(80, height), 
  },
  snsLoginText: {
    marginTop: normalize(32, height),
    fontFamily: 'SCDream3',
    fontSize: normalize(16, width),
    textAlign: 'center',
  },
  snsLoginLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: normalize(20, height),
  },
  snsOneSet: {
    alignItems: 'center',
    marginHorizontal: normalize(10, width),
  },
  // ellipseSnsLogin: {
  //   height: 51,
  //   width: 51,
  // },
  snsLoginText2: {
    marginTop: normalize(12, height),
    fontFamily: 'SCDream3',
    fontSize: normalize(12, height),
    textAlign: 'center',
  },
  eventBanner: {
    marginTop: normalize(24, height),
    alignSelf: 'center',
  },
  
});

export default LoginScreen;