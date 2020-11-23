import React, { useState } from 'react';
import { HeaderContainer } from '../containers/header';
import Form from '../components/form';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
  const [error, setError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const isInvalid = firstName === '' || emailAddress === '' || password === '';

  const handleSignUp = e => {
    e.preventDefault();
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.HTMLForm onSubmit={handleSignUp} method='POST'>
            <Form.Input
              type='text'
              placeholder='Fist Name'
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              type='email'
              placeholder='Email Address'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type='password'
              placeholder='Password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type='submit'>
              Sign Up
            </Form.Submit>

            <Form.Text>
              Already a user?{' '}
              <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA.
            </Form.TextSmall>
          </Form.HTMLForm>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}