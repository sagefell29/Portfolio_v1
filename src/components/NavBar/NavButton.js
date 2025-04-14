import { Button, Tooltip } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const NavButton = ({ label, icon, path }) => {
  const activeStyle = { color: 'white' };

  return (
    <Tooltip label={label}>
      <Button
        as={NavLink}
        to={path}
        exact="true"
        _activeLink={activeStyle}
        color="#0a696c"
        bg="#29232e"
        fontSize={['sm', 'md', 'lg']}
        p={['2', '4', '6']}
        w={['auto', '50px', '100px']}
        h={['40px', '50px', '60px']}
        justifyContent="center"
        alignItems="center"
        _hover={{
          bg: '#29232e',
          color: '#00ffff',
          boxShadow: '0 0 10px rgba(0, 255, 255, 0.2)',
        }}
        transition="all 0.2s ease-in-out"
      >
        {icon}
      </Button>
    </Tooltip>
  );
};
