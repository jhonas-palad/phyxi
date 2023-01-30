
import { Animated, View, Text, PanResponder } from 'react-native'
import React, {Component} from 'react'


export const withSnap = ({
    startValue = 0,
    endValue = 0,
    duration = 200,
    height = 60
  }) => WrappedComponent => {
    return () => {
        const animatedValue =  React.useRef(new Animated.Value(startValue)).current;
        const panResponder = React.useRef(PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderMove: (e, {dy}) => {
                
                if(dy >= 30){
                    //Scrolling down
                    console.log("down")
                    animatedValue.setValue(1 - Math.abs(dy / height))
                }else if(dy <= -30){
                    //Scrolling up
                    
                    console.log("up")
                    animatedValue.setValue(Math.abs(dy / height))
                }
                console.log("animatedValue", animatedValue)
            },
            onPanResponderRelease: (e, {dy}) => {
                if (dy < 0 && Math.abs(dy) > 30) {
                    Animated.timing(animatedValue,{
                        duration,
                        toValue: endValue,
                        useNativeDriver: true
                    }).start();
                }else if(dy > 0 && Math.abs(dy) > 30){
                    Animated.timing(animatedValue, {
                        duration,
                        toValue: startValue,
                        useNativeDriver: true
                    }).start();
                }
            }
        })).current;
        return (
            <WrappedComponent snap={{startValue, endValue,duration,height, panHandlers:panResponder.panHandlers, animatedValue: animatedValue}} />
        )
    
    }
}
