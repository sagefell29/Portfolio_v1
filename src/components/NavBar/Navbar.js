import {
  HStack,
  useColorMode
} 
from '@chakra-ui/react';
import {
  FiHome,
  FiPhone,
  FiCodesandbox,
  FiAward,
  FiBook,
} 
from 'react-icons/fi';
import { AiOutlineQuestion } from 'react-icons/ai';
import { NavButton } from './NavButton';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <HStack w="full" justifyContent="center">
      <HStack
        spacing="1"
        bg={colorMode==="dark"?"#29232e":"#F5F5F5"}
        style={{ position: 'fixed', bottom: '15px' }}
        borderRadius="7px"
        zIndex="1"
      >
        <NavButton label="Home" icon={<FiHome />} />
        <NavButton label="About" icon={<AiOutlineQuestion />} />
        <NavButton label="Project" icon={<FiCodesandbox />} />
        <NavButton label="Achievments and Certifications" icon={<FiAward />} />
        <NavButton label="Educational Background" icon={<FiBook />} />
        <NavButton label="Contact Me" icon={<FiPhone />} />
        <ColorModeSwitcher /> 
      </HStack>
    </HStack>
  );
};

export default Navbar;
