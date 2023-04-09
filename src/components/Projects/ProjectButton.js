import { Button, Tooltip, Link, useColorMode } from "@chakra-ui/react";
import React from "react";


export const ProjectButton = props => {
    const { colorMode, toggleColorMode } = useColorMode();
    
    if (!props.link) return null;
    
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
          m={5}
        >
          {props.icon}
        </Button>
      </Tooltip>
    );
  };