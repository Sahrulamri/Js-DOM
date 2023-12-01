const card = document.querySelector('.card');
const tutup = document.querySelectorAll('.close');

// // console.log(close);
// // close.addEventListener('click', function () {
// //     card.style.display = 'none';
// // })
// console.log(tutup)
tutup.forEach(m => {
    m.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
        e.stopPropagation();
        console.log(e)
    })
})

// const cek = document.querySelector('#cek');

// cek.addEventListener('click', function(){
//     console.log()
//     if (this.checked == true) {
//         alert("halo");
//     }
// })

// console.log(cek.attributes)

const kartu = document.querySelectorAll('.card');
kartu.forEach(function (ka) {
    ka.addEventListener('click', function() {
        console.log('ok')
    })
})

// bubbling
const containner = document.querySelector('.container');
containner.addEventListener('click', function(e) {
    if(e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
})


















