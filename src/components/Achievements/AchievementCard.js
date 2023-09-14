import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  Image,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { St1, St2 } from '../St1';

export const AchievementCard = props => {
  const { colorMode } = useColorMode();

  return (
    <Card
      m="5"
      p="5"
      z-index={0}
      w={{ lg: '35vw', sm: 'sm' }}
      style={colorMode === 'dark' ? St1 : St2}
      opacity="80%"
      _hover={{
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.75)',
        opacity: '100%',
        transition: 'all 0.15s ease-in-out',
        bg: colorMode === 'dark' ? '#425069' : '#9f9f9f',
      }}
    >
      <CardHeader>
        <Heading align="center">{props.title}</Heading>
      </CardHeader>
      <Divider />
      <CardBody>
        <Image src={props.img} alt={`${props.title}'s Image`} mb={6} />
        <Text dangerouslySetInnerHTML={{ __html: props.text }} />
      </CardBody>
      <Divider />
    </Card>
  );
};
