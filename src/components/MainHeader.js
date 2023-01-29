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
import textStyles from '../styles/TextStyles';

export default function Header({children}) {
    return (
        <View style={styles.header}>
            <Text style={[styles.headerTitle, textStyles.textHeadline ,{}]}>
                {children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 12,
        zIndex:2,
    },
    headerTitle:{
        flex: 1,
        textAlign: "center"
    }
});
