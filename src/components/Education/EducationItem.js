import {
  Box,
  Image,
  Text,
  VStack,
  useColorMode,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { St1, St2 } from '../St1';

const EducationItem = props => {
  const { colorMode } = useColorMode();
  return (
    <Box w={{'sm': "100%", 'lg':'2xl'}}>
      <HStack
        p={3}
        style={colorMode === 'dark' ? St1 : St2}
        borderRadius={7}
        opacity="80%"
        _hover={{
          opacity: "100%",
          transition: 'all 0.15s ease-in-out',
        }}
      >
        <Image
          style={{ width: '60px' }}
          borderRadius="10px"
          src={props.logo}
          alt={props.name}
          mr={5}
        />
        <VStack alignItems="left" spacing={0} p={1}>
          <Text fontSize="md" fontWeight="bold" pb={3} pl={1}>
            {props.name}
          </Text>
          <Text fontSize="sm" pl={1}>
            <b>Degree Name:</b> {props.degree}
          </Text>
          <Text fontSize="sm" pl={1}>
            <b>Degree Branch:</b> {props.stream}
          </Text>
          <Text fontSize="sm" pl={1}>
            <b>Time Duration:</b> {props.date}
          </Text>
          <Text fontSize="sm" pl={1}>
            <b>Location:</b> {props.location}
          </Text>
          <Text fontSize="sm" pl={1}>
            <b>{props.grade > 10
              ? `Percentage:`
              : `CGPA`}
              </b>
            {props.grade > 10
              ? ` ${props.grade}%`
              : ` ${props.grade}`}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default EducationItem;
