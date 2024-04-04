document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button');

  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      const workDiv = this.nextElementSibling;

      if (workDiv.style.display === 'none' || workDiv.style.display === '') {
        workDiv.style.display = 'block';
      } else {
        workDiv.style.display = 'none';
      }
    });
  });
});
