import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo />
        {/* change back to sign up route */}
        <Header.Button to={ROUTES.BROWSE}>Browse</Header.Button>
      </Header.Frame>
      {children}
    </Header>
  );
}
