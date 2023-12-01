// document.querySelector() --> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li = document.querySelector('ul li:nth-child(2)');
li.style.backgroundColor = 'orange';

// document.querySelectorAll();
// const p = document.querySelectorAll('p');
// p.forEach(m => {
//     m.style.backgroundColor = 'lightblue';
// })

// ubah 1 element saja
const p = document.querySelectorAll('p');
p[2].style.backgroundColor = 'lightblue';

console.log(p[0]);

// 1 elemen tapi Menggunakan for
for (let i=0; i < p.length; i++) {
    p[0].style.backgroundColor = 'lightblue';
}

// Mempersempit window
const sectionB = document.querySelector('section#b');
const p5 = sectionB.getElementsByTagName('p')[0];
p5.style.backgroundColor = 'orange';

console.log(p5);

