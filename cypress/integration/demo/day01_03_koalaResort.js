describe ("Koala repor Hotel ",()=>{

    var url="https://qa-environment.koalaresorthotels.com/";

it("Test 1",()=>{

    cy.visit(url);
    cy.get('#navLogon > .nav-link').click();
    //1. yok include 
    cy.url().should("include","Account/Logon");
    //2yol have.text
    cy.get('.row > .mb-4').should("have.text","Log in");
    //3.yol be.visible

    cy.get('.row > .mb-4').should("be.visible");

    //4. yol : eq 

    cy.title().should("eq","KoalaResortHotels - Log in");
     //*5.yol: include.text
     cy.get(".row > .mb-4").should("include.text", "Log in");
     //locate edilen yerde 'Log in' text olarak var mi








})



})