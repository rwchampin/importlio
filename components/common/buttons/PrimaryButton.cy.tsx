// Import the necessary Cypress commands for component testing
import { mount } from '@cypress/react';

// Import the Button component
import Button from './Primary';

describe('<Button />', () => {
  it('renders without crashing', () => {
    mount(<Button />);
    cy.get('button').should('exist');
  });

  it('displays the provided children text', () => {
    const buttonText = 'Click Me';
    mount(<Button>{buttonText}</Button>);
    cy.get('button').contains(buttonText).should('be.visible');
  });

  it('applies the "solid" style when "solid" prop is true', () => {
    mount(<Button solid>Click Me</Button>);
    cy.get('button').should('have.class', 'bg-button text-offwhite text-xs');
  });

  it('applies the "outline" style when "outline" prop is true', () => {
    mount(<Button outline>Click Me</Button>);
    cy.get('button').should('have.class', 'border-2 border-button text-xs');
  });

  it('applies the "color" prop as the background color', () => {
    const buttonColor = 'red';
    mount(<Button color={buttonColor}>Click Me</Button>);
    cy.get('button').should('have.css', 'background-color', buttonColor);
  });

  it('executes the onClick handler when clicked', () => {
    const onClick = cy.stub().as('onClick');
    mount(<Button onClick={onClick}>Click Me</Button>);
    cy.get('button').click();
    cy.get('@onClick').should('have.been.calledOnce');
  });

  it('renders as a link when "href" prop is provided', () => {
    const href = '/my-link';
    mount(<Button href={href}>Click Me</Button>);
    cy.get('a').should('have.attr', 'href', href);
  });

  it('has the specified "type" attribute when "type" prop is provided', () => {
    const buttonType = 'submit';
    mount(<Button type={buttonType}>Click Me</Button>);
    cy.get('button').should('have.attr', 'type', buttonType);
  });

  it('applies additional className passed as a prop', () => {
    const customClassName = 'custom-button';
    mount(<Button className={customClassName}>Click Me</Button>);
    cy.get('button').should('have.class', customClassName);
  });

  it('is accessible with no violations', () => {
    mount(<Button>Click Me</Button>);
    cy.injectAxe();
    cy.checkA11y();
  });
});
