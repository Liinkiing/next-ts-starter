export default new (class About {
  get cy() {
    return cy
  }
  visit() {
    return cy.visit('/about')
  }
})()
