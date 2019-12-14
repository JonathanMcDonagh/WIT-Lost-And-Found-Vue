const apiURL = 'https://wit-lost-and-found.herokuapp.com/items/'

describe('Manage Items page', () => {
  beforeEach(() => {
    // Delete all items in the API's datastore
    cy.request(apiURL)
      .its('body')
      .then(items => {
        items.forEach(element => {
          cy.request('DELETE', `${apiURL}${element._id}`)
        })
      })
    // Populate API's datastore
    cy.fixture('items').then(items => {
      let [d1, d2, d3, d4, ...rest] = items
      let four = [d1, d2, d3, d4]
      four.forEach(item => {
        cy.request('POST', apiURL, item)
      })
    })
    cy.visit('/')
    // Click Manage items navbar link
    cy.get('.navbar-nav')
      .eq(0)
      .find('.nav-item')
      .eq(1)
      .click()
  })
  // Test to Like an item
  describe('To like an item operation', () => {
    it('increases the no. of likes by 1', () => {
      cy.get('tbody')
        .find('tr')
        .should('have.length', 4)
      // Click like link of 3rd item in list
      cy.get('tbody')
        .find('tr')
        .eq(2)
        .find('td')
        .eq(7)
        .find('a')
        .click()
      cy.get('tbody')
        .find('tr')
    })
  })

  // Test to Edit an item
  describe('To edit an item operation', () => {
    it('Changes item description', () => {
      cy.get('tbody')
        .find('tr')
        .should('have.length', 4)
      // Click the edit link of 3rd item in list
      cy.get('tbody')
        .find('tr')
        .eq(2)
        .find('td')
        .eq(8)
        .find('a')
        .click()
      cy.url().should('include', '/edit')
      cy.get('label')
        .contains('Lost Item Description')
        .next()
        .type('Laptop Bag')
      cy.get('[data-test=manageitemsbtn]').click()
      cy.url().should('include', '/items')
      cy.get('tbody')
        .find('tr')
        .should('have.length', 4)
    })
  })
  // Test for when a user does NOT edit the item
  describe('For a cancelled edit operation', () => {
    it('leaves the list unchanged', () => {
      cy.get('tbody')
        .find('tr')
        .should('have.length', 4)
      // Click the edit link of 3rd item in the list
      cy.get('tbody')
        .find('tr')
        .eq(2)
        .find('td')
        .eq(8)
        .find('a')
        .click()
      cy.url().should('include', '/edit')
      cy.get('[data-test=manageitemsbtn]').click()
      cy.url().should('include', '/items')
      cy.get('tbody')
        .find('tr')
        .should('have.length', 4)
    })
  })

  // Test for When the user does delete the item
  describe('For a confirmed delete operation', () => {
    it('reduces the no. of items by 1', () => {
      cy.get('tbody')
        .find('tr')
        .should('have.length', 4)
      // Clicks delete link of 3rd item in list
      cy.get('tbody')
        .find('tr')
        .eq(2)
        .find('td')
        .eq(9)
        .find('a')
        .click()
      // Click confirmation button
      cy.get('button')
        .contains('Delete')
        .click()
      cy.get('tbody')
        .find('tr')
        .should('have.length', 3)
    })
  })
  // Test for When the user does NOT delete the item
  describe('For a cancelled delete operation', () => {
    it('leaves the list unchanged', () => {
      cy.get('tbody')
        .find('tr')
        .should('have.length', 4)
      // Click delete link of 3rd item in the list
      cy.get('tbody')
        .find('tr')
        .eq(2)
        .find('td')
        .eq(9)
        .find('a')
        .click()
      // Click cancel button
      cy.get('button')
        .contains('No Take Me Back')
        .click()
      cy.get('tbody')
        .find('tr')
        .should('have.length', 4)
    })
  })
})
