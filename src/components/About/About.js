import { Box, Heading, Text, VStack, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { St1, St2 } from '../St1';

export const About = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      m={5}
      id="About"
      mb={20}
      z-index={0}
      position="relative"
      textAlign={'center'}
    >
      <Heading m={5} z-index={2}>
        About Me
      </Heading>
      <VStack
        m="5"
        p="5"
        align="center"
        fontSize="16"
        justifyContent="center"
        position="relative"
        borderRadius={7}
        style={colorMode === 'dark' ? St1 : St2}
      >
        <Text align="justify" pl="30" pr="30" fontSize="xl" mb={5}>
          Hi, I'm <b>Rishi Kaushal</b>, an aspiring software engineer. I'm a{' '}
          <b>Computer Science Engineering senior</b> at <b>VIT Vellore</b>. My
          journey through the world of software has been dynamic, filled with
          diverse experiences and endless curiosity. I thrive on opportunities
          to innovate and expand my horizons.
        </Text>

        <Text align="justify" pl="30" pr="30" fontSize="xl" pb={5}>
          With a strong foundation in{' '}
          <b>C++, Python, JavaScript, and the MERN Stack</b>, my academic
          journey has honed my skills. I'm passionate about the vast
          possibilities that programming offers, and I'm eager to transform this
          passion into a fulfilling career.
        </Text>

        <Text align="justify" pl="30" pr="30" fontSize="xl" pb={5}>
          Beyond my technical abilities, I possess{' '}
          <b>strong communication, teamwork, and problem-solving skills</b>.
          Collaborative projects and internships have equipped me to tackle
          complex challenges effectively. I firmly believe that these skills are
          pivotal in the software industry and I'm committed to their continuous
          refinement.
        </Text>

        <Text align="justify" pl="30" pr="30" fontSize="xl">
          As a fresh entrant in software engineering, I'm excited to apply my
          knowledge and practical experience to real-world projects. With
          unwavering commitment to learning, a passion for software engineering,
          and an open mindset for growth, I'm poised to excel in any software
          engineering role.
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
