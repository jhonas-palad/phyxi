import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from '../icons';
import HomeScreen from "../screens/HomeScreen";
import Transactions from '../screens/Transactions';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={ ({route}) => ({
                    headerShown:false,
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
                                break;
                        }

                        return <Icons iconPackage={'MaterialCommunityIcons' } name={iconName} size={size} />
                    }
                })
                }
            >
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Transaction" component={Transactions}/>
                <Tab.Screen name="Inbox" component={Transactions}/>
                <Tab.Screen name="Profile" component={Transactions}/>
                <Tab.Screen name="Menu" component={Transactions}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigation;