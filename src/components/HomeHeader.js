import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import {Heading, IconButton, HStack, Icon} from 'native-base';

const HomeHeader = ({title}) => {
    const navigation = useNavigation();
    const handleOnPress = (e) => {
        navigation.navigate('Search');
    }
    return (
   
        <HStack 
            safeAreaTop
            safeAreaX={1.5}
            paddingBottom={1.5}
            _light={{bg: 'info.200'}}
            _dark={{bg: 'info.800'}} justifyContent="space-between" 
        >
            <HStack padding={0} space={1.5} alignItems="center">
                <IconButton
                icon={<Icon as={FontAwesome5} name="bars" />}
                _icon={{
                    color: 'info.400',
                    size: 'md'
                }}
                borderRadius="full"
                variant="ghost" />
                <Heading letterSpacing={-1} size="md" color="info.500">{title}</Heading>
            </HStack >
            <HStack>
            <IconButton
                icon={<Icon as={Ionicons} name="ios-search" />}
                _icon={{
                    color: 'info.400',
                    size: 'md'
                }}
                borderRadius="full"
                variant="ghost" 
            />
            <IconButton
                icon={<Icon as={FontAwesome5} name="user-alt" />}
                _icon={{
                    color: 'info.400',
                    size: 'md'
                }}
                borderRadius="full"
                variant="ghost" 
            />
            </HStack>
        </HStack>

    )
}

export default HomeHeader

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#f3f4f6",
        borderRadius: 16,
        width:'100%',
        zIndex:55
      },
})