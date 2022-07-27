

describe("Navigation",()=>{
     
    let url="https://qa-environment.koalaresorthotels.com/";

     it.skip("back,forward,reflesh",()=>{

        cy.visit(url);
        cy.wait(4000);
        cy.contains("Log in").click();

        //cy.go("back")
        // onceki sayfaya doner(1)

        cy.go(-1);

        cy.wait(2000);
        // onceki sayfaya doner(1)

        cy.go("forward");



        cy.wait(2000);

        cy.go(1);
        
        cy.reload();
    })
     it("chain navigation ",()=>{

        cy.visit(url);

        cy.contains("Log in").click().go("back").go("forward").go("back");
        cy.pause(); // testi durdurur browser da acılan sayfada play tusu aktif olur 
        cy.reload(true).contains("Log in").should("be.visible");

     })
     



})