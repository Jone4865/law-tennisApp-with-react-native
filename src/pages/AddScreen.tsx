import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../types';
import AddComponents from '../Componenets/AddComponents';

interface AddScreenProps {
  navigation: any;
  route: RouteProp<RootStackParamList, 'add'>;
}

function AddScreen({navigation, route}: AddScreenProps) {
  return <AddComponents navigation={navigation} route={route} />;
}

export default AddScreen;
