import { Animated, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import textStyles from '../styles/TextStyles';

const HomeHeader = props => {
    const [count, setCount] = React.useState(0);
    const navigation = useNavigation();
    return (
        <Animated.View style={{
            backgroundColor:'tomato',
            alignItems: 'stretch',
            justifyContent: 'center',
            padding: 12,
            zIndex: 5
        }}>
            <View style={[{flexDirection:'row', justifyContent:'space-between', marginBottom: 10, paddingHorizontal:10}]}>
                <View style={{flexDirection:'row',alignItems: 'center'}}>
                    <FontAwesome5 name={'bars'} color="#f8fafc" size={20} />
                    <Text style={[textStyles.textHeadline,{marginLeft: 10, color: "#f8fafc"}]}>All services</Text>
                </View>
                <View>
                    <FontAwesome5 name={"user-alt"} color="#f8fafc" size={24} />
                </View>
            </View>
            
            <TouchableOpacity onPress={()=> navigation.navigate('Search')} style={[styles.input]}>
                    <Text style={{color:"#6b7280"}}>
                        Search
                    </Text>
                </TouchableOpacity>
        </Animated.View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#f3f4f6",
        padding: 10,
        borderRadius: 16,
        width:'100%',
        zIndex:55
      },
})