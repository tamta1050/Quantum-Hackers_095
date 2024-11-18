describe('Signin and Signup', () => {
    it('Verify Sign in fields.', () => {

        cy.visit("https://x.com/")

        cy.wait(3000)

        cy.get('[data-testid="loginButton"]').click({ force: true });



        cy.get('.r-nllxps').should('contain', 'Sign in to XSign in with AppleorPhone, email address, or username')



    });

    it('Sign in with valid credentials', () => {

        cy.visit('https://twitter.com');
        cy.get('[data-testid="loginButton"]').click({ force: true });


        cy.get('.r-30o5oe').click().type('Rohit.tamta144473@gmail.com')
        cy.get('[style="background-color: rgb(239, 243, 244); border-color: rgba(0, 0, 0, 0);"] > .css-146c3p1').click({ force: true })
        cy.get('[data-testid="ocfEnterTextTextInput"]').type('Rohittamtaa')
        cy.get('[data-testid="ocfEnterTextNextButton"]').click()

        cy.get('[type="password"]').type('Tamta@123')
        cy.get('[data-testid="LoginForm_Login_Button"] > .css-146c3p1').click({ force: true })


    });

    it('Sign in with Invalid credentials', () => {

        cy.visit('https://twitter.com');
        cy.get('[data-testid="loginButton"]').click({ force: true });


        cy.get('.r-30o5oe').click().type('Rohit.tamta144473@gmail.com')
        cy.get('[style="background-color: rgb(239, 243, 244); border-color: rgba(0, 0, 0, 0);"] > .css-146c3p1').click({ force: true })
        cy.get('[data-testid="ocfEnterTextTextInput"]').type('Rohittamtaa')
        cy.get('[data-testid="ocfEnterTextNextButton"]').click()

        cy.get('[type="password"]').type('Rohit@123')
        cy.get('[data-testid="LoginForm_Login_Button"] > .css-146c3p1').click({ force: true })

        cy.wait(4000)

        cy.get('[data-testid="toast"]').should('have.text', 'Wrong password!')

    });

    it("Verify the Forgot Password link works and redirects to the Password reset page", () => {

        cy.visit('https://twitter.com');
        cy.get('[data-testid="loginButton"]').click({ force: true });

        cy.get('[style="background-color: rgba(0, 0, 0, 0); border-color: rgb(83, 100, 113);"] > .css-146c3p1 > .r-dnmrzs > .css-1jxf684').click({ force: true })

        cy.get('.r-knv0ih > .css-175oi2r > .css-146c3p1 > :nth-child(1) > .css-1jxf684').should('have.text', 'Enter the email, phone number or username associated with your account to change your password.')





    });

    it("Verify the Sign Up button redirects to the sign-up page", () => {

        cy.visit("https://x.com/")

        cy.get('[data-testid="signupButton"]').click({ force: true });
        cy.get('#modal-header > :nth-child(1) > .css-1jxf684').should('have.text', 'Create your account')



    });

    it.only("Verify new user registration with valid data", () => {

        cy.visit("https://x.com/")

        cy.get('[data-testid="signupButton"]').click({ force: true });

        cy.get('[name="name"]').type('Test01')


        cy.get('[name="email"]').click().type('Testmail001@gmail.com')
        //cy.get('.r-16xksha > [data-testid]').click()
        cy.get('.r-16y2uox.r-1a11zyx').click()

    });

    it("Verify email validation works during user registration", () => {

        cy.visit("https://x.com/")

        cy.get('[data-testid="signupButton"]').click({ force: true });

        cy.get('[name="name"]').type('Test01')


        cy.get('[name="email"]').click().type('Testmail001@gmail.com')
        cy.get('#SELECTOR_4_LABEL').click()

    });

    it("Verify user registration failure with invalid data.", () => {

        cy.visit("https://x.com/")

        cy.get('[data-testid="signupButton"]').click({ force: true });

        cy.get('[name="name"]').type('Test01')


        cy.get('[name="email"]').click().type('Testmail001@gmail.com')
        cy.get('#SELECTOR_4_LABEL').click()

    });



});