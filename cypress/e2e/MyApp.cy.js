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
        