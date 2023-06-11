const menu = document.querySelector('#menu');
const logobox = document.querySelector('#logobox');

logobox.addEventListener('click', () => {
  menu.classList.toggle('act');
});
