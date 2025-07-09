import {
  Heading,
  Text,
  VStack,
  Box,
  Divider,
  HStack,
  Container,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { St1 } from '../St1';
import TimelineItem from './TimelineItem';
import { experience } from '../../Data/ComponentData/ExperienceData';

export const About = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <VStack
      m={5}
      id="About"
      mt={20}
      p="5"
      align="center"
      fontSize="16"
      justifyContent="center"
      position="relative"
      borderRadius={7}
      style={St1}
      spacing={8}
    >
      {/* About Section */}
      <Container maxW="container.lg" centerContent>
        <Heading 
          m={5} 
          textAlign="center" 
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="extrabold"
          color="white"
        >
          About Me
        </Heading>
        <Divider 
          borderColor="white" 
          w="50px" 
          mb={8}
          borderWidth="2px"
        />
        
        <VStack spacing={6} align="start" w="full">
          <Text 
            fontSize={{ base: "lg", md: "xl" }} 
            lineHeight="1.8"
            textAlign="justify"
          >
            Hi, I am <b>Rishi Kaushal</b>, a skilled software engineer with
            expertise in <b>data engineering</b>, <b>full-stack development</b>, and
            a passion for continuous learning and innovation. I hold a degree in
            <b> Computer Science Engineering with a specialization in Bioinformatics</b>.
            Currently, I am working at AstraZeneca, where I focus on building
            robust data pipelines, creating insightful reports, and working on
            impactful projects across various domains.
          </Text>
          
          <Text 
            fontSize={{ base: "lg", md: "xl" }} 
            lineHeight="1.8"
            textAlign="justify"
          >
            With experience in working on advanced frameworks like Apache Airflow,
            AWS cloud infrastructure, PySpark, and modern web development tools like
            .NET, I have honed my problem-solving skills. I am deeply committed to
            applying my knowledge and skills to create innovative, scalable
            solutions. My enthusiasm for research and development is driving me to
            contribute to impactful projects and explore the intersection of
            technology and life sciences.
          </Text>
          
          <Text 
            fontSize={{ base: "lg", md: "xl" }} 
            lineHeight="1.8"
            textAlign="justify"
          >
            Beyond my technical skills, I value collaboration, adaptability, and a
            strong growth mindset. I aim to excel in roles that allow me to bridge
            technology with meaningful impact, learning from experienced
            professionals, and pushing the boundaries of software engineering.
          </Text>
        </VStack>
      </Container>

      {/* Timeline Section */}
      <Box id="Timeline" w="full" mt={10}>
        <Heading 
          align="center" 
          mb={8} 
          fontSize={{ base: "2xl", md: "3xl" }}
          color="white"
          fontWeight="extrabold"
        >
          My Career Timeline
        </Heading>
        <Box display="flex" justifyContent="center" mb={8}>
          <Divider 
            borderColor="white" 
            w="50px" 
            borderWidth="2px"
          />
        </Box>
        <Box position="relative" w="full">
          {/* Vertical Timeline Line - Only show on desktop */}
          {!isMobile && (
            <Box
              position="absolute"
              left="50%"
              top="0"
              bottom="0"
              w="3px"
              bgGradient="linear(to-b, rgba(255,255,255,0.8), rgba(255,255,255,0.3))"
              transform="translateX(-50%)"
              zIndex={1}
              borderRadius="full"
            />
          )}
          
          <VStack spacing={8} align="stretch" w="full">
            {experience.map((ex, index) => (
              <Box
                key={index}
                position="relative"
                display="flex"
                justifyContent={isMobile ? "center" : (index % 2 === 0 ? "flex-start" : "flex-end")}
                w="full"
                opacity={0.9}
                transition="opacity 0.3s ease"
                _hover={{ opacity: 1 }}
              >
                <Box
                  w={isMobile ? "full" : "45%"}
                  position="relative"
                  pl={isMobile ? "0" : (index % 2 === 0 ? "0" : "0")}
                  pr={isMobile ? "0" : (index % 2 === 0 ? "0" : "0")}
                >
                  <TimelineItem
                    title={ex.title}
                    position={ex.position}
                    org={ex.org}
                    field={ex.field}
                    time={ex.time}
                    location={ex.location}
                    index={index}
                    isMobile={isMobile}
                  />
                </Box>
              </Box>
            ))}
          </VStack>
        </Box>
      </Box>
    </VStack>
  );
};

export default About;
