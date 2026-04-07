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

// =====================================
    // VIP BOOKING FORM LOGIC (EMAILJS)
    // =====================================
    const bookingForm = document.getElementById('bookingForm');
    const bookingMessage = document.getElementById('bookingMessage');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop page from reloading

            // Grab the values the user typed in
            const templateParams = {
                user_name: document.getElementById('resName').value,
                user_email: document.getElementById('resEmail').value,
                res_date: document.getElementById('resDate').value,
                res_guests: document.getElementById('resGuests').value,
                message: document.getElementById('resMessage').value
            };

            // Change button text while sending
            const submitBtn = bookingForm.querySelector('button');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = "Sending Request...";

            // Send via EmailJS (Make sure to replace with your actual Service ID and Template ID later if you make a specific one for this!)
            emailjs.send("service_ps6pgde", "template_szx85g8", templateParams)
            .then(() => {
                bookingMessage.innerText = "Reservation Request Sent! We will contact you shortly.";
                bookingMessage.style.color = "#c9a227"; // Neon Gold
                bookingForm.reset(); // Clear the form
                submitBtn.innerText = originalBtnText;
            })
            .catch((error) => {
                console.error("Booking Error:", error);
                bookingMessage.innerText = "Failed to send request. Please try again.";
                bookingMessage.style.color = "red";
                submitBtn.innerText = originalBtnText;
            });
        });
    }