import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Background,
  Frame,
  Group,
  Logo,
  Button,
  Text,
  TextLink,
  Feature,
  Callout,
  PlayButton
} from './styles/header';
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

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
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

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.Callout = function HeaderCallout({ children, ...restProps }) {
  return <Callout {...restProps}>{children}</Callout>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
