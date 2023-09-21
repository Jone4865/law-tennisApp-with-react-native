import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import {theme} from '../../colors';
import {RootStackParamList} from '../types';

function Footer() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const onPressHandle = (pageName: keyof RootStackParamList) => {
    navigation.navigate(pageName);
  };

  return (
    <View style={styles.container}>
      <Icon
        name="home"
        size={22}
        color={theme.textColor}
        onPress={() => onPressHandle('home')}
      />
      <Icon
        name="camerao"
        size={22}
        color={theme.textColor}
        onPress={() => onPressHandle('create')}
      />
      <Icon
        name="user"
        size={22}
        color={theme.textColor}
        onPress={() => onPressHandle('user')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    color: theme.textColor,
    backgroundColor: theme.bg,
  },
});

export default Footer;
