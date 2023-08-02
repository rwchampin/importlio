import React from 'react'
import CanvasManager from './CanvasManager'

describe('<CanvasManager />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CanvasManager />)
  })
})