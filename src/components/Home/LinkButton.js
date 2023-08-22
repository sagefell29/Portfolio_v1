import { Tooltip, Link, Button } from '@chakra-ui/react';
import React from 'react';

export const LinkButton = props => {
  return (
    <Tooltip label={props.label}>
      <Button
        bg="transparent"
        border="2px"
        as={Link}
        href={`${props.link}`}
        isExternal
        fontSize="lg"
      >
        {props.icon}
      </Button>
    </Tooltip>
  );
};
