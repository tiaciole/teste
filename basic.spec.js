/// <reference types="cypress"/>



describe('Cypress basics', () => {
    it.only('Should visit a page and assert title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        
        cy.title().should('be.equal','Campo de Treinamento').and('contain', 'Campo')
     
        

        cy.title().then(title => {
            console.log(title)
        })

        //TODO imprimir o log no console
        //TODO escrever titulo em um campo de texto

    })

    it('Procurar botão e clicar nele', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple').click().should('have.value','Obrigado!')
    })
})