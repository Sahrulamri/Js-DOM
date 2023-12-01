const judul = document.getElementById('judul');
// console.log(judul);
judul.innerHTML = "Sandhika Galih";

const sectionA = document.querySelector('section#a');
sectionA.innerHTML = "Sandhika Galih";

const paragraf4 = document.querySelector('section#b p');
// console.log(paragraf4);
paragraf4.style.backgroundColor = "tomato";

const li = document.getElementsByTagName('li')[0];
// console.log(li);
li.setAttribute('id', 'sandhika');

const item2 = document.querySelector('ul li:nth-child(2)');
// set atribut bersifat menimpa atribut yang sebelumnya udah ada
item2.setAttribute('class', 'item');
console.log(item2);

// iseng

const button = document.querySelector('.btn');
button.addEventListener('click', function() {
    const item3 = document.querySelector('ul li:nth-child(3)');
    item3.classList.toggle('warna');
})
