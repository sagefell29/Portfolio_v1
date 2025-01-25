import React from 'react';
import ExperienceCard from './ExperienceCard';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { experience } from '../../Data/ComponentData/ExperienceData';

const Experience = () => {
  return (
    <Box
      id="Experience"
      justifyContent="center"
      m={5}
      z-index={0}
      position="relative"
      mb={16}
    >
      <Heading align="center" m={5}>
        Experience
      </Heading>
      <Flex gap={6} flexWrap="wrap" w="full" justifyContent="center">
        {experience.map(ex => {
          return (
            <ExperienceCard
              cert={ex.cert}
              title={ex.title}
              position={ex.position}
              org={ex.org}
              field={ex.field}
              time={ex.time}
              location={ex.location}
            />
          );
        })}
      </Flex>
    </Box>
  );
};

export default Experience;
