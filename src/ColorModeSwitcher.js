import React from 'react';
import { useColorMode, useColorModeValue, IconButton, Tooltip } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

export const ColorModeSwitcher = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const text = useColorModeValue('Dark', 'Light');
  const SwitchIcon = useColorModeValue(FiMoon, FiSun);

  return (
    <Tooltip label={`Switch to ${text} mode`}>
    <IconButton
      bg={colorMode==="dark"?"#29232e":"#F5F5F5"} 
        _hover={
          {bg:colorMode==="dark"?"#3F444E":"#CACBCD"}
        }
      variant="ghost"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
    />
    </Tooltip>
  );
};
