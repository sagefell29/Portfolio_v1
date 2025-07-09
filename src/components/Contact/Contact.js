import { useColorMode, Heading, HStack, Stack, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { SiInstagram, SiLeetcode } from 'react-icons/si';
import { LinkButton } from '../Home/LinkButton';
import { St1, St2 } from '../St1';

const Contact = () => {
  const { colorMode } = useColorMode();

  const contactLinks = [
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/rishi-kaushal-133246212/',
      icon: <FiLinkedin />
    },
    {
      label: 'Mail',
      link: 'mailto: rishi29work@gmail.com',
      icon: <FiMail />
    },
    {
      label: 'Instagram',
      link: 'https://www.instagram.com/friendly_neighbourhood_goblin/',
      icon: <SiInstagram />
    },
    {
      label: 'GitHub',
      link: 'https://github.com/sagefell29',
      icon: <FiGithub />
    },
    {
      label: 'Phone: +91-9410963475',
      link: 'tel:91-9410963475',
      icon: <FiPhone />
    },
    {
      label: 'LeetCode',
      link: 'https://leetcode.com/rishi29kaushal/',
      icon: <SiLeetcode />
    }
  ];

  return (
    <Stack
      id="Contact"
      h="90vh"
      justifyContent="center"
      alignItems="center"
      m={5}
      mt={20}
      zIndex={1}
      position="relative"
      style={colorMode === 'dark' ? St1 : St2}
      borderRadius={7}
      overflow="auto"
      p={4}
    >
      <Box textAlign="center" maxW="100%">
        <Heading align="center" mb={4}>Get in Touch</Heading>
        <Text align="center" px={4} mb={6}>
          Now that you have seen everything I have done, wanna start talking? Get
          in touch at my socials or send a mail, I am always looking for new
          opportunities.
        </Text>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={3}
          maxW="100%"
          overflow="hidden"
        >
          {contactLinks.map(({ label, link, icon }) => (
            <LinkButton
              key={label}
              label={label}
              link={link}
              icon={icon}
            />
          ))}
        </Box>
      </Box>
    </Stack>
  );
};

export default Contact;
