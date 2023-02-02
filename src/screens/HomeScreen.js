import React from 'react';
import { 
  Animated,
  View, 
  StyleSheet,
  RefreshControl,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import HomeHeader from '../components/HomeHeader';
import { getHeaderTitle } from '@react-navigation/elements';
export const HomeScreen = (props) => {
    const navigation = useNavigation();
    const animatedValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(()=> {
      navigation.setOptions({
        title: 'Home',
        headerShown: true,
        header: ({navigation, route, options, back}) => {
          const title = getHeaderTitle(options, route.name);
          return <HomeHeader title={title}/>
        }
      });
    }, []);
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() =>{
        setRefreshing(false);
      }, 2000);
    }, []); 

    return (
      <>
        <View  style={[styles.container, {}]}>
            <Animated.ScrollView
              style={[
                {
                  flex: 1
                }
              ]}
              contentInsetAdjustmentBehavior="automatic"
              contentContainerStyle ={styles.scrollView}
              refreshControl = {<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
              onScroll={Animated.event([{nativeEvent: {contentOffset: {y: animatedValue}}}], {useNativeDriver:false})}
            >
              <View style={[{marginBottom: 12}]}>
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

// export const HeaderWithSnap = withSnap({startValue: 0, endValue: Dimensions.get('window').height , duration: 100})(HomeScreen);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
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