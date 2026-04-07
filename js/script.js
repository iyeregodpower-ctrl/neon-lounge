// Wait for the HTML document to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Grab all the tab buttons and all the menu containers
    const tabButtons = document.querySelectorAll('.tab-btn');
    const menuContents = document.querySelectorAll('.menu-content');

    // 2. Loop through every tab button to listen for a click
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            // STEP A: Remove the 'active' class from ALL buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // STEP B: Remove the 'active' class from ALL menu grids (hiding them)
            menuContents.forEach(content => content.classList.remove('active'));

            // STEP C: Add the 'active' class ONLY to the button the user just clicked
            button.classList.add('active');

            // STEP D: Find out which menu to open by looking at the 'data-target' in the HTML
            // (e.g., if data-target="grill", it looks for id="grill")
            const targetId = button.getAttribute('data-target');
            
            // STEP E: Add the 'active' class to that specific menu grid (revealing it)
            document.getElementById(targetId).classList.add('active');
            
        });
    });

});