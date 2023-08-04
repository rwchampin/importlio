// Import the necessary Cypress commands for component testing
import { mount } from '@cypress/react';

// Import the Button component
import Primary from './Primary';

describe('<Primary />', () => {
  it('renders without crashing', () => {
    mount(<Primary>submit</Primary>);
    cy.get('button').should('exist');
  });

  it('displays the provided children text', () => {
    const buttonText = 'Click Me';
    mount(<Primary>{buttonText}</Primary>);
    cy.get('button').contains(buttonText).should('be.visible');
  });

  it('applies the "solid" style when "solid" prop is true', () => {
    mount(<Primary solid>Click Me</Primary>);
    cy.get('button').should('have.class', 'bg-button text-offwhite text-xs');
  });

  it('applies the "outline" style when "outline" prop is true', () => {
    mount(<Primary outline>Click Me</Primary>);
    cy.get('button').should('have.class', 'border-2 border-button text-xs');
  });

  it('applies the "color" prop as the background color', () => {
    const buttonColor = 'red';
    mount(<Primary color={buttonColor}>Click Me</Primary>);
    cy.get('button').should('have.css', 'background-color', buttonColor);
  });

  it('executes the onClick handler when clicked', () => {
    const onClick = cy.stub().as('onClick');
    mount(<Primary onClick={onClick}>Click Me</Primary>);
    cy.get('button').click();
    cy.get('@onClick').should('have.been.calledOnce');
  });

  it('renders as a link when "href" prop is provided', () => {
    const href = '/my-link';
    mount(<Primary href={href}>Click Me</Primary>);
    cy.get('a').should('have.attr', 'href', href);
  });

  it('has the specified "type" attribute when "type" prop is provided', () => {
    const buttonType = 'submit';
    mount(<Primary type={buttonType}>Click Me</Primary>);
    cy.get('button').should('have.attr', 'type', buttonType);
  });

  it('applies additional className passed as a prop', () => {
    const customClassName = 'custom-button';
    mount(<Primary className={customClassName}>Click Me</Primary>);
    cy.get('button').should('have.class', customClassName);
  });

  it('is accessible with no violations', () => {
    mount(<Primary>Click Me</Primary>);
    debugger
    cy.injectAxe();
    cy.checkA11y();
  });
});
