import React from 'react';
import {Header, createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './src/types';

import HomeScreen from './src/pages/HomeScreen';
import DetailsScreen from './src/pages/SearchScreen';
import Footer from './src/Componenets/Footer';
import ListScreen from './src/pages/ListScreen';

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{title: '뒤로가기'}}
        />
        <Stack.Screen
          name="search"
          component={DetailsScreen}
          options={{title: '뒤로가기'}}
        />
        <Stack.Screen
          name="list"
          component={ListScreen}
          options={{title: '뒤로가기'}}
        />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

export default App;
