import {
  Image,
  Text,
  HStack,
  useColorMode,
  Box,
  VStack,
} from '@chakra-ui/react';
import { FiLinkedin, FiFacebook, FiGithub, FiMail } from 'react-icons/fi';
import { SiLeetcode, SiInstagram } from 'react-icons/si';
import React from 'react';
import P from '../../Data/Images/Pro_p.jpg';
import { TypeWriter } from './Typed';
import { LinkButton } from './LinkButton';
import { St1, St2 } from '../St1';

export const Home = () => {
  const { colorMode } = useColorMode();

  return (
    <VStack
      id="Home"
      m="5"
      h="100vh"
      justifyContent="center"
      z-index={1}
      position="relative"
    >
      <VStack
        // style={colorMode === 'dark' ? St1 : St2}
        m="5"
        p="15"
      >
        <Box>
          <Image
            src={P}
            h="30vh"
            alt="Rishi Kaushal's Profile Pic"
            borderRadius="25"
          />
        </Box>
        <Box
          p="5"
          align="center"
          // style={colorMode === 'dark' ? St1 : St2}
          w="full"
          borderRadius={7}
        >
          <Text fontSize="xl" fontWeight="750">
            Hey, I am Rishi.👋
          </Text>
          <Text fontSize="xl">
            <TypeWriter />
          </Text>
        </Box>
        <HStack justifyContent="center" borderRadius="7px" w="fit-content">
          <LinkButton
            label="GitHub"
            link="https://github.com/sagefell29"
            icon={<FiGithub />}
          />
          <LinkButton
            label="LinkedIn"
            link="https://www.linkedin.com/in/rishi-kaushal-133246212/"
            icon={<FiLinkedin />}
          />
          <LinkButton
            label="Mail"
            link="mailto: rishi29work@gmail.com"
            icon={<FiMail />}
          />
          <LinkButton
            label="LeetCode"
            link="https://leetcode.com/rishi29kaushal/"
            icon={<SiLeetcode />}
          />
          <LinkButton label="Instagram" link="" icon={<SiInstagram />} />
          <LinkButton
            label="Facebook"
            link="https://www.facebook.com/rishi.kaushal.969/"
            icon={<FiFacebook />}
          />
        </HStack>
      </VStack>
    </VStack>
  );
};
