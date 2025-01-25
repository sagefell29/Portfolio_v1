import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";

const TimelineItem = ({ title, position, org, time, location, index }) => {

  return (
    <HStack align="start">
      <Box pl={6} flex="1">
        <Text fontSize="xl" fontWeight="bold">{title}</Text>
        <Text fontSize="sm" color="white"><b>Position:</b> {position}</Text>
        <Text fontSize="sm" color="white"><b>Organization:</b> {org}</Text>
        <Text fontSize="sm" color="white"><b>Time Duration:</b> {time}</Text>
        <Text fontSize="sm" color="white"><b>Location:</b> {location}</Text>
      </Box>
    </HStack>
  );
};

export default TimelineItem;