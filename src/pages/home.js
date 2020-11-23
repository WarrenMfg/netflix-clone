import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron';
import { AccordionContainer } from '../containers/accordion';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
}
