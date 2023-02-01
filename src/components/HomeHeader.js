import { Animated, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import {Text, Box, Heading, Button, HStack} from 'native-base';

const HomeHeader = props => {
    const navigation = useNavigation();

    return (
        <Box alignItems='stretch'
        justifyContent='center'
        zIndex={5} safeAreaTop _light={{bg: 'info.200'}}>
            <HStack justifyContent="space-between" marginBottom={2}>
                <HStack padding={0} space={0} alignItems="center">
                    <Button
                        color="primary.100"
                        size="sm"
                        variant="ghost"
                    >
                        <FontAwesome5 name={'bars'} color="#0ea5e9" size={20} />
                    </Button>
                    <Heading letterSpacing={-1} size="md" color="info.500">All services</Heading>
                </HStack>
                <View>
                    <FontAwesome5 name={"user-alt"} color="#f8fafc" size={24} />
                </View>
            </HStack>
            <Animated.View>
                <TouchableOpacity onPress={()=> navigation.navigate('Search')} style={[styles.input]}>
                        <Text style={{color:"#6b7280"}}>
                            Search
                        </Text>
                </TouchableOpacity>

            </Animated.View>
        </Box>
        
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