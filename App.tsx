import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './src/types';

import HomeScreen from './src/pages/HomeScreen';

import UserScreen from './src/pages/UserScreen';
import AddScreen from './src/pages/AddScreen';
import DetailScreen from './src/pages/DetailScreen';
import {theme} from './colors';
import EditScreen from './src/pages/EditScreen';
import SignInScreen from './src/pages/SignInScreen';
import SignUpScreen from './src/pages/SignUpScreen';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Footer from './src/Componenets/Footer';

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  const renderCustomBackButton = (navigation: any) => {
    return (
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        <Icon style={styles.icon} name="left" />
        <Text style={styles.text}>뒤로가기</Text>
      </TouchableOpacity>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.bg,
          },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          },
        }}>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{title: '홈', headerLeft: () => null}}
        />
        <Stack.Screen
          name="signin"
          component={SignInScreen}
          options={{title: '로그인', headerLeft: () => null}}
        />
        <Stack.Screen
          name="signup"
          component={SignUpScreen}
          options={({navigation}: {navigation: any}) => ({
            title: '회원가입',
            headerLeft: () => renderCustomBackButton(navigation),
          })}
        />
        <Stack.Screen
          name="add"
          component={AddScreen}
          options={({navigation}: {navigation: any}) => ({
            title: '등록하기',
            headerLeft: () => renderCustomBackButton(navigation),
          })}
          initialParams={{
            type: 'add',
          }}
        />
        <Stack.Screen
          name="detail"
          component={DetailScreen}
          options={({navigation}: {navigation: any}) => ({
            title: '상세보기',
            headerLeft: () => renderCustomBackButton(navigation),
          })}
          initialParams={{type: 'detail'}}
        />
        <Stack.Screen
          name="edit"
          component={EditScreen}
          options={({navigation}: {navigation: any}) => ({
            title: '수정하기',
            headerLeft: () => renderCustomBackButton(navigation),
          })}
          initialParams={{type: 'edit'}}
        />
        <Stack.Screen
          name="user"
          component={UserScreen}
          options={({navigation}: {navigation: any}) => ({
            title: '내정보',
            headerLeft: () => renderCustomBackButton(navigation),
          })}
        />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
  text: {
    fontSize: theme.titleFontSize,
    color: theme.textColor,
  },
  icon: {
    color: theme.textColor,
    fontSize: theme.titleFontSize,
  },
});

export default App;
