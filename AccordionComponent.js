import React, { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';


const RotatingArrow = ({ isOpen }) => {
  return (
    <span className={`arrow ${isOpen ? 'rotate' : ''}`}>&#9658;</span>
  );
};

const CustomToggle = ({ children, eventKey }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Button
      variant="link"
      className="accordion-toggle"
      onClick={toggleAccordion}
      aria-controls={`accordion-collapse-${eventKey}`}
      aria-expanded={isOpen}
    >
      <RotatingArrow isOpen={isOpen} />
      {children}
    </Button>
  );
};

const AccordionComponent = () => {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0">Section 1</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Section 2</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="2">Section 3</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default AccordionComponent;
