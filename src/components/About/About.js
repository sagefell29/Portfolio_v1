import { Heading, Text, VStack, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { St1, St2 } from '../St1';

export const About = () => {
  const { colorMode } = useColorMode();
  const width = window.innerwidth;

  return (
    <VStack m={5} id="About">
      <VStack
        m="5"
        p="5"
        align="center"
        fontSize="16"
        justifyContent="center"
        z-index={1}
        position="relative"
        borderRadius={7}
        style={colorMode === 'dark' ? St1 : St2}
      >
        <Heading m={5}>About Me</Heading>
        <Text m="5" align="left" pl="30" pr="30" fontSize="xl">
          Hey, this is <b>Rishi Kaushal</b>, an Aspiring software engineer. I am
          currently a <b>Sophomore at VIT Vellore</b> in the branch{' '}
          <b>Computer Science Engineering with Bioinformatics.</b> I have worked
          extensively in various domains of the software development field and
          am always on the lookout for new opportunities to learn and innovate.
        </Text>
        {/* {width>{992} && <Text m="5" align="left" pl="30" pr="30" fontSize="xl">
        Throughout my academic career, I have gained <b>hands-on experience</b>{' '}
        in various programming languages and technologies, including Java,
        Python, JavaScript, and React. I have always had a{' '}
        <b>strong interest</b> in computer science and have been fascinated by
        the endless possibilities that programming offers. This interest led me
        to pursue my degree and I am now eager to{' '}
        <b>turn my passion into a rewarding career.</b>
      </Text>}
      {width>'992px' && <Text m="5" align="left" pl="30" pr="30" fontSize="xl">
        In addition to my technical skills, I possess{' '}
        <b>strong communication, teamwork, and problem-solving skills.</b> I
        have honed these skills through various group projects and internships,
        where I have had the opportunity to work collaboratively with others to
        solve complex problems. I believe that effective communication,
        collaboration, and problem-solving are essential skills for success in
        the software industry and I am{' '}
        <b>committed to continuing to develop and refine these skills.</b>
      </Text>} */}
        <Text m="5" align="left" pl="30" pr="30" fontSize="xl">
          As a fresher in the software engineering industry, I am{' '}
          <b>
            eager to apply my technical knowledge and practical experience to
            real-world projects.
          </b>{' '}
          I possess strong technical and non-technical skills, am committed to
          continuous learning and growth, and am dedicated to working
          collaboratively to solve complex problems. I believe that my passion
          for software engineering and my eagerness to learn and grow make me a{' '}
          <b>strong candidate for any software engineering role.</b>
        </Text>
      </VStack>
    </VStack>
  );
};

export default About;
