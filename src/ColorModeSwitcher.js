import React from 'react';
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Tooltip,
  Button,
} from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

const ColorModeSwitcher = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const text = useColorModeValue('Dark', 'Light');
  const SwitchIcon = useColorModeValue(FiMoon, FiSun);

  return (
    <Tooltip arrow label={`Switch to ${text} mode`}>
      <Button
        bg={colorMode === 'dark' ? '#1A202C' : '#FFFFFF'}
        border="2px"
        fontSize={{md: "xl", sm:"sm"}}
        variant="ghost"
        onClick={toggleColorMode}
      ><SwitchIcon /></Button>
    </Tooltip>
  );
};

export default ColorModeSwitcher;
