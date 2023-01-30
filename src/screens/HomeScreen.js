import React from 'react';
import SnapHeader from '../components/SnapHeader';
import { 
  Animated,
  View, 
  Text,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  PanResponder
} from 'react-native';


import { useNavigation } from '@react-navigation/native';
import HomeHeader from '../components/HomeHeader';
import { withSnap } from '../components/SnapHeader';

const HeaderWithSnap = withSnap({startValue: 0, endValue: 1, duration: 100, height: 60})(HomeScreen);

export const HomeScreen = (props) => {
  const navigation = useNavigation();
  React.useEffect(()=> {
    navigation.setOptions({
      title: 'All services',
      headerShown: true,
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
      <View style={[styles.container, {}]}>
          
          <Animated.ScrollView
            style={[
              {
                flex: 1
              }
            ]}
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle ={styles.scrollView}
            refreshControl = {<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          >
            <HeaderWithSnap/>
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