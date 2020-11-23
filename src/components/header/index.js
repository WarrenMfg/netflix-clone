import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Background, Frame, Logo, Button } from './styles/header';
import * as ROUTES from '../../constants/routes';

export default function Header({ background = true, children, ...restProps }) {
  return background ? (
    <Background {...restProps}>{children}</Background>
  ) : (
    children
  );
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Header.Logo = function HeaderLogo({ ...restProps }) {
  return (
    <RouterLink to={ROUTES.HOME}>
      <Logo
        src='/images/misc/logo.svg'
        alt='Netflix'
        title='Netflix'
        {...restProps}
      />
    </RouterLink>
  );
};

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
