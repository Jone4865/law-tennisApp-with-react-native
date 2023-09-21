import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../colors';
import moment from 'moment';
import ModalComponents from './ModalComponents';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types';

type Data = {
  id: string;
  title: string;
  content: string;
  done: boolean;
  until: Date;
  organization: string;
};

type Props = {data: Data};

function CreateItem({data}: Props) {
  const [type, setType] = useState<'delete' | 'dowload'>('dowload');
  const [isVisible, setIsVisible] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const onDeleteHandle = () => {
    setType('delete');
    setIsVisible(true);
  };
  const onDowloadHandle = () => {
    setType('dowload');
    setIsVisible(true);
  };
  const onCloseHandle = () => {
    if (type === 'delete') {
    } else {
    }
    setIsVisible(false);
  };
  const onConfirmHandle = () => {
    if (type === 'delete') {
    } else {
    }
    setIsVisible(false);
  };
  return (
    <View key={data.id} style={styles.container}>
      <ModalComponents
        closeModalHandle={onCloseHandle}
        closeTitle={type === 'delete' ? '취소' : 'PDF'}
        confirmHandle={onConfirmHandle}
        confirmTitle={type === 'delete' ? '확인' : 'EXCEL'}
        content={
          type === 'delete'
            ? '해당 게시물을 삭제하시겠습니까?'
            : '파일 형식을 선택해주세요.'
        }
        isVisible={isVisible}
        iconVisible={type === 'delete' && true}
      />
      <View>
        <Text style={styles.title} numberOfLines={1}>
          {data.title}
        </Text>
        <Text style={styles.date}>
          {data.done ? '종료' : moment(data.until).format('YY-MM-DD') + ' 까지'}
        </Text>
      </View>
      <View style={styles.btns}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('edit')}>
          <Text style={styles.btnText}>후기작성</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={onDowloadHandle}>
          <Text style={styles.btnText}>다운로드</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={onDeleteHandle}>
          <Text style={styles.btnText}>삭제</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    marginVertical: 5,
    borderRadius: 15,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: theme.textColor,
    maxWidth: 150,
    marginBottom: 10,
    fontWeight: '800',
  },
  date: {color: theme.textColor},
  btns: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'white',
    padding: 5,
  },
  btnText: {
    fontSize: 12,
  },
});

export default CreateItem;
