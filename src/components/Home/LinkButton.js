import { Tooltip, useColorMode, Link, Button } from '@chakra-ui/react';
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
        bg={colorMode === 'dark' ? '#1A202C' : '#FFFFFF'}
        color='white'
        border="2px"
        // _hover={{ bg: colorMode === 'dark' ? '#3F444E' : '#CACBCD' }}
        as={Link}
        href={`${props.link}`}
        isExternal
        fontSize={{ md: 'xl', sm: 'sm' }}
        style={{
          backdropFilter: 'blur(3px)',
          backgroundColor: 'transparent',
        }}
        opacity='60%'
        _hover={{
          opacity: '100%',
          transition: 'all 0.15s ease-in-out',
        }}
      >
        {props.icon}
      </Button>
    </Tooltip>
  );
};
