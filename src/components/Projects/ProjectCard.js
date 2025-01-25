import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  HStack,
  Image,
  Text,
  useColorMode,
  Box,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { LinkButton } from "../Home/LinkButton"
import { St1, St2 } from "../St1"

const ProjectCard = props => {
  const { colorMode } = useColorMode();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box position="relative">
      {/* Background overlay */}
      {isExpanded && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.7)"
          backdropFilter="blur(8px)"
          zIndex="3"
          onClick={() => setIsExpanded(false)}
        />
      )}

      <Card
        m="5"
        p="5"
        w={{ lg: '35vw', sm: 'sm' }}
        zIndex={isExpanded ? '10' : "0"}
        opacity='80%'
        _hover={{
          opacity: '100%',
          transition: 'all 0.15s ease-in-out',
        }}
        style={colorMode === 'dark' ? St1 : St2}
        onClick={() => setIsExpanded(true)}
        position={isExpanded ? 'fixed' : 'relative'}
        top={isExpanded ? '50%' : 'auto'}
        left={isExpanded ? '50%' : 'auto'}
        transform={isExpanded ? 'translate(-50%, -50%) scale(1.35)' : 'none'}
        boxShadow="xl"
        transition="all 0.3s ease"
      >
        <CardHeader>
          <Heading align="center">{props.title}</Heading>
        </CardHeader>
        <Divider />
        <CardBody>
          <Image src={props.img} alt={`${props.title}'s Image`} mb={6} />
          <Text>{props.text}</Text>
        </CardBody>
        <Divider />
        <CardFooter>
          <HStack spacing={5} w="full" justifyContent="center">
            <LinkButton
              label="Github Link"
              link={props.repo}
              icon={<FiGithub />}
            />
            <LinkButton
              label="Live Link"
              link={props.link}
              icon={<FiExternalLink />}
            />
          </HStack>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default ProjectCard;
