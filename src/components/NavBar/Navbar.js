import { HStack, useColorMode } from '@chakra-ui/react';
import {
  FiHome,
  FiPhone,
  FiCodesandbox,
  FiAward,
  FiBook,
} from 'react-icons/fi';
import { AiOutlineQuestion } from 'react-icons/ai';
import { NavButton } from './NavButton';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack w="full" justifyContent="center">
      <HStack
        spacing="1"
        m={5}
        bg={colorMode === 'dark' ? '#29232e' : '#F5F5F5'}
        style={{ position: 'fixed', bottom: '15px' }}
        borderRadius="7px"
        zIndex={2}
        _hover={{ lg: {
          transform: 'scale(1.1)',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.75)',
          transition: 'all 0.1s ease-in-out'}
        }}
      >
        <NavButton label="Home" icon={<FiHome />} link="#Home" />
        <NavButton label="About" icon={<AiOutlineQuestion />} link="#About" />
        <NavButton label="Project" icon={<FiCodesandbox />} link="#Projects" />
        <NavButton
          label="Achievments and Certifications"
          icon={<FiAward />}
          link="#Achievements"
        />
        <NavButton label="Educational Background" icon={<FiBook />} link="" />
        <NavButton label="Contact Me" icon={<FiPhone />} link="#Contact" />
        <ColorModeSwitcher />
      </HStack>
    </HStack>
  );
};

export default Navbar;
