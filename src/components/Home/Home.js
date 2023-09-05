import {
  Image,
  Text,
  HStack,
  Stack,
  VStack,
  Heading,
  useColorMode,
  Button,
} from '@chakra-ui/react';
import { FiFileText } from 'react-icons/fi';
import React from 'react';
import P from '../../Data/Images/Pro_p.webp';
import { TypeWriter1 } from './Typed';
import Transition from './Transition';
import { St1, St2 } from '../St1';

export const Home = () => {
  const { colorMode } = useColorMode();

  return (
    <VStack
      id="Home"
      m="5"
      h="100vh"
      justifyContent="center"
      z-index={1}
      position="relative"
    >
      <VStack m="5" p="15">
        <Image
          src={P}
          h="30vh"
          alt="Rishi Kaushal's Profile Pic"
          borderRadius="25"
          filter="grayscale(100%)"
            transition="0.15s"
            _hover={{
                filter: "grayscale(0%)"
            }}
        />
        <Stack p="5" align="center" w="full" borderRadius={7}>
          <Heading>
            <HStack>
              <Transition />
            </HStack>
          </Heading>
          <Heading fontSize="3xl" fontWeight="750" m={0}>
            I am Rishi.
          </Heading>
          <Text fontSize="xl">
            <TypeWriter1 />
          </Text>
        </Stack>
        <HStack
          justifyContent="center"
          borderRadius="7px"
          w="fit-content"
          spacing={3}
          style={colorMode === 'dark' ? St1 : St2}
        >
          <Button
            fontSize={{ md: 'lg', xs: 'xs' }}
            as="a"
            target="_blank"
            href={
              'https://drive.google.com/file/d/1RiTya05drFYD50tXj4pNdvYby8oT-BU1/view?usp=drive_link'
            }
            bg="transparent"
          >
            Resume
            <FiFileText style={{ margin: '0px 0px 0px 6px' }}/>
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};
