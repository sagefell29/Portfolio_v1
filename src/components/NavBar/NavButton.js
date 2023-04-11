import { Button, Link, Tooltip, useColorMode } from '@chakra-ui/react';
import React from 'react';

export const NavButton = props => {
  const { colorMode } = useColorMode();
  return (
    <Tooltip label={props.label}>
      <Button
        bg={colorMode === 'dark' ? '#29232e' : '#F5F5F5'}
        fontSize="lg"
        as={Link}
        href={`${props.link}`}
        _hover={{ lg:
          {transform: 'scale(1.2)',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.75)',
          transition: 'all 0.1s ease-in-out'}
        }}
      >
        {' '}
        {props.icon}{' '}
      </Button>
    </Tooltip>
  );
};
