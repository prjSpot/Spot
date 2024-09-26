import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, TouchableOpacity, Modal, Dimensions  } from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import * as Font from "expo-font";
import Logo from '../../assets/img1.svg';
import AgreeLine from "../../assets/agreeline.svg";
import CheckFalse from "../../assets/checkboxfalse.svg";
import CheckTrue from "../../assets/checkboxtrue.svg";






const SignUpScreen = () => {

  // 아이디 입력할 때마다 하단 중복여부 알림창에 사용가능 or 불가능 표기
  // 비밀번호 두개 같은 지 확인 (일치 label)
  // 전화번호 전송버튼 작동 -> 랜덤 숫자 6자리 생성 후 문자 혹은 카톡 전달
  // 인증번호 생성된 랜덤번호와 일치하는지 확인
  // 위 조건들 하나라도 만족 못하면 다음버튼 눌렀을 때 ㅁㅁ을 다시 확인해주세요
  // 조건 다 통과되면 동의 모달 창 띄우기
  // 모달 창 위에서 필수 동의 사항들 체크 되어있으면 다음 버튼 눌렀을 때 로그인 화면으로 이동

  const [nickname, setNickname] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAgreeAll, setIsAgreeAll] = useState(false);
  const [isAgreeTerms, setIsAgreeTerms] = useState(false);
  const [isAgreePrivacy, setIsAgreePrivacy] = useState(false);
  const [isAgreeLocation, setIsAgreeLocation] = useState(false);

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

  // 동의 모달 창
  const openModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };

  // 모달 창 체크박스
  const handleAgreeAll = () => {
    const newAgreeAllState = !isAgreeAll;
    setIsAgreeAll(newAgreeAllState);
    setIsAgreeTerms(newAgreeAllState);
    setIsAgreePrivacy(newAgreeAllState);
    setIsAgreeLocation(newAgreeAllState);
  };

  const handleAgreeTerms = () => setIsAgreeTerms(!isAgreeTerms);
  const handleAgreePrivacy = () => setIsAgreePrivacy(!isAgreePrivacy);
  const handleAgreeLocation = () => setIsAgreeLocation(!isAgreeLocation);

  const CheckBtn = (isChecked) => {
    return isChecked ? CheckTrue : CheckFalse;
  };

  //시스템폰트 영향 끄기
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  return (

    <View style={styles.container}>
    
      <Text style={styles.logo}>Spot</Text>
      <WithLocalSvg 
        asset={Logo}
        width={normalize(44, width)}
        height={normalize(8, height)}
        /> 

      <ScrollView style={styles.signup}>
        <Text style={styles.label}>회원가입</Text>
      


        <View style={[styles.row, { marginBottom: 10 }]}>
          <Text style={styles.labelText}>닉네임</Text>
          <TextInput
            style={[styles.input, { flex: 1 , fontFamily: 'SCDream3' }]}
            placeholder="닉네임"
            value={nickname}
            onChangeText={setNickname}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.labelText}>아이디</Text>
          <TextInput
            style={[styles.input, { flex: 1 ,fontFamily: 'SCDream3'}]}
            placeholder="아이디"
            value={userId}
            onChangeText={setUserId}
          />
        </View>
        <Text style={styles.hint}>아이디 중복여부 알림창</Text>

        <TextInput
          style={[styles.input, { marginBottom: normalize(20, height), fontFamily: 'SCDream3'}]}
          placeholder="비밀번호"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={[styles.input, { fontFamily: 'SCDream3'}]}
          placeholder="비밀번호 확인"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <Text style={styles.hintPass}>비밀번호 일치 Label</Text>

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
          <Text style={styles.buttonText} onPress={openModal}>다음</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={[{ width: '75%'}]}>
              <View style={[ styles.row, {justifyContent: 'space-between', marginBottom: normalize(20, height)} ]}>
                <Text style={styles.modalTitle}>약관 전체동의</Text>
                <TouchableOpacity onPress={handleAgreeAll} >
                  <WithLocalSvg 
                    asset={CheckBtn(isAgreeAll)}
                    width={normalize(24, height)}
                    height={normalize(24, height)} 
                  />
                </TouchableOpacity>
              </View>
              <WithLocalSvg 
                style={ styles.agreeLine }
                asset={AgreeLine} 
                width='100%' 
                height= '1'
              />
              <ScrollView>
                <View style={[ styles.row, {justifyContent: 'space-between', marginBottom: normalize(30, height)}]}>
                  <View style={ styles.modalRow }>
                    <Text style={styles.agreeRequired}>필수</Text>
                    <Text style={styles.modalText}>
                      이용약관 동의
                    </Text>
                  </View>
                  <TouchableOpacity onPress={handleAgreeTerms}>
                    <WithLocalSvg 
                      asset={CheckBtn(isAgreeTerms)} 
                      width={normalize(24, height)}
                      height={normalize(24, height)}/>
                  </TouchableOpacity>
                </View>
                <View style={[ styles.row, {justifyContent: 'space-between', marginBottom: normalize(30, height)} ]}>
                  <View style={ styles.modalRow }>
                    <Text style={styles.agreeRequired}>필수</Text>
                    <Text style={styles.modalText}>
                      개인정보 수집 및 이용 동의
                    </Text>
                  </View>
                  <TouchableOpacity onPress={handleAgreePrivacy}>
                    <WithLocalSvg 
                      asset={CheckBtn(isAgreePrivacy)} 
                      width={normalize(24, height)}
                      height={normalize(24, height)}/>
                  </TouchableOpacity>
                </View>
                <View style={[ styles.row, {justifyContent: 'space-between', marginBottom: normalize(30, height)} ]}>
                  <View style={ styles.modalRow }>
                    <Text style={[styles.agreeRequired, {color: 'black'}]}>선택</Text>
                    <Text style={styles.modalText}>
                      위치 정보 서비스 이용약관 동의
                    </Text>
                  </View>
                  <TouchableOpacity onPress={handleAgreeLocation}>
                    <WithLocalSvg 
                      asset={CheckBtn(isAgreeLocation)} 
                      width={normalize(24, height)}
                      height={normalize(24, height)}/>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={[styles.nextButton, {marginTop:normalize(10, height)}]} onPress={closeModal}>
                  <Text style={styles.buttonText}>다음</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>

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
  signup: {
    width: "75%"
  },
  logo: {
    fontSize: normalize(40, height),
    fontFamily:'Lobster',
    color: '#8236E2',
    marginBottom: 0,
    marginTop: normalize(60, height),
  },

  label: {
    fontFamily: 'SCDream5',
    fontSize: normalize(24, height),
    marginTop: normalize(20, height),
    marginBottom: normalize(20, height),
  },
  input: {
    fontSize: normalize(16, height),
    borderWidth: 1,
    borderColor: '#ccc',
    padding: normalize(5, height),
    marginBottom: normalize(11, height),
    borderRadius: 5,
    backgroundColor: '#E6E9F3',
    color: 'black',
  },
  hint: {
    fontSize: normalize(12, height),
    color: '#888',
    marginBottom: normalize(18, height),
    fontFamily:'SCDream2'
  },
  hintPass: {
    fontSize: normalize(12, height),
    color: '#888',
    marginBottom: normalize(18, height),
    fontFamily:'SCDream2'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelText: {
    fontFamily:'SCDream3',
    fontSize: normalize(18, height),
    marginBottom:normalize(5, height),
    marginRight: normalize(18, height),
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: normalize(10, height),
    paddingHorizontal: normalize(12, height),
    borderRadius: 5,
    borderStyle:'solid',
    borderWidth: 0.5,
    marginBottom: normalize(20, height),
  },
  inputTel: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#E6E9F3',
    padding: normalize(5, height),
    borderRadius: 5,
    marginBottom: normalize(18, height),
    marginRight: normalize(18, height),
  },
  buttonText: {
    fontSize: normalize(18, height),
    textAlign: 'center',
    borderStyle:'solid',
    fontFamily:'SCDream3',
  },
  nextButton: {
    backgroundColor: '#ffffff',
    paddingVertical: normalize(10, height),
    borderRadius: 5,
    borderStyle:'solid',
    borderWidth: 0.5,
    marginTop: normalize(18, height),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: normalize(32, height),
    height: '50%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: normalize(18, height),
    fontFamily: 'SCDream6',
    color: '#8236E2',
  },
  agreeRequired: {
    color:'#8236E2', 
    fontFamily: 'SCDream5', 
    marginRight: normalize(10, width), 
    fontSize: normalize(14, height),
  },
  modalText: {
    fontSize: normalize(16, width),
    fontFamily: 'SCDream3',
  },
  agreeLine: {
    marginBottom: normalize(32, height),
  },
  modalRow: {
    flexDirection: 'row',
    alignItems: 'center', 
  },
});

export default SignUpScreen;
