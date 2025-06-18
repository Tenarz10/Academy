
document.addEventListener('DOMContentLoaded', function() {
  const registrationForm = document.getElementById('registrationForm');

  if (registrationForm) {
      registrationForm.addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent the default form submission

          const fullName = document.getElementById('fullName').value;
          alert(`Thank you for registering, ${fullName}! We will be in touch soon.`);

          registrationForm.reset(); // Reset the form fields
      });
  }
});