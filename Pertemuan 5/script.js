const p3 = document.querySelector('.p3');
function ubwarna () {
    p3.style.backgroundColor = "lightBlue";
}

function ubahWarna () {
    p2.style.backgroundColor = "lightBlue";
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna;

// ambil p4
const p4 = document.querySelector('section#b p');


p4.addEventListener('click', function() {
    // ambil container
const ul = document.querySelector('section#b ul');
// bikin tag
const  liBaru = document.createElement('li');
// bikin isinya
const textLiBaru = document.createTextNode('Text Baru');
// Gabungkan
liBaru.appendChild(textLiBaru);
// taruh di html
// container.appendChild(tag);
ul.appendChild(liBaru);
})

// iseng
// ambil p1
// const p1 = document.querySelector('.p1');
// p1.addEventListener('click', function () {

// }) 
// // ambil container
// const p = document.querySelector('section#a');
// // bikin tag baru
// const pBaru = document.createElement('p');
// // bikin isinya
// const textPBaru = document.createElement('Halo nama saya Sandhika Galih salam kenal');
// // gabungin
// pBaru.appendChild(textPBaru);
// // taruh di html
// p.appendChild(pBaru);
const p0 = document.querySelector('.iseng');
const p10 = document.querySelector('.p1');
// p0.style.display = "none";
// console.log(p0);
p10.addEventListener('click', function() {
    // p0.classList.add('');
    p0.classList.toggle('iseng2');
})
console.log(p0);











