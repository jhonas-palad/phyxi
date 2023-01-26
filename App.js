import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';


const Stack = createStackNavigator();

const DummyTheme = {
  dark: false,
  colors : {
    header: "#42a5f5",
    background: "#e3f2fd",

  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            height: 44,
            borderBottomColor:"transparent"
          },
          headerShown: true,
          title:"",
          headerTitleAlign: "center",

        }}
      
      >
        <Stack.Screen 
            name="Home"
            component={HomeScreen}

        />
        <Stack.Screen 
            name="Details"
            component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

