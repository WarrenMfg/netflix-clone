import { formatWithCursor } from 'prettier';
import React from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs.json';

export function AccordionContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map(faq => (
        <Accordion.Item key={faq.id}>
          <Accordion.Header>{faq.header}</Accordion.Header>
          <Accordion.Body>{faq.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <OptForm>
        <OptForm.Input type='number' placeholder='Email Address' />
      </OptForm>
    </Accordion>
  );
}
