describe("hoverover",()=>{

    var url="https://www.amazon.com/";

    it("Test",()=>{
    cy.visit(url);
   
    
   cy.get('.icp-nav-link-inner > .nav-line-2 > .nav-icon').trigger("mouseover");
        
   cy.contains("Change country/region").click();

   cy.get('#icp-dropdown').select("Canada",{force:true});
   


    })



})