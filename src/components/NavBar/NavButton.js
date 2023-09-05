import { Button, Link, Tooltip, useColorMode } from '@chakra-ui/react';
import React from 'react';

export const NavButton = (props) => {
  const { colorMode } = useColorMode();
  const backgroundColor = colorMode === 'light' ? 'transparent' : 'transparent'; // Define the background color based on the color mode

  return (
    <Tooltip label={props.label}>
      <Button
        fontSize={{ md: 'lg', xs: 'xs' }}
        as={Link}
        href={`${props.link}`}
        bg={backgroundColor}
        transition="background-color 0.2s ease" // Add a transition for the background color
        _hover={{
          bg: colorMode === 'light' ? 'rgba(128, 128, 128, 0.2)' : 'rgba(0, 0, 0, 0.3)', // Background color with 50% opacity on hover
        }}
      >
        {' '}
        {props.icon}{' '}
      </Button>
    </Tooltip>
  );
};
