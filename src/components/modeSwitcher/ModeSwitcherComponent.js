import { HStack, useColorMode } from '@chakra-ui/react';
import ColorModeSwitcher from './ColorModeSwitcher';
import { St1, St2 } from '../St1';

export const ModeSwitcherComponent = props => {
    const { colorMode } = useColorMode();
    return (
    <HStack
      spacing="1"
      m={5}
      borderRadius="7px"
      zIndex={2}
      style={{
        position: 'fixed',
        top: '0px',
        left: '0px',
        ...(colorMode === 'dark' ? St1 : St2),
        backdropFilter: 'blur(5px)',
      }}
    >
      <ColorModeSwitcher />
    </HStack>
  );
};
