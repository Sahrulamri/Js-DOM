const thumbs = document.querySelectorAll('.thumb');
const gambar = document.querySelector('.gambar');
// let x = null;
thumbs.forEach(m => {
    m.addEventListener('click', function(e) {
        
        const user = e.target.src;
        console.log(user)
        gambar.setAttribute('src', `${user}`);
        gambar.classList.add('fade');
        setTimeout(() => {
            gambar.classList.remove('fade');
        }, 400);
        
        thumbs.forEach( k => {
            k.style.opacity = '1'
        })
        m.style.opacity = '0.5'
        
    } )
    // m.style.opacity = '1';


})

// const container = document.querySelector('.container');
// const jumbo = document.querySelector('.gambar');
// let eOld = null;

// container.addEventListener('click', function(e) {
//     if (e.target.className ==  'thumb') {
//         if (eOld != null) {
//             eOld.classList.remove('active')
//         }

//         jumbo.src = e.target.src;
//         jumbo.classList.add('fade');
//         setTimeout(function() {
//             jumbo.classList.remove('fade');
//         }, 500);

//         e.target.classList.add('active');
//         eOld = e.target;
//     }
// });
