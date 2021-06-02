describe('App', () => {
  
    beforeEach(() => {
      cy.visit('https://immense-savannah-13991.herokuapp.com/')
    }) 

    it("Loads the app", () => {
        const counter = cy.get('h1');    
    }) 
     // TC1
    it('Should be able to see the Test APP', () => {
         cy.visit('https://immense-savannah-13991.herokuapp.com/') 
      })
    
    // TC2 -- check 100 items are loaded on the page
    it('Should be able to see the loaded items', () => {
        cy.visit('https://immense-savannah-13991.herokuapp.com/') 
        cy.get('.grid').contains('99 - item-99').should('have.class', 'grid__item')
     })

     // TC4
    it('should be able to select or deselect the items', () => {
      cy.visit('https://immense-savannah-13991.herokuapp.com/') 
      cy.get('.grid').contains('1 - item-1').click()
      cy.get('.grid').contains('5 - item-5').click()
      cy.get('.grid').contains('7 - item-7').click()
      })

      // TC5
    it('should be able to see the selected items after the refresh page', () => {
        cy.visit('https://immense-savannah-13991.herokuapp.com/') 
        cy.get('.grid').contains('1 - item-1').click()
        cy.get('.grid').contains('5 - item-5').click()
        cy.get('.grid').contains('7 - item-7').click()

        cy.visit('https://immense-savannah-13991.herokuapp.com/') 
        cy.get('.grid').contains('1 - item-1').should('have.class', 'grid__item--selected')
        cy.get('.grid').contains('5 - item-5').should('have.class', 'grid__item--selected')
        cy.get('.grid').contains('7 - item-7').should('have.class', 'grid__item--selected')
      })

    
  })