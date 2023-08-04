export {}

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Logs in E2E user
       * @returns void
       */
      login: () => void;
    }
  }
}