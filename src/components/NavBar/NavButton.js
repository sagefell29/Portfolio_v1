import { Button, Link, Tooltip } from '@chakra-ui/react';
import React from 'react';

export const NavButton = props => {
  return (
    <Tooltip label={props.label}>
      <Button
        fontSize="lg"
        as={Link}
        href={`${props.link}`}
        bg="transparent"
        // _hover={{
        //   lg: {
        //     transform: 'scale(1.2)',
        //     boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.75)',
        //     transition: 'all 0.1s ease-in-out',
        //   },
        // }}
      >
        {' '}
        {props.icon}{' '}
      </Button>
    </Tooltip>
  );
};
