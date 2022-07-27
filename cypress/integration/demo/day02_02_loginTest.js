describe("Login ",()=>{

    const email = "qwert@gmail.com";
  const psw = "qwert";
   
    var url="https://www.automationexercise.com/"
    const email1 = "jeffry.muller@hotmail.com";
  const psw1 = "123abc";
  it.skip("Test negatif ",()=>{
   
    cy.visit(url);
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('.login-form > form > [type="email"]').type(email);
    cy.get('[type="password"]').type(psw);
    cy.get('.login-form > form > .btn').click();

    cy.get('.login-form > form > p').should("be.visible");
    cy.get('.login-form > form > p').should("have.text","Your email or password is incorrect!");
  })


  
  it("Test pozitif",()=>{
 
   cy.visit(url);
   cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('.login-form > form > [type="email"]').type(email1);
    cy.get('[type="password"]').type(psw1);
    cy.get('.login-form > form > .btn').click();
    cy.get(':nth-child(10) > a').should("be.visible");
  })







})