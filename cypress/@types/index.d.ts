/// <reference types="cypress" />

/**
 * Public interface for the global "cy" object. If you want to add
 * a custom property to this object, you should extend this interface.
 * @see https://on.cypress.io/typescript#Types-for-custom-commands
 *
 ```
 // in your TS file
 declare namespace Cypress {
    interface cy {
      // declare additional properties on "cy" object, like
      // label: string
    }
    interface Chainable {
      // declare additional custom commands as methods, like
      // login(username: string, password: string)
    }
  }
 ```
 */
