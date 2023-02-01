import 'react-native-gesture-handler';
import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import {Box, NativeBaseProvider} from 'native-base';

export default function App() {

  return (
    <NativeBaseProvider>
      <Box flex={1} safeAreaX _dark={{bg: '#334155'}} _light={{bg:'info.200'}}>
          <RootNavigator />
      </Box>
    </NativeBaseProvider>
      
  );
}