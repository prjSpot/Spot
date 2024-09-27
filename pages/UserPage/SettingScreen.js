import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import * as Font from "expo-font";
import GrayLine from '../../assets/grayLine.svg';
import LeftArrowSmall from "../../assets/leftArrowSmall.svg";
import ToggleOff from "../../assets/toggleOff.svg";
import ToggleOn from "../../assets/toggleOn.svg";
import LeftArrow from "../../assets/leftArrow.svg"
import ContactMail from "../../assets/contactMail.svg"
import { useNavigation } from '@react-navigation/native';

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
      <WithLocalSvg style={styles.Logoimg} asset={GrayLine}/> 

      <View style={[{alignItems: "center"}]}>
        <Text style={[styles.label, {marginBottom: 18}]}>환경설정</Text>
      </View>
      <View style={[styles.row, { marginBottom: 16, justifyContent: 'space-between', width: '80%'}]}>
        <Text style={styles.label}>{nickName}</Text>
        <TouchableOpacity style={styles.button} onPress={handleChangeNickname}>
          <Text style={styles.changeText}>변경</Text>
          <WithLocalSvg asset={LeftArrowSmall}/>
        </TouchableOpacity>
      </View>
      <WithLocalSvg style={styles.Logoimg} asset={GrayLine}/> 
        
        <ScrollView style={styles.setting}>

        <View style={styles.section}>
          <Text style={styles.labelText}>설정</Text>
          <View style={[styles.row, styles.buttonBox, {marginBottom: 16}]}>
            <Text style={styles.buttonText}>알림 <Text style={[{fontFamily:'SCDream4'}]}>{notice}</Text></Text>
            <WithLocalSvg onPress={noticeSwitch} asset={notice==='ON' ? ToggleOn : ToggleOff}/>
          </View>
          <View style={[styles.row, styles.buttonBox]}>
            <Text style={styles.buttonText}>숨기기 <Text style={[{fontFamily:'SCDream4'}]}>{hide}</Text></Text>
            <WithLocalSvg onPress={hideSwitch} asset={hide==='ON' ? ToggleOn : ToggleOff}/>
          </View>
        </View>


        <View style={styles.section}>
          <Text style={styles.labelText}>계정</Text>
          <View style={[styles.row, styles.buttonBox, {marginBottom: 16}]}>
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
          <View style={[styles.row, styles.buttonBox, {marginBottom: 16}]}>
            <Text style={styles.buttonText}><Text style={[styles.logo, {fontSize: 16, color: 'black'}]}>Spot</Text> 버전</Text>
            <Text style={[{fontSize: 12, fontFamily: 'SCDream3'}]}>v.1.0</Text>
          </View>
          <View style={[styles.row, styles.buttonBox]}>
          <Text style={styles.buttonText}><Text style={[styles.logo, {fontSize: 16, color: 'black'}]}>Spot</Text> 에게 문의하기</Text>
            <WithLocalSvg asset={ContactMail}/>
          </View>
        </View>

      </ScrollView>
    </View>
  );
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
    marginBottom: 30,
  },
  logo: {
    fontSize: 36,
    fontFamily:'Lobster',
    color: '#8236E2',
    marginBottom: 0,
    marginTop: "16%",
  },
  label: {
    fontFamily: 'SCDream3',
    fontSize: 20,
  },
  buttonBox: {
    padding: 10,
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
    marginBottom: 20,
    marginTop: 8,
  },
  labelText: {
    fontFamily:'SCDream3',
    fontSize: 16,
    marginBottom:10,
    marginRight: '7%',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  changeText: {
    fontFamily: 'SCDream2',
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    borderStyle:'solid',
    fontFamily:'SCDream3',
  },

});



export default SettingScreen;
