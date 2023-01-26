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
    console.log("ASD",style?.height);
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
        padding: 16,
        backgroundColor: "white",
    }
});
