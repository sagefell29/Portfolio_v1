import React from 'react';
import { Box, VStack, Text, HStack } from '@chakra-ui/react';
import { St1 } from '../St1';
import { SiCplusplus, SiPython, SiJava, SiJavascript, SiPhp, SiMysql, SiHtml5, SiCss3 } from 'react-icons/si';
import { FaReact, FaNodeJs, FaGit, FaGitSquare } from 'react-icons/fa';
import { IoLogoBitbucket } from 'react-icons/io';
import { BiTable } from 'react-icons/bi';
import { SiFigma, SiFlask, SiTensorflow, SiApacheairflow, SiAmazonaws } from 'react-icons/si';
import { MdPublic } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import MyTooltip from './MyTooltip'; // Import the MyTooltip component

const Skills = () => {

  return (
    <Box id="Skills" m={5} mt={28} style={St1}>
      <VStack p={5} spacing={5} align="center">
        <Text fontSize="3xl" fontWeight="bold">
          My Skills
        </Text>

        {/* Languages Section */}
        <VStack align="center" spacing={2}>
          <Text fontSize="lg" fontWeight="semibold">Languages</Text>
          <HStack spacing={5}>
            <MyTooltip label="C/C++">
              <SiCplusplus size={40} color='white'/>
            </MyTooltip>
            <MyTooltip label="Python">
              <SiPython size={40} color="white" />
            </MyTooltip>
            <MyTooltip label="Java">
              <SiJava size={40} color="white" />
            </MyTooltip>
            <MyTooltip label="JavaScript">
              <SiJavascript size={40} color="white" />
            </MyTooltip>
            <MyTooltip label="PHP">
              <SiPhp size={40} color="white" />
            </MyTooltip>
            <MyTooltip label="MySQL">
              <SiMysql size={40} color="white" />
            </MyTooltip>
            <MyTooltip label="HTML5">
              <SiHtml5 size={40} color="white" />
            </MyTooltip>
            <MyTooltip label="CSS3">
              <SiCss3 size={40} color="white" />
            </MyTooltip>
          </HStack>
        </VStack>

        {/* Frameworks and Packages Section */}
        <VStack align="center" spacing={2}>
          <Text fontSize="lg" fontWeight="semibold">Frameworks and Packages</Text>
          <HStack spacing={5}>
            <MyTooltip label="React.js">
              <FaReact size={40} color="white" />
            </MyTooltip>
            <MyTooltip label="Node.js">
              <FaNodeJs size={40} color="white" />
            </MyTooltip>
            <MyTooltip label="Flask">
              <SiFlask size={40} color="white" />
            </MyTooltip>
            <MyTooltip label="TensorFlow">
              <SiTensorflow size={40} color="white" />
            </MyTooltip>
            <MyTooltip label="Apache Airflow">
              <SiApacheairflow size={40} color="white" />
            </MyTooltip>
          </HStack>
        </VStack>

        {/* Technology Section */}
        <VStack align="center" spacing={2}>
          <Text fontSize="lg" fontWeight="semibold">Technology</Text>
          <HStack spacing={5}>
            <MyTooltip label="Git">
              <FaGit size={40} color="white" />
            </MyTooltip>
            <MyTooltip label="GitHub">
              <FaGitSquare size={40} color="white" />
            </MyTooltip>
            <MyTooltip label="BitBucket">
              <IoLogoBitbucket size={40} color="white" />
            </MyTooltip>
            <MyTooltip label="Figma">
              <SiFigma size={40} color="white" />
            </MyTooltip>
            <MyTooltip label="Tableau">
              <BiTable size={40} color="white" />
            </MyTooltip>
            <MyTooltip label="AWS">
              <SiAmazonaws size={40} color="white" />
            </MyTooltip>
          </HStack>
        </VStack>
        
        {/* <VStack align="center" spacing={2}>
          <Text fontSize="lg" fontWeight="semibold">Soft Skills</Text>
          <HStack spacing={5}>
            <MyTooltip label="Public Speaking">
              <MdPublic size={40} color="white" />
            </MyTooltip>
            <MyTooltip label="Teamwork">
              <IoIosPeople size={40} color="white" />
            </MyTooltip>
          </HStack>
        </VStack> */}
      </VStack>
    </Box>
  );
};

export default Skills;
