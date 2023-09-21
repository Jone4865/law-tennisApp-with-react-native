import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../../colors';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Btn from '../Componenets/Btn';

interface SignOutScreenProps {
  navigation: any;
}

function SignOutScreen({navigation}: SignOutScreenProps) {
  const [isCheck, setIsCheck] = useState(false);
  const onClickHandle = () => {
    navigation.navigate('signin');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textBox}>
        회원정보는 탈퇴 후 7일간 보관되며, {'\n'}해당 기간 동안은 사용하신
        정보를 사용하실 수 없습니다.
      </Text>
      <View style={styles.checkContainer}>
        <BouncyCheckbox
          size={25}
          fillColor={theme.bg}
          unfillColor="white"
          iconStyle={{borderColor: theme.bg}}
          onPress={() => {
            setIsCheck(!isCheck);
          }}
        />
        <Text>확인했습니다.</Text>
      </View>
      <Btn disabled={!isCheck} onPress={onClickHandle} title="탈퇴하기" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    gap: 10,
    paddingTop: 40,
  },
  textBox: {
    borderColor: theme.bg,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingTop: 30,
    paddingBottom: 50,
  },
  checkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default SignOutScreen;
