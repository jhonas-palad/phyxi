
import { Animated, View, Text, PanResponder } from 'react-native'
import React, {Component} from 'react'


export const withSnap = ({
    startValue = 0,
    endValue = 0,
    duration = 200,
    height = 500
  }) => WrappedComponent => {
    return class SnapHeader extends Component {
        UNSAFE_componentWillMount() {
            this.animatedValue = new Animated.Value(startValue);
            this.panResponder = PanResponder.create({
                onMoveShouldSetPanResponder: () => true,
                onMoveShouldSetPanResponderCapture: () => true,
                onPanResponderMove: (e, {dy}) => {
                    console.log(dy)
                    if(dy >= 30){
                        this.animatedValue.setValue(1 - Math.abs(dy / height))
                    }else if(dy <= -30){
                        this.animatedValue.setValue(Math.abs(dy/ height))
                    }
                },
                onPanResponderRelease: (e, {dy}) => {
                    if (dy < 0 && Math.abs(dy) > 30) {
                        Animated.timing(this.animatedValue,{
                            duration,
                            toValue: endValue
                        }).start();
                    }else if(dy > 0 && Math.abs(dy) > 30){
                        Animated.timing(this.animatedValue, {
                            duration,
                            toValue: startValue
                        }).start();
                    }
                }
            })

        }
            
        render(){
            return (
                <WrappedComponent snap={{startValue, endValue,duration,height, panHandlers:this.panResponder.panHandlers, animatedValue: this.animatedValue}} />
            )
        }
    }
}
