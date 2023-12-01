const card = document.querySelector('.card');
const tutup = document.querySelectorAll('.close');

// console.log(close);
// close.addEventListener('click', function () {
//     card.style.display = 'none';
// })
console.log(tutup)
tutup.forEach(m => {
    m.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    })
})

const cek = document.querySelector('#cek');

// cek.addEventListener('click', function(){
//     console.log()
//     if (this.checked == true) {
//         alert("halo");
//     }
// })

if (cek.checked == true) {
    cek.addEventListener('check', function () {
        alert('halo');
    })
}

console.log(cek.attributes)


// alert('hlo')

