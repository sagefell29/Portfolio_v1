import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';
import { St1 } from '../St1';
import { SiCplusplus, SiPython, SiJava, SiJavascript, SiPhp, SiMysql, SiHtml5, SiCss3, SiFigma, SiFlask, SiTensorflow, SiApacheairflow, SiAmazonaws } from 'react-icons/si';
import { FaReact, FaNodeJs, FaGit, FaGitSquare } from 'react-icons/fa';
import { IoLogoBitbucket } from 'react-icons/io';
import { BiTable } from 'react-icons/bi';
import MyTooltip from './MyTooltip';

const skillSections = [
  {
    title: 'Languages',
    skills: [
      { label: 'C/C++', icon: SiCplusplus },
      { label: 'Python', icon: SiPython },
      { label: 'Java', icon: SiJava },
      { label: 'JavaScript', icon: SiJavascript },
      { label: 'PHP', icon: SiPhp },
      { label: 'MySQL', icon: SiMysql },
      { label: 'HTML5', icon: SiHtml5 },
      { label: 'CSS3', icon: SiCss3 },
    ],
  },
  {
    title: 'Frameworks and Packages',
    skills: [
      { label: 'React.js', icon: FaReact },
      { label: 'Node.js', icon: FaNodeJs },
      { label: 'Flask', icon: SiFlask },
      { label: 'TensorFlow', icon: SiTensorflow },
      { label: 'Apache Airflow', icon: SiApacheairflow },
    ],
  },
  {
    title: 'Technology',
    skills: [
      { label: 'Git', icon: FaGit },
      { label: 'GitHub', icon: FaGitSquare },
      { label: 'BitBucket', icon: IoLogoBitbucket },
      { label: 'Figma', icon: SiFigma },
      { label: 'Tableau', icon: BiTable },
      { label: 'AWS', icon: SiAmazonaws },
    ],
  },
];

const Skills = () => (
  <Box id="Skills" m={5} mt={28} style={St1}>
    <VStack p={5} spacing={5} align="center">
      <Text fontSize="3xl" fontWeight="bold">
        My Skills
      </Text>
      {skillSections.map(section => (
        <VStack key={section.title} align="center" spacing={2}>
          <Text fontSize="lg" fontWeight="semibold">{section.title}</Text>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gap={5}
            maxW="100%"
            overflow="hidden"
          >
            {section.skills.map(({ label, icon: Icon }) => (
              <MyTooltip key={label} label={label}>
                <Icon size={40} color="white" />
              </MyTooltip>
            ))}
          </Box>
        </VStack>
      ))}
    </VStack>
  </Box>
);

export default Skills;
