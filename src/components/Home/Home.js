import {
  Image,

  Text,
  HStack,
  useColorMode,
  Box,
  VStack
} from '@chakra-ui/react';
import { FiLinkedin, FiFacebook, FiGithub, FiMail } from 'react-icons/fi';
import { SiLeetcode,  SiInstagram } from 'react-icons/si';
import React from 'react';
import P from '../../Data/Images/Pro_p.jpg';
import { TypeWriter } from './Typed';
import { LinkButton } from './LinkButton';

export const Home = () => {
  return (
    <VStack p="5" w="full" h="100vh" justifyContent="center">
      <Box>
        <Image
          src={P}
          h="30vh"
          alt="Rishi Kaushal's Profile Pic"
          borderRadius="25"
        />
        </Box>
        <Box p="5" align="center">
          <Text fontSize="xl" fontWeight="750">
            Hey, I am Rishi.👋
            </Text>
          <Text fontSize="xl">
            <TypeWriter/>
          </Text>
        </Box>
        <HStack justifyContent="center" 
        borderRadius="7px"
        w="fit-content">
            <LinkButton label="GitHub" link="https://github.com/sagefell29" icon={<FiGithub />}/>
            <LinkButton label="LinkedIn" link="https://www.linkedin.com/in/rishi-kaushal-133246212/" icon={<FiLinkedin />} />
            <LinkButton label="Mail" link="mailto: rishi29work@gmail.com" icon={<FiMail />} />
            <LinkButton label="LeetCode" link="https://leetcode.com/rishi29kaushal/" icon={<SiLeetcode />} />
            <LinkButton label="Instagram" link="" icon={<SiInstagram />} />
            <LinkButton label="Facebook" link="https://www.facebook.com/rishi.kaushal.969/" icon={<FiFacebook />} />
        </HStack>
    </VStack>
  );
};
