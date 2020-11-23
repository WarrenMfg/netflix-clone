import React from 'react';
import {
  Container,
  HTMLFormElement,
  Input,
  Submit,
  Link,
  Title,
  Text,
  TextSmall,
  TAC,
  Error
} from './styles/form';

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.HTMLForm = function HTMLForm({ children, ...restProps }) {
  return <HTMLFormElement {...restProps}>{children}</HTMLFormElement>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.TAC = function FormTAC({ children, ...restProps }) {
  return <TAC {...restProps}>{children}</TAC>;
};
