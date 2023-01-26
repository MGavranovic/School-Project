'use strict';

const modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
// const otvoriModal = document.querySelectorAll('.prikazi-modal');
const ugasiModal = document.querySelectorAll('.sakri-modal');
const BB = document.getElementById('1');
const TK = document.getElementById('2');
const Krajina = document.getElementById('3');
const Gospodska = document.getElementById('4');
const otvoriModal1 = document.getElementById('modal1');
const otvoriModal2 = document.getElementById('modal2');
const otvoriModal3 = document.getElementById('modal3');
const otvoriModal4 = document.getElementById('modal4');

overlay.classList.add('sakriven');

const prikaziModal = function (e) {
  console.log(e);
  switch (e.target.id) {
    case '1':
      otvoriModal1.classList.remove('sakriven');
      break;
    case '2':
      otvoriModal2.classList.remove('sakriven');
      break;
    case '3':
      otvoriModal3.classList.remove('sakriven');
      break;
    case '4':
      otvoriModal4.classList.remove('sakriven');
      break;
  }
  // modal.classList.remove('sakriven');
  overlay.classList.remove('sakriven');
};

// const sviModali1 = document.querySelector('modal sakriven');
// console.log('modali', sviModali1, document);

const zatvoriModal = function (e) {
  console.log(e);
  let sviModali = document.querySelectorAll('.modal');
  console.log('modali', sviModali, document);
  for (let i = 0; i < sviModali.length; i++) {
    console.log('class name od I', sviModali[i].className);
    console.log('uslov', sviModali[i].className.includes('sakriven'));
    if (!sviModali[i].className.includes('sakriven')) {
      sviModali[i].classList.add('sakriven');
    }
  }
  overlay.classList.add('sakriven');
};

console.log(otvoriModal1, otvoriModal2);

BB.addEventListener('click', prikaziModal);
TK.addEventListener('click', prikaziModal);
Krajina.addEventListener('click', prikaziModal);
Gospodska.addEventListener('click', prikaziModal);

// for (let i = 0; i < otvoriModal.length; i++) {
//   otvoriModal[i].addEventListener('click', prikaziModal);
// }

for (let i = 0; i < ugasiModal.length; i++) {
  ugasiModal[i].addEventListener('click', zatvoriModal);
}
overlay.addEventListener('click', zatvoriModal);

document.addEventListener('keydown', function (e) {
  console.log(e);

  if (e.key === 'Escape') zatvoriModal();
});
