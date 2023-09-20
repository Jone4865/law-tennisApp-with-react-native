import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../types';
import AddComponents from '../Componenets/AddComponents';

interface EditScreenProps {
  navigation: any;
  route: RouteProp<RootStackParamList, 'edit'>;
}

function EditScreen({navigation, route}: EditScreenProps) {
  return <AddComponents navigation={navigation} route={route} />;
}

export default EditScreen;
