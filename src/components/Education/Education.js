import { Stack, Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { education } from '../../Data/ComponentData/EducationData';
import EducationItem from './EducationItem';

export const Education = () => {
  return (
    <Box
      id="Education"
      justifyContent="center"
      m={5}
      z-index={0}
      position="relative"
      mb={16}
    >
      <Heading align="center" m={5}>
        Education
      </Heading>
      <Stack
        justifyContent="center"
        alignItems="center"
        position="relative"
        gap={3}
      >
        {education.map((Edu) => {
          return (
            <EducationItem
              name={Edu.name}
              logo={Edu.logo}
              degree={Edu.degree}
              stream={Edu.stream}
              date={Edu.date}
              location={Edu.location}
              grade={Edu.grade}
            />
          );
        })}
      </Stack>
    </Box>
  );
};
