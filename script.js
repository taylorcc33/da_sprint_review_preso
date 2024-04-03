document.addEventListener('DOMContentLoaded', () => {
  // Select all the buttons
  const buttons = document.querySelectorAll('.button');

  // Add click event listeners to each button
  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      // The 'work' div related to the clicked button is the next sibling in the DOM
      const workDiv = this.nextElementSibling;

      // Toggle visibility. Adjust this logic based on how you want to show/hide the divs.
      if (workDiv.style.display === 'none' || workDiv.style.display === '') {
        workDiv.style.display = 'block';
      } else {
        workDiv.style.display = 'none';
      }
    });
  });
});
