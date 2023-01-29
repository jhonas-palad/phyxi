import { Animated, Text, View, TextInput, StyleSheet } from 'react-native'
import {StatusBar} from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const HomeHeader = ({style}) => {

    const navigation = useNavigation();
    const [text, onChangeText] = React.useState('');
    return (
        <Animated.View style={{padding: 0, height: 20 , ...style, backgroundColor: 'white'}}>
            <View style={[{padding: 5}]}>
                <TextInput 
                    style={[styles.input, {}]} 
                    inputMode="text" 
                    value={text} 
                    onChange={onChangeText}/>
            </View>
        </Animated.View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    input: {
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
      },
})