function alertJs() {
  alert('Alert by Javascript');
}

const btn = document.getElementById('btn');

btn.addEventListener('click', () => alert('Click!'));
