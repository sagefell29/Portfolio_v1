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
      mt={20}
      position="relative"
      mb={16}
    >
      <Heading align="center" m={5}>
        My Educational Background
      </Heading>
      <Stack
        justifyContent="center"
        align="center"
        spacing={5}
        wrap="wrap"
      >
        {education.map((edu, index) => (
          <EducationItem key={index} {...edu} />
        ))}
      </Stack>
    </Box>
  );
};

export default Education;
