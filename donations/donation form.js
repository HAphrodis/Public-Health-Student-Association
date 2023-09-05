document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS with your user ID
    emailjs.init("NgzH0IK8N1CrBM5sE");
  
    const form = document.getElementById("contact-form");
    const submitButton = form.querySelector("button[type=submit]");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
  
      // Disable the submit button while processing
      submitButton.disabled = true;
      submitButton.textContent = "Submitting...";
  
      // Simulate an asynchronous form submission with setTimeout
      setTimeout(function () {
        // Send email using EmailJS
        emailjs.send("service_ky7cpsc", "template_g1mbed1", {
          fname: form.fname.value,
          lname: form.lname.value,
          email: form.email.value,
          phone: form.phone.value,
          occupation: form.occupation.value,
          city: form.city.value,
          zip: form.zip.value,
          country: form.country.value,
          // Include other form fields here
        }).then(function (response) {
          console.log("Email sent:", response);
          alert("Your form has been submitted successfully!"); // Customize this message
          form.reset(); // Reset the form after successful submission
        }).catch(function (error) {
          console.error("Email error:", error);
          alert("There was an error sending your form."); // Customize this message
        }).finally(function () {
          // Re-enable the submit button and reset text
          submitButton.disabled = false;
          submitButton.textContent = "Confirm Order";
        });
      }, 2000); // Simulate a 2-second delay (adjust as needed)
    });
  });