import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../colors';
import moment from 'moment';

type Data = {
  id: string;
  title: string;
  content: string;
  done: boolean;
  until: Date;
  organization: string;
};

type Props = {data: Data};

function MainItem({data}: Props) {
  return (
    <View key={data.id} style={styles.container}>
      <View>
        <Text style={styles.title} numberOfLines={1}>
          {data.title}
        </Text>
        <Text style={styles.content} numberOfLines={1}>
          {data.content}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.date}>
          {data.done ? '종료' : moment(data.until).format('YY-MM-DD')}
        </Text>
        <Text style={styles.date} numberOfLines={1}>
          {data.organization}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.bg,
    marginVertical: 5,
    borderRadius: 15,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    maxWidth: 150,
    color: theme.textColor,
    marginBottom: 10,
    fontWeight: '800',
  },
  content: {maxWidth: 200, color: theme.textColor},
  rightContainer: {
    justifyContent: 'space-between',
    maxWidth: 80,
  },
  date: {
    color: theme.textColor,
    alignSelf: 'flex-end',
  },
});

export default MainItem;
