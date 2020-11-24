import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderContainer } from '../containers/header';
import Form from '../components/form';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';

export default function SignIn() {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [error, setError] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const isInvalid = emailAddress === '' || password === '';

  const handleSignIn = e => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch(error => setError(error.message));
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.HTMLForm onSubmit={handleSignIn} method='POST'>
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
              Sign In
            </Form.Submit>

            <Form.Text>
              New to Netflix?{' '}
              <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
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
