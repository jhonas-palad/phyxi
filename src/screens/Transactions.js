import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const Transactions = () => {
    return (
        <View style={styles.container}>
            <Text>
                Transactions
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignContent: 'center'
    }
});

export default Transactions;