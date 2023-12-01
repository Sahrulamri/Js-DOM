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
    })
})