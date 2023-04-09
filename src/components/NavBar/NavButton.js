import { Button, Tooltip, useColorMode } from '@chakra-ui/react';
import React from 'react';


export const NavButton = props => {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Tooltip label={props.label}>
      <Button 
      bg={colorMode==="dark"?"#29232e":"#F5F5F5"} 
        _hover={
          {bg:colorMode==="dark"?"#3F444E":"#CACBCD"}
        }
        fontSize="lg"
      >
        {' '}
        {props.icon}{' '}
      </Button>
    </Tooltip>
  );
};
