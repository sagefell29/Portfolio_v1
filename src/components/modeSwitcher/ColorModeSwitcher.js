import React from 'react';
import {
  useColorMode,
  useColorModeValue,
  Tooltip,
  Button,
} from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('Dark', 'Light');
  const SwitchIcon = useColorModeValue(FiMoon, FiSun);

  return (
    <Tooltip arrow label={`Switch to ${text} mode`}>
      <Button
        bg='transparent'
        onClick={toggleColorMode}
      ><SwitchIcon /></Button>
    </Tooltip>
  );
};

export default ColorModeSwitcher;
