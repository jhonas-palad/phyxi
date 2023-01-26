import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import HeaderLogo from './src/components/HeaderLogo';

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
            backgroundColor: DummyTheme.colors.header,
            
          }
        }}
      
      >
        <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: (props) => <HeaderLogo {...props} /> 
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
