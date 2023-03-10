import { setStatusBarStyle } from 'expo-status-bar';
import {Animated, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import React from 'react'

const SearchScreen = () => {
    const navigation = useNavigation();
    React.useEffect(() => {
        navigation.setOptions({
            title:"Search",
            presentation: "modal",
            headerSearchBarOptions: {
                // search bar options
            },
        });
      }, [navigation]);
    return (
        <View>
            <Text>SearchScreen</Text>
        </View>
    )
}

export default SearchScreen