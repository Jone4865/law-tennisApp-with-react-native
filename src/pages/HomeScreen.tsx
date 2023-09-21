import React, {useState} from 'react';
import {View, TextInput, StyleSheet, ScrollView, Text} from 'react-native';
import {theme} from '../../colors';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {RootStackParamList} from '../types';
import {RouteProp} from '@react-navigation/native';
import MainItem from '../Componenets/MainItem';
import CreateItem from '../Componenets/CreateItem';

type Props = {
  route: RouteProp<RootStackParamList, 'home' | 'join' | 'create'>;
};

type Data = {
  id: string;
  title: string;
  content: string;
  done: boolean;
  until: Date;
  organization: string;
};

function HomeScreen({route}: Props) {
  const type = route.params?.type;
  console.log(type);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [searchText, setSearchText] = useState('');
  const [datas] = useState<Data[]>([
    {
      content: '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용',
      id: '1',
      title: '제목제목제목제목제목제목제목제목제목제목제목제목',
      done: true,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: '2',
      title: 'dwadwadwadwada',
      done: false,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: '3',
      title: 'dwadwadwadwada',
      done: false,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: '4',
      title: 'dwadwadwadwada',
      done: true,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: '5',
      title: 'dwadwadwadwada',
      done: false,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: '6',
      title: 'dwadwadwadwada',
      done: false,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: '7',
      title: 'dwadwadwadwada',
      done: false,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: '8',
      title: 'dwadwadwadwada',
      done: false,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: '9',
      title: 'dwadwadwadwada',
      done: false,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: '10',
      title: 'dwadwadwadwada',
      done: false,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: '11',
      title: 'dwadwadwadwada',
      done: false,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: '12',
      title: 'dwadwadwadwada',
      done: false,
      until: new Date(),
      organization: '두타모오오오오오오올',
    },
    {
      content:
        '1번 문장입니당.ㅇ.임ㅈ임자ㅓ이ㅓㅁ지어ㅣㅈ모이ㅗㅈ미오밍뫼이ㅏㅁ',
      id: '13',
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
        {type !== 'create' && (
          <Text
            style={check && styles.ableColor}
            onPress={() => onDoneHandle()}>
            {check && <Icon name="check" />} 완료포함
          </Text>
        )}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {datas.map(v =>
          type === 'create' ? (
            <CreateItem key={v.id} data={v} />
          ) : (
            <MainItem key={v.id} data={v} />
          ),
        )}
      </ScrollView>
      {type === 'home' && (
        <View
          onTouchEnd={() => navigation.navigate('signin')}
          style={styles.floatBtn}>
          <Text style={styles.add}>등록하기</Text>
        </View>
      )}
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
  content: {maxWidth: 200, color: theme.textColor},
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

export default HomeScreen;
