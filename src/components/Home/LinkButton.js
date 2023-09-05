import { Tooltip, Link, Button, useColorMode } from '@chakra-ui/react';
import React from 'react';

export const LinkButton = props => {
  const { colorMode } = useColorMode();
  const borderColor = colorMode === 'light' ? 'black' : 'white';
  if (!props.link) {
    return null;
  }

  return (
    <Tooltip label={props.label}>
      <Button
        fontSize={{ md: 'lg', xs: 'xs' }}
        bg="transparent"
        border = "2px solid transparent"
        as={Link}
        href={`${props.link}`}
        isExternal
        _hover={{
          border: `2px solid ${borderColor}`, // Use the calculated border color on hover
        }}
      >
        {props.icon}
      </Button>
    </Tooltip>
  );
};
