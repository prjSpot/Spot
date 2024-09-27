import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,TextInput ,ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import * as Font from "expo-font";
import Logo from '../../assets/img1.svg';
import AgreeLine from "../../assets/agreeline.svg";


const { width, height } = Dimensions.get('window');

// vw, vh 계산 (비율로 크기 설정)
const vw = width / 100;
const vh = height / 100;


const ForgotNameScreen = () => {
const [fontsLoaded, setFontsLoaded] = useState(false);
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
        <ScrollView style= {styles.findName}>
        <Text style={[styles.labelText]} >닉네임 변경</Text>
        <WithLocalSvg 
                style={styles.agreeLine}
                asset={AgreeLine} 
              />
        <Text style={[styles.labelText]} allowFontScaling={false}>새 닉네임</Text>
      <View>
          <TextInput
            style={[styles.input, { flex: 1 , fontFamily: 'SCDream3', height: 5.5*vh }]}
            value={userId}
            onChangeText={setUserId}
          />
          <Text style={styles.hint} allowFontScaling={false}>*이미 존재하는 닉네임 입니다</Text>
        </View>
        
        <TouchableOpacity style={[styles.nextButton]}>
          <Text style={styles.buttonText} allowFontScaling={false}>확인</Text>
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
    labelText: {
      fontFamily:'SCDream3',
      fontSize: 16,
      marginRight: 3 * vw,
      marginTop: 2 * vh,
      marginBottom : 2 * vh,
      
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 0.8 * vh,
      width:"100%",
      borderRadius: 5,
      backgroundColor: '#E6E9F3',
      color: 'black',
      marginBottom: 1 * vh,
      marginTop: 1 * vh,
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
    findName: {
      width: "75%",
      marginTop: 10 * vh,
    },
    hint: {
      fontSize: 1.5 * vh,
      color: '#888',
      fontFamily:'SCDream2',
    },
});


export default ForgotNameScreen;