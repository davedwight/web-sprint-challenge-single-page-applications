describe('Users App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3002/pizza')
    })

    const nameInput = () => cy.get('input[name=name]')
    const sizeSelector = () => cy.get('select[name=size')
    const pepperoniCheckbox = () => cy.get('input[name=pepperoni]')
    const mushroomsCheckbox = () => cy.get('input[name=mushrooms]')
    const olivesCheckbox = () => cy.get('input[name=olives]')
    const peppersCheckbox = () => cy.get('input[name=peppers]')
    const sausageCheckbox = () => cy.get('input[name=sausage]')
    const submitBtn = () => cy.get('button')

    it('sanity check', () => {
        expect(1+2).to.equal(3)
        expect(2+2).not.to.equal(5)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    it('the proper elements are showing', () => {
        nameInput().should('exist')
        sizeSelector().should('exist')
        pepperoniCheckbox().should('exist')
        mushroomsCheckbox().should('exist')
        olivesCheckbox().should('exist')
        peppersCheckbox().should('exist')
        sausageCheckbox().should('exist')
        submitBtn().should('exist')
    })

    describe('Filling out the inputs', () => {
        it('can navigate to the site', () => {
            cy.url().should('include', 'localhost')
        })

        it('can type in the name input', () => {
            nameInput()
                .should('have.value', '')
                .type('Hello hello')
                .should('have.value', 'Hello hello')
        })

        it('can check multiple checkboxes', () => {
            pepperoniCheckbox()
                .should('not.be.checked')
                .check({ force: true })
                .should('be.checked')
            mushroomsCheckbox()
                .should('not.be.checked')
                .check({ force: true })
                .should('be.checked')
        })

        it('the submit button starts out disabled', () => {
            submitBtn().should('be.disabled')
        })

        it('the submit button enables when name has a value and a size is selected', () => {
            nameInput().type('hello hello')
            sizeSelector().select('12"')
            submitBtn().should('not.be.disabled')
        }) 
    })
})