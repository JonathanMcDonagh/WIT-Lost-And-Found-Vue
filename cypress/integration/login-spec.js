describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/')
    // Click Login Item in navbar
    cy.get('.navbar-nav')
      .eq(1)
      .find('.nav-item')
      .eq(1)
      .click()
    cy.url().should('include', '/')
    cy.get('.navbar-nav')
      .eq(1)
      .find('.nav-item')
      .eq(2)
      .click()
    cy.url().should('include', '/Login')
  })
  describe('Tests user login', () => {
    describe('With valid attributes', () => {
      it('allows user to be logged in', () => {
        //  Fill out login form
        cy.get('input[type=text]').type('20074520@mail.wit.ie')
        cy.get('input[type=password]').type('agile123')
      })
      after(() => {
        cy.wait(100)
        // Click login button
        cy.get('button')
          .contains('Log in')
          .click()
        cy.url().should('include', '/#/#/')
      })
    })
  })
})
