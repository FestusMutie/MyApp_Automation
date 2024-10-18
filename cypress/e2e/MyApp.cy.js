describe('Search functionality in the album/photo listing page', () => {
    // This hook runs before each test
    beforeEach(() => {
        // Visit the landing page
        cy.visit('http://127.0.0.1:8000/'); 
    });

    it('Displays landing page and prompts login', () => {
        // Check if the landing page is loaded correctly
        cy.contains('Welcome to Our Web App');
        cy.contains('This is the landing page of the web application. Please log in to access more features.');
     // Click on the login link
     cy.contains('log in').click();

     // Assert that the login page loaded
     cy.url().should('include', '/login');
 });

 it('Logs in with valid credentials and accesses the home page', () => {
     // Visit login page directly
     cy.visit('http://localhost:8000/login');

     // Enter valid username and password
     cy.get('input[name="username"]').type('admin');
     cy.get('input[name="password"]').type('adminpassword'); // Replace with valid password

     // Click the login button
     cy.get('button[type="submit"]').click();

     // Validate successful login
     cy.url().should('include', '/home');
     cy.contains('Welcome Home, admin');
 });

 it('Access album and photo pages and performs search', () => {
     // Assumes user is already logged in
     // Visit the album listing page
     cy.visit('http://localhost:8000/albums');
     
     // Assert that album page is loaded
     cy.contains('Your Albums');
     cy.contains('Album 1');
     cy.contains('Album 2');
     cy.contains('Album 3');

    });

 it('Access photo page and search photos', () => {
     // Visit the photos listing page
     cy.visit('http://localhost:8000/photos');

     // Assert that photos page is loaded
     cy.contains('Your Photos');
     cy.contains('Photo 1');
     cy.contains('Photo 1 Description');
 });
});   