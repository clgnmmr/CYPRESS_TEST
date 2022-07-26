
describe("Koala resort Hotel",()=>{

    var url="https://qa-environment.koalaresorthotels.com/"
    const username="Manager";
    const password="Manager1!";

    it("login gitme",()=>{

cy.visit(url);
//1.yol
//cy.get('#navLogon > .nav-link').click()
  //2.yol
  cy.contains("Log in").click();
  cy.get('#UserName').type(username);
  cy.get('#Password').type(password);

  cy.get('#btnSubmit').click();

  cy.url().should("include","UserAdmin");

   


    })



})