import React from 'react'
import {View, Text, StyleSheet }from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const HeaderLogo = () => {

  return (
    <View
        style={styles.container}
    >
        <Text>
            <Icon name="rocket" size={30} color="#900"/>
        </Text>
    </View>
  )
}

export default HeaderLogo

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 100,
      textAlign:'center',
      borderWidth:1,
      padding: 1,
      borderColor: "red"
    },
  });