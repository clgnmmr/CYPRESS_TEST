/// <reference types="cypress" />

context('Demo', () => {
  
  var username='username'
  var password='password'
var para=500
var tarih='2022-05-19'

  it('Login testi', () => {
   // http://zero.webappsecurity.com/
   cy.visit('http://zero.webappsecurity.com/')
   cy.wait(1*1000)
   cy.get('#signin_button').click()
   cy.get('#user_login').type(username).should('have.value',username)
   cy.get('#user_password').should('be.empty')
   cy.get('#user_password').type(password).should('not.be.null')
   cy.get('[name="submit"]').click()
   cy.url().should('eq','http://zero.webappsecurity.com/bank/account-summary.html')
   cy.url().should('include','account-summary.html')
   cy.get('#pay_bills_tab > a').click()
   cy.url().should('include','pay-bills.html')
   cy.get('#sp_amount').type(para).should('have.value',para)
   cy.get('#sp_date').type(tarih).should('have.value',tarih)
   cy.get('#pay_saved_payees').click()
   cy.url().should('include','pay-bills-saved-payee.html')
   cy.contains('The payment was successfully submitted.')

  })
})
