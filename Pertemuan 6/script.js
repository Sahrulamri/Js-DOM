// Case 1
// const body = document.querySelector('body');
// console.log(body);
const tombol = document.querySelector('.tombol');
console.log(tombol);
tombol.addEventListener('click', function () {
    document.body.classList.toggle('konten');
})

// Buat Tombol Baru

const tombolBaru = document.createElement('button');
const textTombolBaru = document.createTextNode('Acak warna');
tombolBaru.appendChild(textTombolBaru);
tombolBaru.setAttribute('type', 'button');
tombol.after(tombolBaru);

tombolBaru.addEventListener('click', function() {
    const r =Math.round( Math.random() * 225 +0);
    const g =Math.round( Math.random() * 225 +1);
    const b =Math.round( Math.random() * 225 + 1);
    console.log(r);

    // document.body.style.backgroundColor = 'rgb('+ r +', '+ g +','+ b +')';
    document.body.style.backgroundColor =  `rgb(${r}, ${g}, ${b})`;
}) 

const sMerah = document.querySelector('input[name=sMerah]');
const sBlue = document.querySelector('input[name=sBlue]');
const Green = document.querySelector('input[name=sGreen]');

const coba = document.querySelectorAll('input');
console.log(coba)
sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const b = sBlue.value;
    const g = Green.value;

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})

sBlue.addEventListener('input', function() {
    const r = sMerah.value;
    const b = sBlue.value;
    const g = Green.value;

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})
Green.addEventListener('input', function() {
    const r = sMerah.value;
    const g = Green.value;
    const b = sBlue.value;

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})


const TinggiWin = window.innerHeight;
const LebarWin = window.innerWidth;
    
document.body.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    const r = Math.round((x / LebarWin) * 255);
    const g = Math.round( (y / TinggiWin) * 255);
    const b = Math.round((r + g) / 2);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})























