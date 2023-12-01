// DOM Manipulation

// Bikin elemen baru
const pBaru = document.createElement('p');

// Bikin isi elemen
const textPbaru = document.createTextNode('Paragraf baru');

// Gabungkan elemen dan isinya (sisipkan isi elemen ke dalam elemen nya)
pBaru.appendChild(textPbaru);

// Simpan pBaru di akhir Section A
// Ambil Section A
const sectionA = document.getElementById('a');

// Sisipkan di html
sectionA.appendChild(pBaru);

// CARA SISIPKAN ELEMENT DI TENGAH ELEMEN LAIN

// bikin elemen dulu
const liBaru = document.createElement('li');
// bikin isinya
const textLiBaru = document.createTextNode('Item Baru');
// Gabungkan elemen dan isinya (sisipkan isi elemen ke dalam elemen nya)
liBaru.appendChild(textLiBaru);
// Ambil Parentnya
const ul = document.querySelector('section#b ul');
// Ambil elemet setelahnya
const li2 = document.querySelector('section#b ul li:nth-child(2)');
// console.log(li2);
// Simpan di html
ul.insertBefore(liBaru, li2);

// remove
// ambil Parentnya(sudah ada)
// ambil elementnya
const link  = document.getElementsByTagName('a')[0];
// hapus elementnya
sectionA.removeChild(link);

// replace element
// tangkap parentnya
const sectionB = document.getElementById('b');
// tangkap element yang mau direplace
const p4 = document.querySelector('section#b p');
// console.log(p4);
// lalu bikin element baru
const h2Baru = document.createElement('h2');
// Bikin Isi element
const textH2Baru = document.createTextNode('Judul Baru');
// Gabungkan element dan text
h2Baru.appendChild(textH2Baru);
// Replace element ke tag html sebelumnya
sectionB.replaceChild(h2Baru, p4);




// Tambah item ke 4
// bikin elementnya dulu
const item3 = document.createElement('li');
// Bikin isinya
const textItem3 =document.createTextNode('Halo nama saya Sandhika, Salam kenal ya...');
// Gabungkan isi dan elemenya
item3.appendChild(textItem3);
// ambil parentnya dulu(ul udah ada)
// Ambil element setelahnya
const li3 = document.querySelectorAll('li')[3];
// console.log(li3);
// sisipkan element ke htmlnya
ul.insertBefore(item3, li3)


// Sisipkan di pertama
// Bikin elemet baru
const newElemen = document.createElement('li');
// Bikin isi elementnya
const textNewElement = document.createTextNode('Halo Doddy Firmansyah, selamat datang');
// gabungkan 
newElemen.appendChild(textNewElement);
// tangkap parentnya
// ul sudah ada

// sisipkan elemetnya
ul.prepend(newElemen);

pBaru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor ="lightgreen";
h2Baru.style.backgroundColor = "lightgreen";
item3.style.backgroundColor = "lightgreen";
newElemen.style.backgroundColor = "lightgreen";








