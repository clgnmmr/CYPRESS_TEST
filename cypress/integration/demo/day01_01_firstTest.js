describe("My First Test ",()=>{

    var url="https://www.google.com.tr/";

    it("URL Testi",()=>{
    
        cy.visit(url);
        cy.url().should("include","com","//");
        cy.url().should("include","google");
        cy.url().should("include","www")

    })

    it("Title Testi",()=>{

     cy.visit(url);
     cy.title().should("eq","Google");
        

    })

})