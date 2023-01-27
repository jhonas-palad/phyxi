import React from 'react';
import { 
  Animated,
  View, 
  Text, 
  Button,
  StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';

export const HomeScreen = (props) => {
  const scrollY = React.useRef(new Animated.Value(0)).current; //created once
  //Animated.Value returns something diffent than just a value.
  //We have to wrap it inside the Animated.View
  const H_MAX_HEIGHT = 60;
  const H_MIN_HEIGHT = 0;
  const H_SCROLL_DISTANCE = H_MAX_HEIGHT -H_MIN_HEIGHT;
  const headerHeight = scrollY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [60, 0],
    extrapolate:'clamp'
  });
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 60],
    outputRange: [0, -60],
    extrapolate:'clamp'
  })
  const headerOpacity = scrollY.interpolate({
    inputRange:[0, 60],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });
  return (
    <View style={styles.container}>
      <Header style={{height:headerHeight, transform: [{translateY: headerTranslateY}], opacity: headerOpacity}}>
        
      </Header>
      <Animated.ScrollView
        style={[
          styles.scrollView,
          {
            flex: 1
          }
        ]}
        showsVerticalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={5}
        onScroll={
          Animated.event([{
            nativeEvent: { contentOffset:{y: scrollY}}
          }], { 
            listener: (event) => null, 
            useNativeDriver:false
          }
          )
        }
      >
        <View style={[styles.fakeContent, {backgroundColor: '#222222'}]}/>
        <View style={[styles.fakeContent, {backgroundColor: '#333333'}]}/>
        <View style={[styles.fakeContent, {backgroundColor: '#444444'}]}/>
        <View style={[styles.fakeContent, {backgroundColor: '#555555'}]}/>
      </Animated.ScrollView>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  scrollView: {
    flex:1,
    backgroundColor:"red"
  },
  fakeContent: {
    height: 250,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8
  }
})