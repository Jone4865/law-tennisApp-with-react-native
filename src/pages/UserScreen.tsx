import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import {theme} from '../../colors';

interface UserScreenProps {
  navigation: any;
}

type Data = {
  name: string;
  phone: string;
};

function UserScreen({navigation}: UserScreenProps) {
  const [isToggled, setIsToggled] = useState(false);
  const [myInfo, setMyInfo] = useState<Data>();
  // const [isSign, setIsSign] = useState(false);
  const onClickHandle = (
    location: 'joinlist' | 'makelist' | 'signin' | 'signout',
  ) => {
    if (location === 'signin') {
      console.log('로그아웃 시키기');
    }
    navigation.navigate(location);
  };
  return (
    <View style={styles.container}>
      <View style={styles.signContainer}>
        <View>
          <Text style={styles.text}>닉네임</Text>
          {myInfo ? (
            <View>
              <View style={styles.align}>
                <Text style={styles.text}>이름</Text>
                <Text style={styles.text}>{myInfo.name}</Text>
              </View>
              <View style={styles.align}>
                <Text style={styles.text}>전화번호</Text>
                <Text style={styles.text}>{myInfo.phone}</Text>
              </View>
            </View>
          ) : (
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.text}>휴대폰 인증</Text>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.sign} />
      </View>
      <TouchableOpacity
        style={styles.btns}
        onPress={() => onClickHandle('joinlist')}>
        <Text style={styles.text}>참여목록</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btns}
        onPress={() => onClickHandle('makelist')}>
        <Text style={styles.text}>작성목록</Text>
      </TouchableOpacity>
      <View style={styles.btns}>
        <Text style={styles.text}>알림설정</Text>
        <Switch
          trackColor={{false: '#3333333a', true: '#ffffff83'}}
          ios_backgroundColor="#333"
          onValueChange={setIsToggled}
          value={isToggled}
        />
      </View>
      <TouchableOpacity
        style={styles.btns}
        onPress={() => onClickHandle('signin')}>
        <Text style={styles.text}>로그아웃</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btns}
        onPress={() => onClickHandle('signout')}>
        <Text style={styles.text}>회원탈퇴</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    gap: 10,
    paddingTop: 10,
  },
  btns: {
    backgroundColor: theme.bg,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: theme.radius,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
  },
  text: {
    color: theme.textColor,
    fontSize: theme.titleFontSize,
    fontWeight: '700',
  },
  signContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.bg,
    borderRadius: theme.radius,
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center',
    height: 150,
  },
  sign: {
    width: 120,
    height: 70,
    backgroundColor: 'red',
  },
  align: {flexDirection: 'row', gap: 10, marginTop: 10},
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: theme.radius,
    borderColor: theme.textColor,
    borderWidth: 1,
    marginTop: 10,
    width: 130,
    alignItems: 'center',
  },
});

export default UserScreen;
