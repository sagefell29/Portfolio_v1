import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  Image,
  Text,
  Box,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { St1 } from '../St1';

export const AchievementCard = props => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box position="relative">
      {/* Overlay to apply blur and dim background */}
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
          onClick={() => setIsExpanded(false)} 
        />
      )}

      <Card
        m="5"
        p="5"
        zIndex={isExpanded ? '10' : '0'}
        w={isExpanded ? '70vw' : { lg: '35vw', sm: 'sm' }}
        maxWidth="90vw"
        maxHeight="90vh"
        overflowY="auto"
        position={isExpanded ? 'fixed' : 'relative'}
        top={isExpanded ? '50%' : 'auto'}
        left={isExpanded ? '50%' : 'auto'}
        transform={isExpanded ? 'translate(-50%, -50%)' : 'none'}
        transition="all 0.3s ease"
        style={St1}
        opacity="80%"
        _hover={{
          opacity: '100%',
          transition: 'all 0.15s ease-in-out',
        }}
        onClick={() => !isExpanded && setIsExpanded(true)} // Only expand when not already expanded
      >
        <CardHeader>
          <Heading align="center">{props.title}</Heading>
        </CardHeader>
        <Divider />
        <CardBody>
          <Image
            src={props.img}
            alt={`${props.title}'s Image`}
            mb={6}
            maxWidth="100%" // Ensure image scales with card size
            maxHeight="300px" // Prevent the image from growing too large
            objectFit="contain"
            mx="auto"
          />
          <Text dangerouslySetInnerHTML={{ __html: props.text }} />
        </CardBody>
        <Divider />
      </Card>
    </Box>
  );
};
