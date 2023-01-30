import { Animated, Text, View, TextInput, StyleSheet, Touchable } from 'react-native'
import {StatusBar} from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const MAX_HEIGHT = 60;
const MIN_HEIGHT = 0;
const HomeHeader = props => {

    const navigation = useNavigation();
    const [text, onChangeText] = React.useState('');
    return (
        <View {...props.snap.panHandlers}>
            <Animated.View style={{
                padding: 10 ,
                backgroundColor: 'tomato', 
                height:props.snap.animatedValue.interpolate({
                    inputRange:[props.snap.startValue, props.snap.endValue],
                    outputRange: [MAX_HEIGHT, MIN_HEIGHT],
                    extrapolate: 'clamp'
                })
            }}>
                <View>
                    <TouchableOpacity style={{}}><Text>Search button</Text></TouchableOpacity>
                </View>
            </Animated.View>
        </View>
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