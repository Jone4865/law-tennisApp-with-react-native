import React, {useState} from 'react';
import {View, TextInput, StyleSheet, ScrollView, Text} from 'react-native';
import {theme} from '../../colors';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import {RootStackParamList} from '../types';

type Props = {
  type: 'home' | 'join' | 'create';
};

type Data = {
  id: string;
  title: string;
  content: string;
  done: boolean;
  until: Date;
  organization: string;
};

function MainComponents({type}: Props) {
  console.log(type);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [searchText, setSearchText] = useState('');
  const [datas] = useState<Data[]>([
    {
      content: '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용',
      id: 'dawdawd',
      title: '제목제목제목제목제목제목제목제목제목제목제목제목',
      done: true,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: 'dawdawd',
      title: 'dwadwadwadwada',
      done: false,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: 'dawdawd',
      title: 'dwadwadwadwada',
      done: false,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: 'dawdawd',
      title: 'dwadwadwadwada',
      done: true,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: 'dawdawd',
      title: 'dwadwadwadwada',
      done: false,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: 'dawdawd',
      title: 'dwadwadwadwada',
      done: false,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: 'dawdawd',
      title: 'dwadwadwadwada',
      done: false,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: 'dawdawd',
      title: 'dwadwadwadwada',
      done: false,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: 'dawdawd',
      title: 'dwadwadwadwada',
      done: false,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: 'dawdawd',
      title: 'dwadwadwadwada',
      done: false,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: 'dawdawd',
      title: 'dwadwadwadwada',
      done: false,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: 'dawdawd',
      title: 'dwadwadwadwada',
      done: false,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: 'dawdawd',
      title: 'dwadwadwadwada',
      done: false,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
  ]);
  const [isNew, setIsNew] = useState(true);
  const [check, setCheck] = useState(false);
  const onSearchHandle = () => {};
  const onSortHandle = (bool: boolean) => {
    setIsNew(bool);
  };
  const onDoneHandle = () => {
    setCheck(!check);
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={searchText}
        onChangeText={setSearchText}
        style={styles.input}
        onSubmitEditing={onSearchHandle}
      />
      <View style={styles.filterContainer}>
        <View style={styles.filterWrap}>
          <Text
            style={isNew && styles.ableColor}
            onPress={() => onSortHandle(true)}>
            최신순
          </Text>
          <Text
            style={!isNew && styles.ableColor}
            onPress={() => onSortHandle(false)}>
            등록순
          </Text>
        </View>
        <Text style={check && styles.ableColor} onPress={() => onDoneHandle()}>
          {check && <Icon name="check" />} 완료포함
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {datas.map((v, idx) => (
          <View>
            <View key={idx} style={styles.mapContainer}>
              <View>
                <Text style={styles.title} numberOfLines={1}>
                  {v.title}
                </Text>
                <Text style={styles.content} numberOfLines={1}>
                  {v.content}
                </Text>
              </View>
              <View style={styles.mapRightContainer}>
                <Text style={styles.date}>
                  {v.done ? '종료' : moment(v.until).format('YY-MM-DD')}
                </Text>
                <Text style={styles.date} numberOfLines={1}>
                  {v.organization}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <View
        onTouchEnd={() => navigation.navigate('signin')}
        style={styles.floatBtn}>
        <Text style={styles.add}>등록하기</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 170,
  },
  input: {
    height: 50,
    borderColor: theme.bg,
    borderStyle: 'solid',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: theme.contentFontSize,
    marginVertical: 10,
    borderRadius: 15,
  },
  mapContainer: {
    backgroundColor: theme.bg,
    marginVertical: 5,
    borderRadius: 15,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mapRightContainer: {
    justifyContent: 'space-between',
    maxWidth: 80,
  },
  title: {
    maxWidth: 150,
    color: theme.textColor,
    marginBottom: 10,
    fontWeight: '800',
  },
  content: {maxWidth: 200, color: theme.textColor},
  date: {
    color: theme.textColor,
    alignSelf: 'flex-end',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  filterWrap: {flexDirection: 'row', gap: 12},
  ableColor: {color: theme.bg, fontWeight: '800'},
  floatBtn: {
    position: 'absolute',
    right: 5,
    bottom: 173,
    backgroundColor: '#76a875',
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    opacity: 0.9,
  },
  add: {
    color: theme.textColor,
    fontWeight: '900',
  },
});

export default MainComponents;
