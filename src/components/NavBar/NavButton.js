import { Button, Tooltip, useColorMode } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const NavButton = ({ label, icon, path }) => {
  const { colorMode } = useColorMode();
  const activeStyle = { color: 'teal' };

  return (
    <Tooltip label={label}>
      <Button
        as={NavLink}
        to={path}
        exact="true"
        color='#0a696c'
        bg="#29232e"
        _activeLink={activeStyle}
        fontSize={['sm', 'md', 'lg']}
        p={['2', '4', '6']}
        w={['auto', '50px', '100px']}
        h={['40px', '50px', '60px']} 
        justifyContent="center"
        alignItems="center"
      >
        {icon}
      </Button>
    </Tooltip>
  );
};
