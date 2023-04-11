import { Container } from '@chakra-ui/react';
import React from 'react';
import Typed from 'react-typed';

export const TypeWriter1 = () => {
  return (
    <Container>
      <u>
        <Typed
        strings={[
          ' Computer Science Student',
          " Web Developer",
          " SIH '22 Winner",
          " Budding Software Engineer", 
          " Open to work"
        ]}
        typeSpeed={20}
        backSpeed={20}
        loop
      />
      </u>
    </Container>
  );
};

export const TypeWriter2 = () => {
  return (
    <Container m={0}>
        <Typed
        strings={[
          "Hello",
          'Salut',
          "Olá",
          "Здравствуйте",
          "こんにちは", 
          "Ciao",
          "你好"
        ]}
        typeSpeed={60}
        backSpeed={60}
        loop
      />
    </Container>
  );
};
