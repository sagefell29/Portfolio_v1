import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { AchievementCard } from './AchievementCard';
import { achievements } from '../../Data/ComponentData/AchievementData';

export const Achievements = () => {
  return (
    <Box
      id="Achievements"
      align="stretch"
      p={5}
      justifyContent="center"
      z-index={1}
      position="relative"
    >
      <Heading align="center" m={5}>
        My Achievements and Certifications
      </Heading>
      <Flex gap={9} flexWrap="wrap" w="full" justifyContent="center">
        {achievements.map((ach, i) => {
          return (
            <AchievementCard text={ach.text} title={ach.title} img={ach.img} />
          );
        })}
      </Flex>
    </Box>
  );
};
