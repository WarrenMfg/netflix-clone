import React, { useState, createContext, useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Input, Button, Text } from './styles/optForm';

const CTAEmailAddress = createContext();

export default function OptForm({ children, ...restProps }) {
  const [emailAddress, setEmailAddress] = useState('');
  const button = useRef(null);

  return (
    <CTAEmailAddress.Provider value={{ emailAddress, setEmailAddress, button }}>
      <Container
        emailAddress={emailAddress}
        setEmailAddress={setEmailAddress}
        {...restProps}
      >
        {children}
      </Container>
    </CTAEmailAddress.Provider>
  );
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  const { emailAddress, setEmailAddress, button } = useContext(CTAEmailAddress);
  return (
    <Input
      value={emailAddress}
      onChange={({ target }) => setEmailAddress(target.value)}
      onKeyDown={({ key }) => {
        if (key === 'Enter') button.current.click();
      }}
      {...restProps}
    />
  );
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  const { emailAddress, button } = useContext(CTAEmailAddress);
  const history = useHistory();
  return (
    <Button
      onClick={() => {
        if (emailAddress) history.push('/signup', { emailAddress });
      }}
      ref={button}
      {...restProps}
    >
      {children}
      <img
        src='/images/icons/chevron-right.png'
        alt='Try Now'
        title='Try Now'
      />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
