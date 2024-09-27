import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import * as Font from "expo-font";
import GrayLine from '../../assets/grayLine.svg';
import LeftArrowSmall from "../../assets/leftArrowSmall.svg";
import ToggleOff from "../../assets/toggleOff.svg";
import ToggleOn from "../../assets/toggleOn.svg";
import LeftArrow from "../../assets/leftArrow.svg"
import ContactMail from "../../assets/contactMail.svg"
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const vw = width / 100;
const vh = height / 100;


const SettingScreen = () => {

  const navigation = useNavigation();

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [nickName, setNickname] = useState('닉네임다섯');
  const [notice, setNotice] = useState('ON');
  const [hide, setHide] = useState('ON');


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

  const noticeSwitch = () => {
    setNotice(notice === 'ON' ? 'OFF' : 'ON');
  };
  
  const hideSwitch = () => {
    setHide(hide === 'ON' ? 'OFF' : 'ON');
  };

  const handleChangeNickname = () => {
    navigation.navigate('ForgotNameScreen');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassScreen');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Spot</Text>
      <WithLocalSvg style={styles.Logoimg} asset={GrayLine} width={normalize(350,width)}/> 

      <View>
        <Text style={[styles.label, styles.sectionFirstBottomMargin]}>환경설정</Text>
      </View>
      <View style={[styles.row, styles.nickNameSetting]}>
        <Text style={styles.label}>{nickName}</Text>
        <TouchableOpacity style={styles.button} onPress={handleChangeNickname}>
          <Text style={styles.changeText}>변경</Text>
          <WithLocalSvg asset={LeftArrowSmall}/>
        </TouchableOpacity>
      </View>
      <WithLocalSvg style={styles.Logoimg} asset={GrayLine} width={normalize(350,width)}/> 
        
        <ScrollView style={styles.setting}>

        <View style={styles.section}>
          <Text style={styles.labelText}>설정</Text>
          <View style={[styles.row, styles.buttonBox, styles.sectionFirstBottomMargin]}>
            <Text style={styles.buttonText}>알림 <Text style={styles.boldText}>{notice}</Text></Text>
            <WithLocalSvg onPress={noticeSwitch} asset={notice==='ON' ? ToggleOn : ToggleOff}/>
          </View>
          <View style={[styles.row, styles.buttonBox]}>
            <Text style={styles.buttonText}>숨기기 <Text style={styles.boldText}>{hide}</Text></Text>
            <WithLocalSvg onPress={hideSwitch} asset={hide==='ON' ? ToggleOn : ToggleOff}/>
          </View>
        </View>


        <View style={styles.section}>
          <Text style={styles.labelText}>계정</Text>
          <View style={[styles.row, styles.buttonBox, styles.sectionFirstBottomMargin]}>
            <Text style={styles.buttonText}>비밀번호 재설정</Text>
            <WithLocalSvg asset={LeftArrow} onPress={handleForgotPassword}/>
          </View>
          <View style={[styles.row, styles.buttonBox]}>
            <Text style={styles.buttonText}>로그아웃</Text>
            <WithLocalSvg asset={LeftArrow}/>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.labelText}>앱 정보</Text>
          <View style={[styles.row, styles.buttonBox, styles.sectionFirstBottomMargin]}>
            <Text style={styles.buttonText}><Text style={[styles.blackLogo]}>Spot</Text> 버전</Text>
            <Text style={styles.versionText}>v.1.0</Text>
          </View>
          <View style={[styles.row, styles.buttonBox]}>
          <Text style={styles.buttonText}><Text style={[styles.blackLogo]}>Spot</Text> 에게 문의하기</Text>
            <WithLocalSvg asset={ContactMail}/>
          </View>
        </View>

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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
  },
  setting: {
    width: "80%",
  },
  section: {
    marginBottom: normalize(30, height),
  },
  logo: {
    fontSize: normalize(40, height),
    fontFamily:'Lobster',
    color: '#8236E2',
    marginTop: normalize(60, height),
    marginBottom: normalize(1, height),
  },
  label: {
    fontFamily: 'SCDream3',
    fontSize: normalize(20, height),
  },
  nickNameSetting:{ 
    marginBottom: normalize(16,height), 
    justifyContent: 'space-between', 
    width: '80%'
  },
  buttonBox: {
    padding: normalize(11, height),
    borderRadius: 10,
    backgroundColor: '#E6E9F3',
    color: 'black',
    fontFamily: 'SCDream3',
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Logoimg: {
    alignSelf: 'center',
    marginBottom: normalize(20, height),
    marginTop: normalize(8, height),
  },
  labelText: {
    fontFamily:'SCDream3',
    fontSize: normalize(16, height),
    marginBottom:normalize(10, height),
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  changeText: {
    fontFamily: 'SCDream2',
    marginRight: normalize(10, height),
  },
  buttonText: {
    fontSize: normalize(16, height),
    textAlign: 'center',
    borderStyle:'solid',
    fontFamily:'SCDream3',
  },
  blackLogo: {
    fontSize: normalize(16, height),
    fontFamily:'Lobster',
    color: 'black',
  },
  versionText: {
    fontSize: normalize(12,height), 
    fontFamily: 'SCDream3'
  },
  sectionFirstBottomMargin: {
    marginBottom: normalize(16, height),
  },
  boldText: {
    fontFamily: 'SCDream4'
  }

});



export default SettingScreen;
