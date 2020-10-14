let count = 0;
let btnPlus = document.querySelector('.dropdown__content-counter-btn_plus');
let btnMinus = document.querySelector('.dropdown__content-counter-btn');

let counterValue = document.querySelector('.dropdown__content-counter-value');

btnPlus.onclick = function () {
  count++;
  counterValue.innerHTML = count;
};

btnMinus.onclick = function () {
  if (count > 0) count--;
  counterValue.innerHTML = count;
};