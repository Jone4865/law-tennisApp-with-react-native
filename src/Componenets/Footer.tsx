import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import {theme} from '../../colors';
import {RootStackParamList} from '../types';

function Footer() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const onPressHandle = (pageName: keyof RootStackParamList) => {
    navigation.navigate(pageName); // 클릭한 페이지 이름으로 이동
  };

  return (
    <View style={styles.container}>
      <AntDesign
        name="home"
        size={22}
        color={theme.color}
        onPress={() => onPressHandle('home')}
      />
      <AntDesign
        name="search1"
        size={22}
        color={theme.color}
        onPress={() => onPressHandle('search')}
      />
      <Octicons
        name="three-bars"
        size={22}
        color={theme.color}
        onPress={() => onPressHandle('list')}
      />
      <AntDesign name="user" size={22} color={theme.color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    color: theme.color,
  },
});

export default Footer;
