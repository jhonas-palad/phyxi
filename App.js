import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigation from './src/navigation/tabNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';



const Stack = createStackNavigator();


export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      
      <TabNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
