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
import { LinkButton } from "../Home/LinkButton"
import { St1, St2 } from "../St1"

const ProjectCard = props => {
  const { colorMode } = useColorMode();

  return (
    <Card
      m="5"
      p="5"
      w= {{'lg': '35vw', 'sm': 'sm'}}
      z-index={1}
      opacity="80%"
      _hover={{
        opacity: "100%",
        transition: 'all 0.15s ease-in-out',
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
  );
};

export default ProjectCard;
