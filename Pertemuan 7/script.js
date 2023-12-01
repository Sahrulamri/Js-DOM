function getPilihanKomputer () {
    const comp = Math.random();
    if (comp <= 0.34) {
        return 'gajah';
    } else if (comp >= 0.35 && comp <= 0.67 ) {
        return 'orang';
    }  else {
        return 'semut';
    }
}

function getHasil (player, comp) {
    let hasil = '';
    if (player == comp) {
        return hasil = 'Seri';
    } else if (player == 'gajah') {
        if (comp == 'semut') {
            return hasil = 'Kalah';
        }  else {
            return hasil = 'Menang';
        }
    } else if (player == 'orang') {
        if (comp == 'semut') {
            return hasil = 'Menang';
        } else {
            return hasil = 'Kalah';
        }
    } else if (player == 'semut') {
        if (comp == 'gajah') {
            return hasil = 'Menang';
        } else {
            return hasil = 'Kalah';
        }
    }

}

function putar () {
    const gambar = ['gajah', 'orang', 'semut'];
    let gambarKom = document.querySelector('.img-komputer');
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval( function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        gambarKom.setAttribute('src',`img/${gambar[i++]}.png`);
            if (i == gambar.length-1) {
                i = 0;
            }
            
    }, 100);
    
}

let gambarKom = document.querySelector('.img-komputer');
const info = document.querySelector('.info');
const pilihan = document.querySelectorAll('.area-player ul li img');
console.log(pilihan)
pilihan.forEach( pil => {
    pil.addEventListener('click', function () {
            const pilKomputer = getPilihanKomputer();
            const pilPlayer = pil.className;
            const hasil = getHasil(pilPlayer, pilKomputer);
            putar();
            console.log(`Pilihan Komputer = ${pilKomputer}`)
            console.log(`Pilihan Player = ${pilPlayer}`)
            console.log(`Hasil = ${hasil}`);
            setTimeout(() => {
                // Set gambar
            gambarKom.setAttribute('src',`img/${pilKomputer}.png`);
            // tampilkan hasil
            info.innerHTML = hasil;
            }, 1000);
        
        })
})



// let gambarKom = document.querySelector('.img-komputer');
// const info = document.querySelector('.info');
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//     const pilKomputer = getPilihanKomputer();
//     const pilPlayer = pGajah.className;
//     const hasil = getHasil(pilPlayer, pilKomputer);
//     console.log(`Pilihan Komputer = ${pilKomputer}`)
//     console.log(`Pilihan Player = ${pilPlayer}`)
//     console.log(`Hasil = ${hasil}`);
//     // Set gambar
//     gambarKom.setAttribute('src',`img/${pilKomputer}.png`);
//     // tampilkan hasil
//     info.innerHTML = hasil;

// })


