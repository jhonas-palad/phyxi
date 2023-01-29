import React from 'react';

import {View, Text} from 'react-native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();

const Example = ()=>{
    return (
        <View style={{flex:1}}>
            <Text>Example</Text>
        </View>
    )
}

const HomeNavigator = (props) => {
    return (
        <Stack.Navigator initialRouteName='AllServices'>
            <Stack.Screen name="AllServices" options={{title: 'All Services'}}  component={HomeScreen} />
            <Stack.Screen 
                name="Search"
                options={{presentation: "formSheet", statusBarStyle: "light" }}
                component={SearchScreen} 
            />
        </Stack.Navigator>
    )
}

export default HomeNavigator;