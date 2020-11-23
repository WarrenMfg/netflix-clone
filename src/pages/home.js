import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron';
import { AccordionContainer } from '../containers/accordion';
import { FooterContainer } from '../containers/footer';

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
}
