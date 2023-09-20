import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Btn from '../Componenets/Btn';
import {theme} from '../../colors';

interface SignInScreenProps {
  navigation: any;
}

function SignInScreen({navigation}: SignInScreenProps) {
  const [id, setId] = useState('');
  const [passWord, setPassWord] = useState('');

  const onLoginHandle = () => {
    navigation.navigate('home');
  };
  const onSignUpHandle = () => {
    navigation.navigate('signup');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>아이디</Text>
      <TextInput style={styles.inputs} value={id} onChangeText={setId} />
      <Text style={styles.title}>비밀번호</Text>
      <TextInput
        secureTextEntry
        style={styles.inputs}
        value={passWord}
        onChangeText={setPassWord}
      />
      <View style={styles.btnContainer}>
        <Btn title="로그인" iconName="login" onPress={onLoginHandle} />
        <Btn title="회원가입" iconName="user" onPress={onSignUpHandle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {paddingHorizontal: 15, paddingVertical: 20, flex: 1},
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

export default SignInScreen;
