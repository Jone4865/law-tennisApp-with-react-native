import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../types';
import AddComponents from '../Componenets/AddComponents';

interface DetailScreenProps {
  navigation: any;
  route: RouteProp<RootStackParamList, 'detail'>;
}

function DetailScreen({navigation, route}: DetailScreenProps) {
  return <AddComponents navigation={navigation} route={route} />;
}

export default DetailScreen;
