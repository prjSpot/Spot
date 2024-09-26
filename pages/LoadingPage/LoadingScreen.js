import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import * as Font from "expo-font";
import Logo from '../../assets/spotLogo.svg';

const { width, height } = Dimensions.get('window');
const vw = width / 100;
const vh = height / 100;


const LoadingScreen = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Lobster': require('../../assets/fonts/Lobster-Regular.ttf'),
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
        <WithLocalSvg style={styles.Logoimg} asset={Logo}/> 
        <Text style={styles.logo}>Spot</Text>
        <ActivityIndicator style={styles.activityIndicator} color="#8236E2"/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
  },
  Logoimg: {
    // img 크기가 안먹어요...
    width: 3 * vw,
    height: 3 * vh,  
    alignSelf: 'center',
    marginTop: 40 * vh,
  },
  logo: {
    fontSize: 5 * vh,
    fontFamily:'Lobster',
    color: '#8236E2',
  },
  activityIndicator: {
    marginTop: 2 * vh,
  },

});

export default LoadingScreen;