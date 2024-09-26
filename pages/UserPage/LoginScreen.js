import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import * as Font from "expo-font";
import idRadio from '../../assets/idRadio.svg';
import line4 from '../../assets/line4.svg';
import line5 from '../../assets/line5.svg';
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
    <View>
      <Text style={styles.logo}>Spot</Text>
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
          <WithLocalSvg style={styles.idRadio} asset={idRadio} />
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
        <WithLocalSvg style={styles.ellipseSnsLogin} asset={ellipseSnsLogin}/> 
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


// 화면 너비와 높이 가져오기
const { width, height } = Dimensions.get('window');

// 아이폰8 기준 화면크기 설정
const baseWidth = 375;
const baseHeight = 667;

// rem 비율 계산 함수
const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;

// 크기 조정 함수 (기본적으로 너비 기준, 폰트 크기는 높이 기준으로 조정함.)
const normalize = (size, based = 'width') => {
  const newSize = based === 'height' ? size * scaleHeight : size * scaleWidth;
  return Math.round(newSize);
};

//폰트스케일링끄기
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const styles = StyleSheet.create({
  View: {
    margin: 0,
  },
  logo: {
    fontSize: normalize(68, 'width'),
    fontFamily: 'Lobster',
    color: '#8236E2',
    marginBottom: 0,
    marginTop: normalize(101, 'height'),
    marginLeft: normalize(130, 'width'),
  },
  inputId: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: normalize(5, 'width'),
    borderRadius: normalize(5, 'width'),
    backgroundColor: '#E6E9F3',
    color: 'black',
    marginTop: normalize(20, 'height'),
    // marginBottom: normalize(20, 'height'),
    marginHorizontal: normalize(58, 'width'), 
    fontFamily: 'SCDream3',
    height: normalize(32, 'height'),
  },
  inputPass: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: normalize(5, 'width'),
    borderRadius: normalize(5, 'width'),
    backgroundColor: '#E6E9F3',
    color: 'black',
    marginBottom: normalize(10, 'height'),
    marginTop: normalize(16, 'height'),
    marginHorizontal: normalize(58, 'width'), 
    fontFamily: 'SCDream3',
    height: normalize(32, 'height'),
  },
  loginBtn: {
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    padding: normalize(5, 'width'),
    borderRadius: normalize(5, 'width'),
    paddingTop: normalize(8, 'height'),
    // marginTop: normalize(4, 'height'), 
    marginHorizontal: normalize(58, 'width'), 
    color: 'black',
    height: normalize(32, 'height'),
    textAlign: 'center',
    fontSize: normalize(20, 'width'),
    fontFamily: 'SCDream3',
  },
  idRadio: {
    marginLeft: normalize(58, 'width'),
    marginRight: normalize(58, 'width'),
    marginBottom: normalize(23, 'height'),
    color: '#4d4d4d',
  },
  idSave: {
    fontFamily: 'SCDream3',
    marginLeft: normalize(-54, 'width'),
    color: '#4d4d4d',
  },
  idSaveView: {
    flexDirection: 'row',
  },
  line4: {
    marginHorizontal: normalize(18, 'width'),
  },
  forgot: {
    color: '#4d4d4d',
    fontFamily: 'SCDream3',
  },
  idForgotView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(16, 'height'),
    padding: "auto",
    margin: "auto",
    justifyContent: 'space-between',
  },
  line5: {
    marginHorizontal: normalize(18, 'width'),
    marginTop: normalize(16, 'height'),
  },
  line6: {
    marginHorizontal: normalize(18, 'width'),
    marginTop: normalize(16, 'height'),
  },
  orText: {
    color: '#8236E2',
    fontFamily: 'SCDream3',
    fontSize: normalize(16, 'width'),
    marginTop: normalize(16, 'height'),
  },
  orAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: normalize(20, 'height'), 
  },
  snsLoginText: {
    marginTop: normalize(32, 'height'),
    fontFamily: 'SCDream3',
    fontSize: normalize(16, 'width'),
    textAlign: 'center',
  },
  snsAlignImg: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '22%',
    marginRight: '22%',
    justifyContent: 'space-between',
    marginTop: normalize(24, 'height'),
  },
  snsLoginText2: {
    marginTop: normalize(12, 'height'),
    fontFamily: 'SCDream3',
    fontSize: normalize(12, 'width'),
    textAlign: 'center',
  },
  snsAlignText: {
    flexDirection: 'row',
    marginLeft: '25%',
    marginRight: '26%',
    justifyContent: 'space-between',
  },
  eventBanner: {
    marginTop: normalize(24, 'height'),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
  },
  idSaveCheck: {
    marginLeft: normalize(-75.5, 'width'),
    marginTop: normalize(1.5, 'height'),
  },
});


export default LoginScreen;
