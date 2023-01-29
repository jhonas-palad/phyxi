import React from 'react';
import { 
  Animated,
  View, 
  Text,
  StyleSheet,
  RefreshControl,
  TouchableOpacity
} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() =>{
        setRefreshing(false);
      }, 2000);
    }, []); //
    const MIN_HEIGHT = 0;
    const MAX_HEIGHT = 50;
    const scrollAnimatedVal = React.useRef(new Animated.Value(0)).current;
    const headerHeight = scrollAnimatedVal.interpolate(
      {
        inputRange: [MIN_HEIGHT, MAX_HEIGHT],
        outputRange: [MAX_HEIGHT, MIN_HEIGHT],
        extrapolate: 'clamp'
      }
    )
    const headerOpacity = scrollAnimatedVal.interpolate(
      {
        inputRange: [MIN_HEIGHT, MAX_HEIGHT],

        outputRange: [1,0],
        extrapolate: 'clamp'
        
      }
    );
    const headerTranslate = scrollAnimatedVal.interpolate(
      {
        inputRange: [MIN_HEIGHT, MAX_HEIGHT],

        outputRange: [MIN_HEIGHT,-MAX_HEIGHT],
        extrapolate: 'clamp'
        
      }
    );

    return (
      <>
      <View style={[styles.container, {}]}>
      <HomeHeader style={{height: headerHeight, opacity:headerOpacity, transform: [{translateY: headerTranslate}]}}/>
          <Animated.ScrollView
            style={[
              {
                flex: 1
              }
            ]}
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle ={styles.scrollView}
            refreshControl = {<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            showsVerticalScrollIndicator={true}
            onScroll={
              Animated.event([
                {nativeEvent: {contentOffset: {y: scrollAnimatedVal}}}
              ],{useNativeDriver:false})
            }
          >
            <View style={[{marginBottom: 12}]}>
              <TouchableOpacity onPress={()=> navigation.navigate('Search')}><Text>wqe</Text></TouchableOpacity>
              <View style={[styles.fakeContent, {backgroundColor: '#222222'}]}/>
              <View style={[styles.fakeContent, {backgroundColor: '#333333'}]}/>
              <View style={[styles.fakeContent, {backgroundColor: '#444444'}]}/>
              <View style={[styles.fakeContent, {backgroundColor: '#555555'}]}/>
            </View>
          </Animated.ScrollView>
        </View>
      </>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingVertical: 0
  },
  fakeContent: {
    height: 250,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
  }
})