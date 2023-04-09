import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../Data/ProjectData';

export const Projects = () => {
  return (
    <VStack align="stretch" spacing={5}p={5}>
      {projects.map((proj, i) => {
        return (
          <ProjectCard
            text={proj.text}
            link={proj.link}
            repo={proj.repo}
            title={proj.title}
          />
        );
      })}
    </VStack>
  );
};
