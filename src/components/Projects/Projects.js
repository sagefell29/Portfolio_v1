import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../Data/ComponentData/ProjectData';

export const Projects = () => {
  return (
    <Box
      id="Projects"
      align="stretch"
      p={5}
      m={5}
      mt={16}
      justifyContent="center"
      z-index={0}
      position="relative"
    >
      <Heading align="center" m={5}>
        Projects
      </Heading>
      <Flex gap={6} flexWrap="wrap" w="full" justifyContent="center">
        {projects.map((proj, i) => {
          return (
            <ProjectCard
              text={proj.text}
              link={proj.link}
              repo={proj.repo}
              title={proj.title}
              img={proj.img}
            />
          );
        })}
      </Flex>
    </Box>
  );
};
