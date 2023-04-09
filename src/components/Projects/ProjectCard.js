import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  HStack,
  Image,
  Text,
  useColorMode
} from '@chakra-ui/react';
import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { ProjectButton } from './ProjectButton';

const ProjectCard = props => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Card
      w="sm"
      m="5"
      p="5"
      _hover={{ transform: "scale(1.05)", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.75)", transition: "all 0.2s ease-in-out", bg: colorMode === 'dark' ? '#425069' : '#9f9f9f'}}
    >
      <CardHeader>
        <Heading align="center">{props.title}</Heading>
      </CardHeader>
      <Divider />
      <CardBody>
        <Image src={props.img} alt={`${props.title}'s Image`} mb={6} />
        {/* <Divider /> */}
        <Text>{props.text}</Text>
        <Divider mt={5} size='2px' />
        <HStack justify="center" spacing={10} p={2} mt={5}>
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
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
