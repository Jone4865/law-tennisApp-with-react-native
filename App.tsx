import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './src/types';

import HomeScreen from './src/pages/HomeScreen';

import UserScreen from './src/pages/UserScreen';
import AddScreen from './src/pages/AddScreen';
import {theme} from './colors';
import SignInScreen from './src/pages/SignInScreen';
import SignUpScreen from './src/pages/SignUpScreen';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Footer from './src/Componenets/Footer';
import SignOutScreen from './src/pages/SignOutScreen';
import VerificationScreen from './src/pages/VerificationScreen';

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
          key="home"
          component={HomeScreen}
          options={{title: '홈', headerLeft: () => null}}
          initialParams={{
            type: 'home',
          }}
        />
        <Stack.Screen
          name="join"
          key="join"
          component={HomeScreen}
          options={({navigation}: {navigation: any}) => ({
            title: '참여목록',
            headerLeft: () => renderCustomBackButton(navigation),
          })}
          initialParams={{
            type: 'join',
          }}
        />
        <Stack.Screen
          name="create"
          key="create"
          component={HomeScreen}
          options={({navigation}: {navigation: any}) => ({
            title: '작성목록',
            headerLeft: () => renderCustomBackButton(navigation),
          })}
          initialParams={{
            type: 'create',
          }}
        />

        <Stack.Screen
          name="signin"
          key="signin"
          component={SignInScreen}
          options={{title: '로그인', headerLeft: () => null}}
        />
        <Stack.Screen
          name="signup"
          key="signup"
          component={SignUpScreen}
          options={({navigation}: {navigation: any}) => ({
            title: '회원가입',
            headerLeft: () => renderCustomBackButton(navigation),
          })}
        />

        <Stack.Screen
          name="add"
          key="add"
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
          key="detail"
          component={AddScreen}
          options={({navigation}: {navigation: any}) => ({
            title: '상세보기',
            headerLeft: () => renderCustomBackButton(navigation),
          })}
          initialParams={{type: 'detail'}}
        />
        <Stack.Screen
          name="edit"
          key="edit"
          component={AddScreen}
          options={({navigation}: {navigation: any}) => ({
            title: '수정하기',
            headerLeft: () => renderCustomBackButton(navigation),
          })}
          initialParams={{type: 'edit'}}
        />

        <Stack.Screen
          name="user"
          key="user"
          component={UserScreen}
          options={({navigation}: {navigation: any}) => ({
            title: '내정보',
            headerLeft: () => renderCustomBackButton(navigation),
          })}
        />

        <Stack.Screen
          name="signout"
          key="signout"
          component={SignOutScreen}
          options={({navigation}: {navigation: any}) => ({
            title: '회원탈퇴',
            headerLeft: () => renderCustomBackButton(navigation),
          })}
        />

        <Stack.Screen
          name="verification"
          key="verification"
          component={VerificationScreen}
          options={({navigation}: {navigation: any}) => ({
            title: '본인인증',
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
