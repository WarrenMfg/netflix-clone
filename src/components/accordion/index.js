import React, { useState, useContext, createContext } from 'react';
import {
  Container,
  Inner,
  Item,
  Title,
  Header,
  BodyContainer,
  Body
} from './styles/accordion';

const ToggleItemContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ToggleItemContext.Provider value={{ isOpen, setIsOpen }}>
      <Item isOpen={isOpen} {...restProps}>
        {children}
      </Item>
    </ToggleItemContext.Provider>
  );
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { isOpen, setIsOpen } = useContext(ToggleItemContext);

  return (
    <Header {...restProps} onClick={() => setIsOpen(!isOpen)}>
      {children}
      {isOpen ? (
        <img src='/images/icons/close-slim.png' alt='Close' title='Close' />
      ) : (
        <img src='/images/icons/add.png' alt='Open' title='Open' />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { isOpen } = useContext(ToggleItemContext);

  return (
    <BodyContainer isOpen={isOpen} {...restProps}>
      {children.map((para, i) => (
        <Body key={i} isOpen={isOpen} {...restProps}>
          {para}
        </Body>
      ))}
    </BodyContainer>
  );
};
