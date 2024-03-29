import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import Btn from './Btn';
import {theme} from '../../colors';

type Props = {
  isVisible: boolean;
  closeTitle: string;
  confirmTitle: string;
  content: string;
  iconVisible?: boolean;
  closeModalHandle: () => void;
  confirmHandle: () => void;
};

function ModalComponents({
  isVisible,
  closeTitle,
  confirmTitle,
  content,
  closeModalHandle,
  confirmHandle,
  iconVisible,
}: Props) {
  return (
    <ReactNativeModal isVisible={isVisible}>
      <View style={styles.container}>
        <Text style={styles.text}>{content}</Text>
        <View style={styles.btnContainer}>
          <Btn
            title={confirmTitle}
            iconName={iconVisible ? 'check' : undefined}
            onPress={confirmHandle}
          />
          <Btn
            title={closeTitle}
            iconName={iconVisible ? 'close' : undefined}
            onPress={closeModalHandle}
          />
        </View>
      </View>
    </ReactNativeModal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: theme.radius,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  text: {
    fontSize: theme.titleFontSize,
  },
});

export default ModalComponents;
