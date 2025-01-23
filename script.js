$(document).ready(function() {
  // Initialize EmailJS with your public key
  emailjs.init("znmdwYwDCfI1R2hUZ"); // Replace with your actual public key

  // Handle the hamburger menu click (open/close drawer)
  $('#menu_icon').click(function() {
      $('#drawer').toggleClass('active');
  });

  // Smooth scrolling when a menu item is clicked
  $('a[href^="#"]').click(function(e) {
      e.preventDefault();

      // Get the target section
      var target = $(this).attr('href');

      // Smooth scroll to the target section
      $('html, body').animate({
          scrollTop: $(target).offset().top - 40  // Adjust scroll position
      }, 500);

      // Close the drawer after clicking on a menu item (for mobile)
      if ($('#drawer').hasClass('active')) {
          $('#drawer').removeClass('active');
      }
  });

  // Close drawer when clicking outside of it (for mobile)
  $(document).click(function(event) {
      if (!$(event.target).closest('#drawer, #menu_icon').length) {
          $('#drawer').removeClass('active');
      }
  });

  // Prevent drawer from closing when clicking inside it
  $('#drawer').click(function(e) {
      e.stopPropagation();
  });

  // EmailJS Form Submission
  $("#contact-form").submit(function(e) {
      e.preventDefault();  // Prevent default form submission

      // Log form data to check it's correctly populated
      var name = $('#name').val();
      var email = $('#email').val();
      var subject = $('#subject').val();
      var message = $('#message').val();
      
      console.log(name, email, subject, message);  // Log to check the values

      if (!name || !email || !message) {
          // Show error message if required fields are empty
          $('#msg').text("Please fill in all required fields!").css('color', 'red');
          return;
      }

      // Use EmailJS to send the form data
      emailjs.sendForm('service_1ilwcxb', 'template_58qtj7i', this)
          .then(function(response) {
              console.log('Success:', response);
              
              // Show the success message in a popup
              $('#msg').text("😊 Message sent successfully! 💯").css('margin','10px','color', 'white');
              
              // Show a modal popup for success
             

              // Reset the form fields
              $('#contact-form')[0].reset();
          }, function(error) {
              console.log('Error:', error);
              
              // Show error message in case of failure
              $('#msg').text("Oops! Something went wrong. Please try again.").css('color', 'red');
          });
  });

  // Function to show success message popup
  function showPopup(message) {
      // Create popup div
      var popup = $('<div class="popup"></div>').text(message);
      
      // Style the popup (you can customize these styles)
      popup.css({
          'position': 'fixed',
          'top': '50%',
          'left': '50%',
          'transform': 'translate(-50%, -50%)',
          'background': '#4CAF50',
          'color': 'white',
          'padding': '20px 30px',
          'border-radius': '5px',
          'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.1)',
          'font-size': '16px',
          'text-align': 'center',
          'z-index': '9999'
      });

      // Append to body
      $('body').append(popup);

      // Remove the popup after 3 seconds
      setTimeout(function() {
          popup.fadeOut(500, function() {
              popup.remove();
          });
      }, 3000);
  }
});
