import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FiGithub, FiExternalLink  } from 'react-icons/fi';
import { ProjectButton } from './ProjectButton';

const ProjectCard = props => {
  return (
    <Card maxW="sm" m="5" p="5" justifyContent="center">
      <CardHeader><Heading>{props.title}</Heading></CardHeader>
      <CardBody>
        <Image src={props.img} m={5}/>
        <Divider />
        <Stack mt="6" spacing="3">
          <Text m={5}>{props.text}</Text>
        </Stack>
        <Divider />
        <ProjectButton label = "Github Link" link = {props.repo} icon = {<FiGithub />} />
        <ProjectButton label = "Live Link" link = {props.link} icon = {<FiExternalLink />} />
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
