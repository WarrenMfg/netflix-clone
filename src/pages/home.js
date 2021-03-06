import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron';
import { AccordionContainer } from '../containers/accordion';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Feature, OptForm } from '../components';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
          <OptForm>
            <OptForm.Input type='email' placeholder='Email Address' />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
}
