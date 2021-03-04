// - [x]  Get the `Name` input and type a name in it.
// - [x]  Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
// - [x]  Get the `Email` input and type an email address in it
// - [x] Get the `password` input and type a password in it
// - [x]  Set up a test that will check to see if a user can check the terms of service box
// - [x] Check to see if a user can submit the form data
// - [x] Check for form validation if an input is left empty

describe('User app', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3001')
    })

    const textInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const submitButton = () => cy.get('button[id="submitBtn"]')
    const checkboxInput = () => cy.get('input[name="tos"]')

    it('get the name input and type a name', () => {
        textInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        submitButton().should('exist')
        checkboxInput().should('exist')
    })

    describe('Filling out the inputs', () => {
        it('submit button is disabled', () => {
            submitButton().should('be.disabled')
        })
    })

})