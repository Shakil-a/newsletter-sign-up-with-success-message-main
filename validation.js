document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form');
    const userEmailInput = document.querySelector('#email-input');
    const errorDiv = document.querySelector('#email-error');
    const emailPatternRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form submission
      
      let error = '';
      const emailValue = userEmailInput.value.trim();
  
      if (!emailValue) {
        error = 'Please provide an email';
      } else if (!emailPatternRegex.test(emailValue)) {
        error = 'Valid email required';
      }
  
      if (error) {
        errorDiv.textContent = error;
        errorDiv.style.color = 'hsl(4, 100%, 67%)';
        userEmailInput.style.borderColor = 'hsl(4, 100%, 67%)';
      } else {
        window.location.href = 'success-page.html';
      }
    });
  });
  
