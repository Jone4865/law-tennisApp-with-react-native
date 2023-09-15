// src/screens/HomeScreen.tsx
import React from 'react';
import {View, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('search')}
      />
    </View>
  );
}

export default HomeScreen;
