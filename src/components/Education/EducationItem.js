import {
  Box,
  Image,
  Text,
  VStack,
  useColorMode,
  HStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { St1, St2 } from '../St1';

const EducationItem = ({ name, logo, degree, stream, date, location, grade }) => {
  const { colorMode } = useColorMode();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box position="relative" maxW="550px" w="full">
      {/* Background overlay for expanded mode */}
      {isExpanded && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.7)"
          backdropFilter="blur(8px)"
          zIndex="1"
          onClick={() => setIsExpanded(false)} // Collapse card on clicking background
        />
      )}

      <HStack
        p={4}
        style={St1}
        borderRadius="10px"
        position={isExpanded ? 'fixed' : 'relative'}
        top={isExpanded ? '50%' : 'auto'}
        left={isExpanded ? '50%' : 'auto'}
        transform={isExpanded ? 'translate(-50%, -50%) scale(1.2)' : 'none'}
        boxShadow="lg"
        zIndex={isExpanded ? 10 : 0}
        transition="all 0.3s ease"
        textColor='white'
        w="auto"
        onClick={() => setIsExpanded(true)} // Trigger expanded mode
        opacity='80%'
        _hover={{
          opacity: '100%',
          transition: 'all 0.15s ease-in-out',
        }}
      >
        <Image
          w="60px"
          borderRadius="10px"
          src={logo}
          alt={name}
          mr={4}
        />
        <VStack align="start" spacing={1} textColor='white'>
          <Text fontSize="lg" fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="sm"><b>Degree:</b> {degree}</Text>
          <Text fontSize="sm"><b>Branch:</b> {stream}</Text>
          <Text fontSize="sm"><b>Duration:</b> {date}</Text>
          <Text fontSize="sm"><b>Location:</b> {location}</Text>
          <Text fontSize="sm">
            <b>
              {grade > 10 ? `Percentage:` : `CGPA:`}
            </b> {grade > 10 ? `${grade}%` : `${grade}`}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default EducationItem;
