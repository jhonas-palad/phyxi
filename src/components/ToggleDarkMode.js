import { HStack, Text, Switch, useColorMode } from 'native-base';
import React from 'react';

const ToggleDarkMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <HStack space={10} alignItems="center" style={{backgroundColor:'blue'}}>
        <Text>Dark</Text>
        <Switch
          isChecked={colorMode === "light"}
          onToggle={toggleColorMode}
        />
        <Text>Light</Text>
      </HStack>
    );
}

export default ToggleDarkMode