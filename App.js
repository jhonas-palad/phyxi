import 'react-native-gesture-handler';
import {SafeAreaView } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
      <SafeAreaView style={[{flex:1}]}>
          <RootNavigator />
      </SafeAreaView>
  );
}