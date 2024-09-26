import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,TextInput ,ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import * as Font from "expo-font";
import Logo from '../../assets/img1.svg';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');

// vw, vh 계산 (비율로 크기 설정)
const vw = width / 100;
const vh = height / 100;


const FindUserIdScreen = () => {
const [fontsLoaded, setFontsLoaded] = useState(false);
const navigation = useNavigation(); 
const [phoneNumber, setPhoneNumber] = useState('');
const [verificationCode, setVerificationCode] = useState('');
const [userId, setUserId] = useState('');



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
    return null;  // 폰트가 로드되지 않았을 때 로딩을 처리하는 코드 추가
}
return (
    <View style={styles.container}>
        <Text style={styles.logo} allowFontScaling={false}>Spot</Text>
        <WithLocalSvg style={styles.Logoimg} asset={Logo}/> 
        <ScrollView style= {styles.findId}>
        <Text style={styles.labelText} allowFontScaling={false}>전화번호를 입력하세요</Text>
        <View style={styles.row}>
          <TextInput
            style={[styles.inputTel, { flex: 1 , fontFamily: 'SCDream3', height: 5.5*vh}]}
            placeholder="전화번호"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} allowFontScaling={false}>전송</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.labelText} allowFontScaling={false}>인증번호</Text>
        <View style={styles.row}>
          <TextInput
            style={[styles.inputTel, { flex: 1 , fontFamily: 'SCDream3', height: 5.5*vh}]}
            placeholder="인증번호"
            value={verificationCode}
            onChangeText={setVerificationCode}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} allowFontScaling={false}>확인</Text>
            </TouchableOpacity>
        </View>

        <Text style={[styles.labelText]} allowFontScaling={false}>아이디</Text>
      <View style={[styles.row ]}>
          <TextInput
            style={[styles.input, { flex: 1 , fontFamily: 'SCDream3', height: 5.5*vh }]}
            placeholder="아이디"
            value={userId}
            onChangeText={setUserId}
          />
        </View>
        <TouchableOpacity style={[styles.nextButton]}>
          <Text style={styles.buttonText} allowFontScaling={false}>로그인</Text>
        </TouchableOpacity>



        </ScrollView>
    </View>
);}




const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: '#fff',
    alignItems: "center",
  },
    Logoimg: {
      alignSelf: 'center',
      marginBottom: 2.5 * vh,
    },
    logo: {
      fontSize: 6 * vh,
      fontFamily:'Lobster',
      color: '#8236E2',
      marginTop: 10 * vh,
      
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      labelText: {
        fontFamily:'SCDream3',
        fontSize: 16,
        marginRight: 3 * vw,
        marginBottom : 1 * vh,
        
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 0.8 * vh,
        width:"100%",
        borderRadius: 5,
        backgroundColor: '#E6E9F3',
        color: 'black',
        marginBottom: 2.5 * vh,
        marginTop:1.8 * vh,
      },
      button: {
        backgroundColor: '#ffffff',
        paddingVertical: 1.6 * vh,
        paddingHorizontal: 3.5 * vw, 
        borderRadius: 5,
        borderStyle:'solid',
        borderWidth: 0.5,
        marginBottom: 2.5 * vh,
        marginTop:1.8 * vh,
      },
      inputTel: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#E6E9F3',
        padding: 0.8 * vh,
        borderRadius: 5,
        marginBottom: 2.5 * vh,
        marginRight: 3.5 * vw,
        marginTop: 1.7 * vh,
      },
      buttonText: {
        fontSize: 2.24 * vh,
        textAlign: 'center',
        borderStyle:'solid',
        fontFamily:'SCDream3',
      },
      nextButton: {
        backgroundColor: '#ffffff',
        paddingVertical: 1.6 * vh,
        borderRadius: 5,
        borderStyle:'solid',
        borderWidth: 0.5,
        marginTop: 2.5 * vh,
      },
      findId: {
        width: "75%",
        marginTop: 10 * vh,
      },
});


export default FindUserIdScreen;