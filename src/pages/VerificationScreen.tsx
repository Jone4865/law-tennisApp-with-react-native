import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import SignatureCanvas, {SignatureViewRef} from 'react-native-signature-canvas';
import {theme} from '../../colors';
interface VerificationScreenProps {
  navigation: any;
}

function VerificationScreen({navigation}: VerificationScreenProps) {
  console.log(navigation);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPhone, setConfirmPhone] = useState('');
  const [signVisible, setSignVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const outSideWidth = 140; // 여기에 원하는 값을 설정합니다.
  const dynamicWidth = Dimensions.get('window').width - outSideWidth;

  const signatureRef = useRef<SignatureViewRef | null>(null);

  const handleClear = () => {
    signatureRef.current?.clearSignature();
  };

  const handleSave = async () => {
    console.log('서명');
    setSignVisible(false);
    // const signature = await signatureRef.current?.getData();
    // // 서명 데이터를 여기에서 처리하거나 저장합니다.
  };

  const onConfirmHandle = () => {
    setConfirmVisible(true);
  };

  const signVisibleHandle = () => {
    setSignVisible(true);
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>이름</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="홍길동"
          style={styles.inputs}
        />
        <Text style={styles.title}>휴대폰 번호</Text>
        <View style={styles.phoneWrap}>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            placeholder="숫자만 입력해주세요"
            style={{...styles.inputs, width: dynamicWidth}}
          />
          <TouchableOpacity onPress={onConfirmHandle} style={styles.miniBtn}>
            <Text style={styles.btnText}>발송</Text>
          </TouchableOpacity>
        </View>
        {confirmVisible && (
          <View style={styles.phoneWrap}>
            <TextInput
              value={confirmPhone}
              onChangeText={setConfirmPhone}
              placeholder="인증번호 6자를 입력해주세요"
              style={{...styles.inputs, width: dynamicWidth}}
            />
            <TouchableOpacity onPress={onConfirmHandle} style={styles.miniBtn}>
              <Text style={styles.btnText}>인증하기</Text>
            </TouchableOpacity>
          </View>
        )}
        {signVisible ? (
          <SignatureCanvas
            ref={signatureRef}
            confirmText="저장"
            clearText="초기화"
            onClear={handleClear}
            onEnd={handleSave}
            rotated
            style={styles.signBoxAfter}
          />
        ) : (
          <TouchableOpacity
            onPress={signVisibleHandle}
            style={styles.signBoxBefore}>
            <TextInput placeholder="서명을 진행해주세요" editable={false} />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={signVisibleHandle} style={styles.btn}>
          <Text style={styles.btnText}>서명하기</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={styles.floatBtn}>
        <Text style={styles.btnText}>저장하기</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {paddingHorizontal: 15, paddingVertical: 20, flex: 1},
  phoneWrap: {
    flexDirection: 'row',
    gap: 10,
  },
  title: {fontSize: theme.titleFontSize, fontWeight: '800'},
  inputs: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: theme.radius,
    marginVertical: 10,
    borderWidth: 1,
  },
  miniBtn: {
    backgroundColor: theme.bg,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: theme.radius,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    marginVertical: 10,
  },
  btnText: {
    color: theme.textColor,
    fontWeight: '800',
  },
  btn: {
    backgroundColor: theme.bg,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: theme.radius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signBoxBefore: {
    borderColor: theme.bg,
    width: '100%',
    height: 130,
    borderWidth: 1,
    borderRadius: theme.radius,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signBoxAfter: {
    borderColor: theme.bg,
    width: '100%',
    height: 130,
    marginBottom: 10,
  },
  floatBtn: {
    position: 'absolute',
    backgroundColor: 'teal',
    bottom: 0,
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 60,
  },
});

export default VerificationScreen;
