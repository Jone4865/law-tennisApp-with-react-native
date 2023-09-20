import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, ScrollView, TextInput} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../types';
import {theme} from '../../colors';
import ModalComponents from './ModalComponents';
import Btn from './Btn';
import Share from 'react-native-share';

interface AddComponentsProps {
  navigation: any;
  route: RouteProp<RootStackParamList, 'add' | 'detail' | 'edit'>;
}

type Data = {
  id: string;
  title: string;
  content: string;
  untilDate: string;
  organigation: string;
  doneContent?: string;
  owner: string;
};

function AddComponents({navigation, route}: AddComponentsProps) {
  const type = route.params;
  const [modalVisibel, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<'save' | 'join'>('save');
  const [myNickName] = useState('dwawadwa');
  const [variables, setVariables] = useState<Data>({
    id: '',
    title: '',
    content: '',
    organigation: '',
    untilDate: '',
    owner: '',
  });
  const [data] = useState<Data>({
    content:
      'dasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwad',
    id: 'dawdawdawd',
    title:
      'dasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwad',
    // doneContent: 'dasdwadwaddasdwadwaddasdwadwaddasdwadwaddasdwadwad',
    organigation: 'dwadwadwadwadw',
    untilDate: 'dwadwadwadw',
    owner: 'dwadwadwa',
  });

  const onChangeHandle = (
    key: 'title' | 'content' | 'doneContent' | 'organigation' | 'untilDate',
    content: string,
  ) => {
    setVariables(prev => ({
      ...prev,
      [key]: content,
    }));
  };

  const onJoinHandle = () => {
    if (variables.owner !== myNickName) {
      setModalType('join');
      setModalVisible(true);
    } else {
      navigation.navigate('edit');
    }
  };

  const onSubmitHandle = () => {
    setModalType('save');
    setModalVisible(true);
  };

  const onConfirmHandle = () => {
    setModalVisible(false);
    if (modalType === 'save') {
      console.log('저장');
    } else {
      console.log('참여');
    }
  };

  const unVisibleHandle = () => {
    setModalVisible(false);
  };

  const onSharedHandle = async () => {
    const imageFilePath = '../img/1.png';

    const shareOptions = {
      title: 'Custom Share',
      message: 'Custom image share',
      url: 'https://example.com',
      imageUrl: `file://${imageFilePath}`,
    };

    try {
      const result = await Share.open(shareOptions);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    type?.type !== 'add' && setVariables(data);
  }, [data, type]);

  return (
    <ScrollView style={styles.container}>
      {modalVisibel && (
        <ModalComponents
          isVisible={modalVisibel}
          closeModalHandle={unVisibleHandle}
          confirmHandle={onConfirmHandle}
          closeTitle="닫기"
          confirmTitle={modalType === 'save' ? '저장' : '서명하기'}
          content={
            modalType === 'save'
              ? '작성하신 내용은 수정 할 수 없습니다. \n저장하시겠습니까?'
              : '서명하시겠습니까?'
          }
        />
      )}
      <View style={styles.wrap}>
        {type?.type === 'detail' && (
          <View>
            <Text style={styles.label}>제목</Text>
          </View>
        )}
        <TextInput
          placeholderTextColor="#ffffff5d"
          placeholder="제목"
          value={variables.title}
          editable={type?.type === 'detail' ? false : true}
          style={styles.title}
          numberOfLines={1}
          onChangeText={text => onChangeHandle('title', text)}
        />
        {type?.type === 'detail' && (
          <View>
            <Text style={styles.label}>내용</Text>
          </View>
        )}
        <ScrollView>
          <TextInput
            multiline
            placeholderTextColor="#ffffff5d"
            placeholder="내용(목적)"
            editable={type?.type === 'detail' ? false : true}
            value={variables.content}
            style={{...styles.textFormat, ...styles.textWrap}}
            onChangeText={text => onChangeHandle('content', text)}
          />
        </ScrollView>
        {type?.type === 'detail' && (
          <View>
            <Text style={styles.label}>단체명(대표자)</Text>
          </View>
        )}
        <TextInput
          placeholderTextColor="#ffffff5d"
          placeholder="단체명 혹은 대표자"
          value={variables.organigation}
          editable={type?.type === 'detail' ? false : true}
          style={styles.title}
          numberOfLines={1}
          onChangeText={text => onChangeHandle('organigation', text)}
        />
        {type?.type === 'detail' && (
          <View>
            <Text style={styles.label}>종료일</Text>
          </View>
        )}
        <TextInput
          placeholderTextColor="#ffffff5d"
          placeholder="종료일"
          value={variables.untilDate}
          editable={type?.type === 'detail' ? false : true}
          style={styles.title}
          numberOfLines={1}
          onChangeText={text => onChangeHandle('untilDate', text)}
        />
        {(variables.doneContent || type?.type === 'edit') && (
          <>
            {type?.type === 'detail' && (
              <View>
                <Text style={styles.label}>후기</Text>
              </View>
            )}
            <ScrollView>
              <TextInput
                placeholderTextColor="#ffffff5d"
                placeholder="후기"
                multiline
                editable={type?.type === 'detail' ? false : true}
                value={variables.doneContent}
                style={{...styles.textFormat, ...styles.textWrap}}
                onChangeText={text => onChangeHandle('doneContent', text)}
              />
            </ScrollView>
          </>
        )}
      </View>
      {!(variables.doneContent && type?.type === 'detail') && (
        <View style={styles.clickContainer}>
          <Btn
            title={
              type?.type !== 'detail'
                ? '저장하기'
                : variables.owner === myNickName
                ? '후기작성'
                : '참여하기'
            }
            iconName="check"
            onPress={() =>
              !variables.doneContent && type?.type === 'detail'
                ? onJoinHandle()
                : onSubmitHandle()
            }
          />
          <Btn
            title={type?.type !== 'detail' ? '취소' : '공유하기'}
            iconName={type?.type === 'detail' ? 'sharealt' : 'close'}
            onPress={() =>
              type?.type !== 'detail' ? navigation.goBack() : onSharedHandle()
            }
          />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, marginBottom: 70},
  wrap: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  textWrap: {
    backgroundColor: theme.bg,
    paddingHorizontal: 15,
    paddingTop: 15,
    marginBottom: 10,
    height: 135,
    borderRadius: 10,
  },
  title: {
    backgroundColor: theme.bg,
    padding: 15,
    marginBottom: 10,
    color: theme.textColor,
    fontSize: theme.contentFontSize,
    borderRadius: 10,
  },
  textFormat: {
    color: theme.textColor,
    fontSize: theme.contentFontSize,
    flexWrap: 'nowrap',
  },
  clickContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: '800',
    marginBottom: 3,
    fontSize: theme.titleFontSize,
  },
});

export default AddComponents;
