import { Container } from '@chakra-ui/react';
import React from 'react';
import Typed from 'react-typed';

export const TypeWriter = () => {
  return (
    <Container>
        I am{' '}
        <Typed
        strings={[
          ' a Computer Science Student.',
          " a Web Developer.",
          " a SIH '22 Winner",
          " a budding Software Engineer.", 
          " open to work."
        ]}
        typeSpeed={25}
        backSpeed={25}
        loop
      />
    </Container>
  );
};
