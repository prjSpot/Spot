import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,TextInput ,ScrollView, TouchableOpacity} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import * as Font from "expo-font";
import Logo from './assets/img1.svg';
import { useNavigation } from '@react-navigation/native';
const ForgotPassScreen = () => {


const navigation = useNavigation(); 
const [userId, setUserId] = useState('');
const [fontsLoaded, setFontsLoaded] = useState(false);
const [phoneNumber, setPhoneNumber] = useState('');
const [verificationCode, setVerificationCode] = useState('');
const loadFonts = async () => {
    await Font.loadAsync({
        'Lobster': require('./assets/fonts/Lobster-Regular.ttf'),
        'SCDream1': require('./assets/fonts/SCDream1.otf'),
        'SCDream2': require('./assets/fonts/SCDream2.otf'),
        'SCDream3': require('./assets/fonts/SCDream3.otf'),
        'SCDream4': require('./assets/fonts/SCDream4.otf'),
        'SCDream5': require('./assets/fonts/SCDream5.otf'),
        'SCDream6': require('./assets/fonts/SCDream6.otf'),
        'SCDream7': require('./assets/fonts/SCDream7.otf'),
        'SCDream8': require('./assets/fonts/SCDream8.otf'),
        'SCDream9': require('./assets/fonts/SCDream9.otf'),
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
    <View style={styles.container}>
      <Text style={styles.logo}>Spot</Text>
      <WithLocalSvg style={styles.Logoimg} asset={Logo}/> 

      <ScrollView style = {styles.forgotPass}>
      <Text style={styles.labelText}>아이디를 입력하세요</Text>
      <View style={[styles.row, { marginBottom: 10 }]}>
          <TextInput
            style={[styles.input, { flex: 1 , fontFamily: 'SCDream3' }]}
            placeholder="아이디"
            value={userId}
            onChangeText={setUserId}
          />
        </View>
        <Text style={styles.labelText}>전화번호</Text>
        <View style={styles.row}>
          <TextInput
            style={[styles.inputTel, { flex: 1 , fontFamily: 'SCDream3'}]}
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
            style={[styles.inputTel, { flex: 1 , fontFamily: 'SCDream3'}]}
            placeholder="인증번호"
            value={verificationCode}
            onChangeText={setVerificationCode}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>확인</Text>
            </TouchableOpacity>
        </View>

        <TouchableOpacity style={[styles.nextButton]}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('ResetPass')}>다음</Text>
        </TouchableOpacity>
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
    forgotPass: {
        width: "75%",
        marginTop: "20%",
    },
    Logoimg: {
        width: 100,
        height: 10,  
        alignSelf: 'center',
        marginBottom: 20,
      },
    logo: {
        fontSize: 36,
        fontFamily:'Lobster',
        color: '#8236E2',
        marginBottom: 0,
        marginTop: "16%",
      },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    labelText: {
        fontFamily:'SCDream3',
        fontSize: 16,
        marginBottom:10,
        marginRight: '7%',
      },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#E6E9F3',
        color: 'black',
      },
      button: {
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderStyle:'solid',
        borderWidth: 0.5,
        marginBottom: 20,
      },
      inputTel: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#E6E9F3',
        padding: 5,
        borderRadius: 5,
        marginBottom: 20,
        marginRight: '7%',
      },
      buttonText: {
        fontSize: 16,
        textAlign: 'center',
        borderStyle:'solid',
        fontFamily:'SCDream3',
      },
      nextButton: {
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderStyle:'solid',
        borderWidth: 0.5,
        marginTop: 20,
      },
});

export default ForgotPassScreen;
