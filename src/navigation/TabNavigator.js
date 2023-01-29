import React from 'react';
import {Animated, Dimensions} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';
import { Ionicons } from '@expo/vector-icons';

import HomeNavigator from './HomeNavigator';

import Transactions from '../screens/Transactions';
import MainHeader from '../components/MainHeader';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const headerOptions = {
        headerShown: false,
        headerStyle: {

        },
        header: ({ navigation, route, options, layout }) => {
            const title = getHeaderTitle(options, route.name);
            return <MainHeader>{title}</MainHeader>
        }
        
    }
    return (
        <Tab.Navigator
            barStyle={{backGroundColor:"red"}}
            activeColor="#f0edf6"
            screenOptions={ ({route}) => ({
                ...headerOptions,
                tabBarIcon: ({focused, color, size}) =>{
                    const routeName = route.name;
                    let iconName;
                    switch(routeName){
                        case 'Home':
                            iconName = focused ? 'ios-home' : 'ios-home-outline';
                            break;
                        case 'Transaction':
                            iconName = focused ? 'ios-documents': 'ios-documents-outline';
                            break;
                        case 'Inbox':
                            iconName = focused ? 'ios-mail-open' : 
                            'ios-mail-outline';
                            break;
                        case 'Profile':
                            iconName = focused ? 'ios-person-circle' : 
                            'ios-person-circle-outline';
                            break;
                        case 'Menu':
                            iconName = 'menu';
                            break;
                    }

                    return <Ionicons name={iconName} color={color} size={size} />;
                },
                tabBarShowLabel:true
            })
            }
        >
            <Tab.Screen name="Home" component={HomeNavigator}/>
            <Tab.Screen name="Transaction" component={Transactions}/>
            <Tab.Screen name="Inbox" component={Transactions}/>
            <Tab.Screen name="Profile" component={Transactions}/>
            <Tab.Screen name="Menu" component={Transactions}/>
        </Tab.Navigator>
    )
}

export default TabNavigator;