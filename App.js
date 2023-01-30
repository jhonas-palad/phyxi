import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, Platform, StatusBar, Dimensions} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import { setStatusBarStyle} from 'expo-status-bar';

const statusBarHeight = StatusBar.currentHeight;

export default function App() {
  React.useEffect(()=>{setStatusBarStyle("light")}, []);
  return (
    <>
      <SafeAreaView style={{
        flex:0, 
        paddingTop: Platform.OS === 'android' ? statusBarHeight: 0 ,
        backgroundColor: 'tomato' }} 
      />
      <SafeAreaView 
        style={{flex:1, position:'relative'}}>
          <RootNavigator />
      </SafeAreaView>
    </>
      
  );
}