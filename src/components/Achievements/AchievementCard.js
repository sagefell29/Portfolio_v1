import { Card, CardBody, CardHeader, Divider, Heading, Image, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';


export const AchievementCard = (props) => {
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
          <Text>{props.text}</Text>
        </CardBody>
      </Card>
    )
}
