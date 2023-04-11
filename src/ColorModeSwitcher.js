import React from 'react';
import { useColorMode, useColorModeValue, IconButton, Tooltip } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

export const ColorModeSwitcher = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const text = useColorModeValue('Dark', 'Light');
  const SwitchIcon = useColorModeValue(FiMoon, FiSun);

  return (
    <Tooltip arrow label={`Switch to ${text} mode`}>
    <IconButton
      bg={colorMode==="dark"?"#29232e":"#F5F5F5"} 
        _hover={{
          transform: 'scale(1.4)',
          // boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.75)',
          transition: 'all 0.1s ease-in-out'
        }}
      variant="ghost"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
    />
    </Tooltip>
  );
};
