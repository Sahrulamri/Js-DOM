// DOM Selection
// Get element by id
const judul = document.getElementById('judul');

judul.style.color = 'red';
judul.style.backgroundColor = '#ddd';
judul.innerHTML = 'Sandhika Galih';

// Document get element by tagName -> HTML Collection
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightBlue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diubah dari javascript';



















