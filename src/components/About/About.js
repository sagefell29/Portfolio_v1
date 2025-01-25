import {
  Heading,
  Text,
  VStack,
  Box,
  Divider,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { St1 } from '../St1';
import TimelineItem from './TimelineItem';
import { experience } from '../../Data/ComponentData/ExperienceData';

export const About = () => {
  return (
    <VStack
      m={5}
      id="About"
      mt={20}
      p="5"
      align="center"
      fontSize="16"
      justifyContent="center"
      position="relative"
      borderRadius={7}
      style={St1}
    >
      {/* Normal About Section */}
      <Heading m={5}>About Me</Heading>
      <Divider borderColor="white" w="50px" mb={10} />
      <Text mb="5" align="left" pl="30" pr="30" fontSize="xl">
        Hi, I am <b>Rishi Kaushal</b>, a skilled software engineer with
        expertise in <b>data engineering</b>,<b> full-stack development</b>, and
        a passion for continuous learning and innovation. I hold a degree in
        <b>
          {' '}
          Computer Science Engineering with a specialization in Bioinformatics
        </b>
        . Currently, I am working at AstraZeneca, where I focus on building
        robust data pipelines, creating insightful reports, and working on
        impactful projects across various domains.
      </Text>
      <Text mb="5" align="left" pl="30" pr="30" fontSize="xl">
        With experience in working on advanced frameworks like Apache Airflow,
        AWS cloud infrastructure, PySpark, and modern web development tools like
        .NET, I have honed my problem-solving skills. I am deeply committed to
        applying my knowledge and skills to create innovative, scalable
        solutions. My enthusiasm for research and development is driving me to
        contribute to impactful projects and explore the intersection of
        technology and life sciences.
      </Text>
      <Text mb="5" align="left" pl="30" pr="30" fontSize="xl">
        Beyond my technical skills, I value collaboration, adaptability, and a
        strong growth mindset. I aim to excel in roles that allow me to bridge
        technology with meaningful impact, learning from experienced
        professionals, and pushing the boundaries of software engineering.
      </Text>

      {/* Timeline Section */}
      <Box id="Timeline" w="full" mt={10}>
        <Heading align="center" mb={5}>
          My Career Timeline
        </Heading>
          <VStack spacing={10} align="flex-start" w="full">
            {experience.map((ex, index) => (
              <HStack key={index} w="full" spacing={5} align="center">
                {/* Line pointing from the vertical line to TimelineItem */}
                <Box w="50px" borderBottom="2px solid white" />
                {/* Timeline Item */}
                <TimelineItem
                  title={ex.title}
                  position={ex.position}
                  org={ex.org}
                  field={ex.field}
                  time={ex.time}
                  location={ex.location}
                  index={index}
                />
              </HStack>
            ))}
          </VStack>
      </Box>
    </VStack>
  );
};

export default About;
