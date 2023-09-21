import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Btn from '../Componenets/Btn';
import {theme} from '../../colors';

interface SignUpScreenProps {
  navigation: any;
}

function SignUpScreen({navigation}: SignUpScreenProps) {
  const [id, setId] = useState('');
  const [passWord, setPassWord] = useState('');
  const [confirmPassWord, setConfirmPassWord] = useState('');
  const onSignUpHandle = () => {
    navigation.navigate('home');
  };
  const onCancleHandle = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>아이디</Text>
      <View style={styles.idContainer}>
        <TextInput
          placeholder="4 ~ 10자 사이의 숫자와 영어 조합"
          style={{...styles.inputs, ...styles.idInput}}
          value={id}
          onChangeText={setId}
        />
        <TouchableOpacity style={styles.idCheck}>
          <Text style={styles.text}>중복확인</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>비밀번호</Text>
      <TextInput
        secureTextEntry
        style={styles.inputs}
        value={passWord}
        onChangeText={setPassWord}
        placeholder="영문, 특수문자(@$!%*#?&), 숫자 포함 8~20자"
      />
      <Text style={styles.title}>비밀번호 확인</Text>
      <TextInput
        secureTextEntry
        style={styles.inputs}
        value={confirmPassWord}
        onChangeText={setConfirmPassWord}
        placeholder="비밀번호를 한번 더 입력해주세요"
      />
      <View style={styles.btnContainer}>
        <Btn title="회원가입" iconName="adduser" onPress={onSignUpHandle} />
        <Btn title="뒤로가기" iconName="swapleft" onPress={onCancleHandle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {paddingHorizontal: 15, paddingVertical: 20, flex: 1},
  idContainer: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  idCheck: {
    backgroundColor: theme.bg,
    borderRadius: theme.radius,
    fontSize: theme.contentFontSize,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
  idInput: {flex: 1},
  text: {color: theme.textColor},
  btnContainer: {justifyContent: 'space-between', gap: 20, marginTop: 20},
  title: {fontSize: theme.titleFontSize},
  inputs: {
    borderRadius: theme.radius,
    borderColor: theme.bg,
    borderStyle: 'solid',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: theme.contentFontSize,
  },
});

export default SignUpScreen;
