import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

const St1 = {
  backgroundImage:
    'linear-gradient(to bottom right, rgba(255,255,255,1), rgba(255,255,255,0.8))',
  backdropFilter: 'blur(3px)',
  boxShadow: '10px 10px 10px rgba(30,30,30,0.5)',
  backgroundColor: "transparent",
  opacity: '90%'
};

const MyTooltip = ({ label, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Box 
      position="relative" 
      display="inline-block" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      {React.cloneElement(children, {
        style: {
          opacity: isHovered ? 1 : 0.7,
          transition: 'opacity 0.2s, transform 0.2s',
          cursor: 'pointer',
        }
      })}
      
      {isHovered && (
        <Box
          position="absolute"
          bottom="110%" 
          left="50%" 
          transform="translateX(-50%)"
          style={St1}
          color="black"
          p={1}
          borderRadius="4px"
          boxShadow="sm"
          zIndex={2}
        >
          <Text fontSize="sm">{label}</Text>
        </Box>
      )}
    </Box>
  );
};

export default MyTooltip;
