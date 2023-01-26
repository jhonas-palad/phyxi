import React from 'react'
import {View, Text, StyleSheet }from 'react-native';
const HeaderLogo = () => {

  return (
    <View
        style={styles.container}
    >
        <Text>
            Phyxi
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