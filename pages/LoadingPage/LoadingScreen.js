import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import * as Font from "expo-font";
import Logo from '../../assets/spotLogo.svg';




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
    width: 153,
    height: 153,  
    alignSelf: 'center',
    marginTop: '75%',
  },
  logo: {
    fontSize: 48,
    fontFamily:'Lobster',
    color: '#8236E2',
    marginBottom: 0,
    marginTop: 4,
  },

});

export default LoadingScreen;