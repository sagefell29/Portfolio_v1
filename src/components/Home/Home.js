import { Image, Text, HStack, Stack, VStack, Heading } from '@chakra-ui/react';
import { FiLinkedin, FiFacebook, FiGithub, FiMail } from 'react-icons/fi';
import { SiLeetcode, SiInstagram } from 'react-icons/si';
import React from 'react';
import P from '../../Data/Images/Pro_p.webp';
import { TypeWriter1, TypeWriter2 } from './Typed';
import { LinkButton } from './LinkButton';
import Transition from './Transition';

export const Home = () => {
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
        m="5"
        p="15"
      >
        <Image
          src={P}
          h="30vh"
          alt="Rishi Kaushal's Profile Pic"
          borderRadius="25"
        />
        <Stack
          p="5"
          align="center"
          w="full"
          borderRadius={7}
        >
          <Heading>
            <HStack>
              <Transition />
            </HStack>
          </Heading>
          <Heading fontSize="3xl" fontWeight="750" m={0}>
            I am Rishi.
          </Heading>
          <Text fontSize="xl">
            <TypeWriter1 />
          </Text>
        </Stack>
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
