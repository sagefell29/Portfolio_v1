import { HStack } from '@chakra-ui/react';
import {
  FiHome,
  FiPhone,
  FiCodesandbox,
  FiAward,
  FiBook,
  FiTerminal,
} from 'react-icons/fi';
import { AiOutlineQuestion } from 'react-icons/ai';
import { NavButton } from './NavButton'; // You can use your existing NavButton component

const Navbar = () => {

  return (
      <HStack
        spacing={0}
        justify="space-evenly"
        w="100%"
        align="center"
        flexWrap="wrap"
        position="fixed"
        top={0}
        left={0}
        zIndex={1}
        bg={'#29232e'}
        boxShadow="lg"
      >
        <NavButton label="Home" icon={<FiHome />} path="/" />
        <NavButton label="About Me" icon={<AiOutlineQuestion />} path="/about" />
        <NavButton label="Projects" icon={<FiCodesandbox />} path="/projects" />
        <NavButton
          label="Achievements"
          icon={<FiAward />}
          path="/achievements"
        />
        <NavButton label="Education" icon={<FiBook />} path="/education" />
        <NavButton label="Skills" icon={<FiTerminal />} path="/skills" />
        <NavButton label="Contact Me" icon={<FiPhone />} path="/contact" />
      </HStack>
  );
};

export default Navbar;
