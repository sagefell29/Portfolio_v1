import React, {useState} from 'react';
import { Box, Text, Image, Stack} from '@chakra-ui/react';

const ExperienceCard = props => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box w={{ lg: '35vw', sm: 'sm' }}>
    
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
              onClick={() => setIsExpanded(false)} // Collapse card when clicking overlay
            />
          )}

      <Stack
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
                opacity="80%"
                _hover={{
                  opacity: '100%',
                  transition: 'all 0.15s ease-in-out',
                }}
                onClick={() => !isExpanded && setIsExpanded(true)}
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
