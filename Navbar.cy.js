describe('Navbar Links Test', () => {
    it('should redirect to the homepage when "Home" is clicked', () => {
      cy.visit('https://twitter.com');  
      cy.get('[data-testid="loginButton"]').click({ force: true });

        
        cy.get('.r-30o5oe').click().type('Rohit.tamta144473@gmail.com')
        cy.get('[style="background-color: rgb(239, 243, 244); border-color: rgba(0, 0, 0, 0);"] > .css-146c3p1').click({ force: true })
        cy.get('[data-testid="ocfEnterTextTextInput"]').type('Rohittamtaa')
        cy.get('[data-testid="ocfEnterTextNextButton"]').click()

        cy.get('[type="password"]').type('Tamta@123')
        cy.get('[data-testid="LoginForm_Login_Button"] > .css-146c3p1').click({ force: true })

        cy.get('[data-testid="AppTabBar_Home_Link"] > .r-sdzlij').click()

        cy.url('https://x.com/home').should('include', '/home');

     });

     it('should redirect to the profile page when "Profile" is clicked', () => {
         cy.visit('https://twitter.com'); 

         cy.get('[data-testid="loginButton"]').click({ force: true });

        
        cy.get('.r-30o5oe').click().type('Rohit.tamta144473@gmail.com')
        cy.get('[style="background-color: rgb(239, 243, 244); border-color: rgba(0, 0, 0, 0);"] > .css-146c3p1').click({ force: true })
        cy.get('[data-testid="ocfEnterTextTextInput"]').type('Rohittamtaa')
        cy.get('[data-testid="ocfEnterTextNextButton"]').click()

        cy.get('[type="password"]').type('Tamta@123')
        cy.get('[data-testid="LoginForm_Login_Button"] > .css-146c3p1').click({ force: true })
         
         cy.get('[aria-label="Profile"]').click()

         cy.url('https://x.com/Rohittamtaa').should('include', '/Rohittamtaa');


     });

       it('should redirect to the notifications page when "Notifications" is clicked', () => {
         cy.visit('https://twitter.com');  

         cy.get('[data-testid="loginButton"]').click({ force: true });

        
        cy.get('.r-30o5oe').click().type('Rohit.tamta144473@gmail.com')
        cy.get('[style="background-color: rgb(239, 243, 244); border-color: rgba(0, 0, 0, 0);"] > .css-146c3p1').click({ force: true })
        cy.get('[data-testid="ocfEnterTextTextInput"]').type('Rohittamtaa')
        cy.get('[data-testid="ocfEnterTextNextButton"]').click()

        cy.get('[type="password"]').type('Tamta@123')
        cy.get('[data-testid="LoginForm_Login_Button"] > .css-146c3p1').click({ force: true })

        cy.get('[aria-label="Notifications"]').click()

        cy.url('https://x.com/notifications').should('include', '/notifications');

    

     });

       it('should redirect to the messages page when "Messages" is clicked', () => {

        cy.visit('https://twitter.com');

        cy.get('[data-testid="loginButton"]').click({ force: true });

        
        cy.get('.r-30o5oe').click().type('Rohit.tamta144473@gmail.com')
        cy.get('[style="background-color: rgb(239, 243, 244); border-color: rgba(0, 0, 0, 0);"] > .css-146c3p1').click({ force: true })
        cy.get('[data-testid="ocfEnterTextTextInput"]').type('Rohittamtaa')
        cy.get('[data-testid="ocfEnterTextNextButton"]').click()

        cy.get('[type="password"]').type('Tamta@123')
        cy.get('[data-testid="LoginForm_Login_Button"] > .css-146c3p1').click({ force: true })

        cy.get('[aria-label="Direct Messages"]').click()

        cy.url('https://x.com/messages').should('include', '/messages');
    
     });
      
       it('should redirect to the explore page when "Explore" is clicked', () => {
         cy.visit('https://twitter.com');  
         
         cy.get('[data-testid="loginButton"]').click({ force: true });

        
        cy.get('.r-30o5oe').click().type('Rohit.tamta144473@gmail.com')
        cy.get('[style="background-color: rgb(239, 243, 244); border-color: rgba(0, 0, 0, 0);"] > .css-146c3p1').click({ force: true })
        cy.get('[data-testid="ocfEnterTextTextInput"]').type('Rohittamtaa')
        cy.get('[data-testid="ocfEnterTextNextButton"]').click()

        cy.get('[type="password"]').type('Tamta@123')
        cy.get('[data-testid="LoginForm_Login_Button"] > .css-146c3p1').click({ force: true })

        
        cy.get('[aria-label="Search and explore"]').click()

        cy.url('https://x.com/explore').should('include', '/explore');

     });

       it('should open the Grok (AI Chatbot) link and function', () => {
         cy.visit('https://twitter.com');  // Visit the homepage
         
         cy.get('[data-testid="loginButton"]').click({ force: true });

        
        cy.get('.r-30o5oe').click().type('Rohit.tamta144473@gmail.com')
        cy.get('[style="background-color: rgb(239, 243, 244); border-color: rgba(0, 0, 0, 0);"] > .css-146c3p1').click({ force: true })
        cy.get('[data-testid="ocfEnterTextTextInput"]').type('Rohittamtaa')
        cy.get('[data-testid="ocfEnterTextNextButton"]').click()

        cy.get('[type="password"]').type('Tamta@123')
        cy.get('[data-testid="LoginForm_Login_Button"] > .css-146c3p1').click({ force: true })

        cy.get('[aria-label="Grok"]').click()

        cy.url('https://x.com/i/grok').should('include', '/grok');

     });

       it('should expand the "More" options menu when clicked', () => {
         cy.visit('https://twitter.com');  // Visit the homepage
         
         cy.get('[data-testid="loginButton"]').click({ force: true });

        
         cy.get('.r-30o5oe').click().type('Rohit.tamta144473@gmail.com')
         cy.get('[style="background-color: rgb(239, 243, 244); border-color: rgba(0, 0, 0, 0);"] > .css-146c3p1').click({ force: true })
         cy.get('[data-testid="ocfEnterTextTextInput"]').type('Rohittamtaa')
         cy.get('[data-testid="ocfEnterTextNextButton"]').click()
 
         cy.get('[type="password"]').type('Tamta@123')
         cy.get('[data-testid="LoginForm_Login_Button"] > .css-146c3p1').click({ force: true })
 
         cy.get('[aria-label="More menu items"]').click()
 
         

     });

       it('should redirect to the homepage when the Navbar logo is clicked', () => {
         cy.visit('https://twitter.com');  
         
         cy.get('[data-testid="loginButton"]').click({ force: true });

        
         cy.get('.r-30o5oe').click().type('Rohit.tamta144473@gmail.com')
         cy.get('[style="background-color: rgb(239, 243, 244); border-color: rgba(0, 0, 0, 0);"] > .css-146c3p1').click({ force: true })
         cy.get('[data-testid="ocfEnterTextTextInput"]').type('Rohittamtaa')
         cy.get('[data-testid="ocfEnterTextNextButton"]').click()
 
         cy.get('[type="password"]').type('Tamta@123')
         cy.get('[data-testid="LoginForm_Login_Button"] > .css-146c3p1').click({ force: true })
 
         cy.get('[aria-label="X"]').click()
 
         cy.url('https://x.com/home').should('eq', 'https://x.com/home');
     });

       
});
  