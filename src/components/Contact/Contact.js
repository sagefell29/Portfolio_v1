import { useColorMode, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { SiInstagram, SiLeetcode } from 'react-icons/si';
import { LinkButton } from '../Home/LinkButton';
import { St1, St2 } from '../St1';

const Contact = () => {
  const { colorMode } = useColorMode();

  return (
    <Stack
      id="Contact"
      h="90vh"
      justifyContent="center"
      alignItems="center"
      m={5}
      z-index={1}
      position="relative"
      style={colorMode === 'dark' ? St1 : St2}
      borderRadius={7}
    >
      <Heading align="center">Get in Touch</Heading>
      <Text align="center" pr={10} pl={10}>
        Now that you have seen everything I have done, wanna start talking? Get
        in touch at my socials or send a mail, I am always looking for new
        opportunities.
      </Text>
      <HStack p={5}>
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
          label="Instagram"
          link="https://www.instagram.com/friendly_neighbourhood_goblin/"
          icon={<SiInstagram />}
        />
        <LinkButton
          label="GitHub"
          link="https://github.com/sagefell29"
          icon={<FiGithub />}
        />
        <LinkButton
          label="Phone: +91-9410963475"
          link="tel:91-9410963475"
          icon={<FiPhone />}
        />
        <LinkButton 
          label="LeetCode"
            link="https://leetcode.com/rishi29kaushal/"
            icon={<SiLeetcode />}
        />
      </HStack>
    </Stack>
  );
};

export default Contact;
