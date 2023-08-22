import { HStack, useColorMode } from '@chakra-ui/react';
import {
  FiHome,
  FiPhone,
  FiCodesandbox,
  FiAward,
  FiBook,
  FiBriefcase,
} from 'react-icons/fi';
import { AiOutlineQuestion } from 'react-icons/ai';
import { NavButton } from './NavButton';
import { St1, St2 } from '../St1';
// import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const Navbar = () => {
  const { colorMode } = useColorMode();
  return (
    <HStack w="full" justifyContent="center">
      <HStack
        spacing="1"
        m={5}
        borderRadius="7px"
        zIndex={2}
        style={{
          position: 'fixed',
          bottom: '15px',
          ...(colorMode === 'dark' ? St1 : St2),
        }}
        _hover={{
          lg: {
            transform: 'scale(1.1)',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.75)',
            transition: 'all 0.1s ease-in-out',
          },
        }}
      >
        <NavButton label="Home" icon={<FiHome />} link="#Home" />
        <NavButton label="About" icon={<AiOutlineQuestion />} link="#About" />
        <NavButton
          label="Experience"
          icon={<FiBriefcase />}
          link="#Experience"
        />
        <NavButton label="Projects" icon={<FiCodesandbox />} link="#Projects" />
        <NavButton
          label="Achievements and Certifications"
          icon={<FiAward />}
          link="#Achievements"
        />
        <NavButton
          label="Educational Background"
          icon={<FiBook />}
          link="#Education"
        />
        <NavButton label="Contact Me" icon={<FiPhone />} link="#Contact" />
        {/* <ColorModeSwitcher /> */}
      </HStack>
    </HStack>
  );
};

export default Navbar;
