



describe("dorpdown",()=>{
 var url="https://the-internet.herokuapp.com/dropdown";


 it("test",()=>{

   cy.visit(url);

   cy.url().should("include","dropdown");


   // dropdown açma 

   cy.get('#dropdown').select("Option 1").should("have.value","1");

   cy.get('#dropdown').select("1");

   cy.get('#dropdown').select("Option 2").should("have.value","2");


 })





})