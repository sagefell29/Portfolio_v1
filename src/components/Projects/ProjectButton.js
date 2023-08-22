import { Button, Tooltip, Link, useColorMode } from "@chakra-ui/react";
import React from "react";


export const ProjectButton = props => {
    const { colorMode } = useColorMode();
    
    if (!props.link) return null;
    
    return (
      <Tooltip label={props.label}>
        <Button
          bg = 'transparent'
          border="2px"
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