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
} from '@chakra-ui/react';
import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { ProjectButton } from './ProjectButton';
import { St1, St2 } from "../St1"

const ProjectCard = props => {
  const { colorMode } = useColorMode();

  return (
    <Card
      m="5"
      p="5"
      w= {{'lg': '35vw', 'sm': 'sm'}}
      _hover={{
        transform: 'scale(1.05)',
        transition: 'all 0.2s ease-in-out',
        bg: colorMode === 'dark' ? '#425069' : '#9f9f9f',
      }}
      style={colorMode === 'dark' ? St1 : St2}
    >
      <CardHeader>
        <Heading align="center">{props.title}</Heading>
      </CardHeader>
      <Divider />
      <CardBody>
        <Image src={props.img} alt={`${props.title}'s Image`} mb={6} />
        {/* <Divider /> */}
        <Text>{props.text}</Text>
      </CardBody>
      <Divider />
      <CardFooter>
        <HStack spacing={5} w="full" justifyContent="center">
          <ProjectButton
            label="Github Link"
            link={props.repo}
            icon={<FiGithub />}
          />
          <ProjectButton
            label="Live Link"
            link={props.link}
            icon={<FiExternalLink />}
          />
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
