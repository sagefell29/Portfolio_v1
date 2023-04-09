import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { AchievementCard } from './AchievementCard';
import { achievements } from '../../Data/ComponentData/AchievementData';

export const Achievements = () => {
  return (
    <Box align="stretch" p={5} justifyContent="center">
      <Heading align="center" m={5}>
        My Achievements
      </Heading>
      <Flex gap={6} flexWrap="wrap" w="full" justifyContent="center">
        {achievements.map((ach, i) => {
          return (
            <AchievementCard text={ach.text} title={ach.title} img={ach.img} />
          );
        })}
      </Flex>
    </Box>
  );
};
