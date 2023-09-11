import React from 'react';
import { St1, St2 } from '../St1';
import { Box, Text, Image, Stack, useColorMode } from '@chakra-ui/react';

const ExperienceCard = props => {
  const { colorMode } = useColorMode();

  return (
    <Box w={{ lg: '35vw', sm: 'sm' }}>
      <Stack
        p={3}
        style={colorMode === 'dark' ? St1 : St2}
        borderRadius={7}
        opacity='65%'
        _hover={{
          opacity:'100%',
          transition: 'all 0.15s ease-in-out',
        }}
      >
        <Image borderRadius="10px" src={props.cert} alt={props.title} />
        <Stack alignItems="left" spacing={2} p={1}>
          <Text fontSize="md" fontWeight="bold" p={3}>
            {props.title}
          </Text>
          <Text fontSize="sm" pl={1}>
            <b>Position:</b> {props.position}
          </Text>
          <Text fontSize="sm" pl={1}>
            <b>Organization:</b> {props.org}
          </Text>
          <Text fontSize="sm" pl={1}>
            <b>Topic:</b> {props.field}
          </Text>
          <Text fontSize="sm" pl={1}>
            <b>Time Duration:</b> {props.time}
          </Text>
          <Text fontSize="sm" pl={1}>
            <b>Location:</b> {props.location}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ExperienceCard;
