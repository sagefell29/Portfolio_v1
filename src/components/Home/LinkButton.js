import {
  IconButton,
  Tooltip,
  useColorMode,
  Link,
  Button,
} from '@chakra-ui/react';
import React from 'react';

export const LinkButton = props => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip label={props.label}>
      <Button
        bg = {colorMode === 'dark' ? '#1A202C' : '#FFFFFF'}
        border="2px"
        // _hover={{ bg: colorMode === 'dark' ? '#3F444E' : '#CACBCD' }}
        as={Link}
        href={`${props.link}`}
        isExternal
        fontSize="xl"
      >
        {props.icon}
      </Button>
    </Tooltip>
  );
};
