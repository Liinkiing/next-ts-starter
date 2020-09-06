export default new (class Home {
  get cy() {
    return cy
  }
  visit() {
    return cy.visit('/')
  }
})()
