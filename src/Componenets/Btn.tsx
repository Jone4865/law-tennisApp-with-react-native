import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {theme} from '../../colors';

type Props = {
  title: string;
  iconName?: string;
  disabled?: boolean;
  onPress: () => void;
};

function Btn({title, iconName, onPress, disabled}: Props) {
  return (
    <TouchableOpacity
      disabled={disabled ? true : false}
      onPress={onPress}
      style={{...styles.container, opacity: disabled ? 0.3 : 1}}>
      {iconName && <Icon style={styles.icon} name={iconName} />}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.bg,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: theme.radius,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    minWidth: 120,
    justifyContent: 'center',
  },
  icon: {
    fontSize: theme.titleFontSize,
    color: theme.textColor,
  },
  text: {fontSize: theme.titleFontSize, color: theme.textColor},
});

export default Btn;
