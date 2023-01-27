import { 
    Animated,
    View,
    Text,
    Image,
    ScrollAreaView,
    ScrollView,
    StyleSheet
} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Header({style,children}) {
  return (
    <Animated.View style={[styles.header, style]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name='bars' size={22} />
            <Text style={{fontSize:22}}>
                {children}
            </Text>
        </View>
        
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 12,
        backgroundColor: "white",
        position: "absolute",
        top:0,
        left:0,
        right: 0,
        height: 100,
        zIndex:2
    }
});
