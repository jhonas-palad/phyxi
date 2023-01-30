import React from 'react';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();

const HomeNavigator = (props) => {
    return (
        <Stack.Navigator initialRouteName='AllServices'>
            <Stack.Screen name="AllServices" component={HomeScreen} />
            <Stack.Screen name="Search" component={SearchScreen} 
            />
        </Stack.Navigator>
    )
}

export default HomeNavigator;