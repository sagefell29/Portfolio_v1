import React from "react";
import { Box, HStack, Text, useBreakpointValue, VStack } from "@chakra-ui/react";

const TimelineItem = ({ title, position, org, time, location, index, isMobile }) => {
  const breakpointValue = useBreakpointValue({ base: true, md: false });
  const isMobileView = isMobile !== undefined ? isMobile : breakpointValue;

  // Desktop version with enhanced styling
  if (!isMobileView) {
    return (
      <Box
        bg="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(10px)"
        borderRadius="lg"
        p={6}
        border="1px solid rgba(255, 255, 255, 0.2)"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        transition="all 0.3s ease"
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
          borderColor: "rgba(255, 255, 255, 0.4)"
        }}
        position="relative"
        flex="1"
      >
        {/* Timeline dot */}
        <Box
          position="absolute"
          left="-8px"
          top="50%"
          transform="translateY(-50%)"
          w="16px"
          h="16px"
          bg="white"
          borderRadius="full"
          border="3px solid rgba(255, 255, 255, 0.8)"
          boxShadow="0 0 0 4px rgba(255, 255, 255, 0.2)"
        />
        
        <VStack align="start" spacing={3}>
          <Box>
            <Text 
              fontSize="xl" 
              fontWeight="bold" 
              color="white"
              mb={2}
            >
              {title}
            </Text>
            <Text 
              fontSize="sm" 
              fontWeight="bold" 
              color="white"
              mb={3}
            >
              {position}
            </Text>
          </Box>
          
          <VStack align="start" spacing={2} w="full">
            <HStack spacing={2} align="center">
              <Text fontSize="sm" color="rgba(255, 255, 255, 0.8)" fontWeight="medium">
                Organization:
              </Text>
              <Text fontSize="sm" color="white">
                {org}
              </Text>
            </HStack>
            
            <HStack spacing={2} align="center">
              <Text fontSize="sm" color="rgba(255, 255, 255, 0.8)" fontWeight="medium">
                Duration:
              </Text>
              <Text fontSize="sm" color="white">
                {time}
              </Text>
            </HStack>
            
            <HStack spacing={2} align="center">
              <Text fontSize="sm" color="rgba(255, 255, 255, 0.8)" fontWeight="medium">
                Location:
              </Text>
              <Text fontSize="sm" color="white">
                {location}
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    );
  }

  // Mobile version - clean and simple
  return (
    <HStack align="start" w="full">
      <Box 
        pl={{ base: 2, md: 6 }} 
        pr={{ base: 2, md: 0 }}
        flex="1"
        w="full"
      >
        <Text 
          fontSize={{ base: "lg", md: "xl" }} 
          fontWeight="bold"
          mb={2}
        >
          {title}
        </Text>
        <Text 
          fontSize={{ base: "xs", md: "sm" }} 
          color="white"
          mb={1}
        >
          <b>Position:</b> {position}
        </Text>
        <Text 
          fontSize={{ base: "xs", md: "sm" }} 
          color="white"
          mb={1}
        >
          <b>Organization:</b> {org}
        </Text>
        <Text 
          fontSize={{ base: "xs", md: "sm" }} 
          color="white"
          mb={1}
        >
          <b>Time Duration:</b> {time}
        </Text>
        <Text 
          fontSize={{ base: "xs", md: "sm" }} 
          color="white"
          mb={1}
        >
          <b>Location:</b> {location}
        </Text>
      </Box>
    </HStack>
  );
};

export default TimelineItem;