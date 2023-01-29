import {Animated, Text, TextInput, View, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import React from 'react'

const SearchScreen = () => {
    const navigation = useNavigation();
    React.useEffect(() => {
        
        navigation.setOptions({
            headerSearchBarOptions: {
                // search bar options
            },
        });
        return ()=>{
            
        }
      }, [navigation]);
    return (
        <View>
            <Text>SearchScreen</Text>
        </View>
    )
}

export default SearchScreen