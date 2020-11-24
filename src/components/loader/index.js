import React from 'react';
import {
  Container,
  Spinner,
  LockBody,
  Picture,
  UnlockBody
} from './styles/loader';

export default function Loader({ photo }) {
  return (
    <Container>
      <LockBody />
      <Spinner src={'/images/misc/spinner.png'} />
      <Picture src={`/images/users/${photo}.png`} />
    </Container>
  );
}

Loader.UnlockBody = function LoaderUnlockBody() {
  return <UnlockBody />;
};
