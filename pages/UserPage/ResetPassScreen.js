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

const ResetPassScreen = () => {


const navigation = useNavigation(); 
const [newPass, setNewPass] = useState('');
const [fontsLoaded, setFontsLoaded] = useState(false);
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
    <View style={styles.container}>
      <Text style={styles.logo} allowFontScaling={false}>Spot</Text>
      <WithLocalSvg style={styles.Logoimg} asset={Logo}/> 

      <ScrollView style = {styles.resetPass}>
      <Text style={styles.labelText} allowFontScaling={false}>새 비밀번호</Text>
      <View style={[styles.row, { marginBottom: 2 * vh }]}>
          <TextInput
            style={[styles.input, { flex: 1 , fontFamily: 'SCDream3' }]}
            placeholder="비밀번호"
            value={newPass}
            onChangeText={setNewPass}
          />
        </View>
        <Text style={styles.labelText} allowFontScaling={false}>새 비밀번호 확인</Text>
      <View style={[styles.row, { marginBottom: 2 * vh }]}>
          <TextInput
            style={[styles.input, { flex: 1 , fontFamily: 'SCDream3' }]}
            placeholder="비밀번호"
            value={newPass}
            onChangeText={setNewPass}
          />
        </View>
        <TouchableOpacity style={[styles.nextButton]}>
          <Text style={styles.buttonText} allowFontScaling={false} >다음</Text>
        </TouchableOpacity>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: '#fff',
    alignItems: "center",
  },
    resetPass: {
        width: "75%",
        marginTop: 10 * vh,
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
});

export default ResetPassScreen;
