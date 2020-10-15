// let count = 0;
// let btnPlus = document.querySelector('.dropdown__content-counter-btn_plus');
// let btnMinus = document.querySelector('.dropdown__content-counter-btn');

// let counterValue = document.querySelector('.dropdown__content-counter-value');

// btnPlus.onclick = function () {
//   count++;
//   counterValue.innerHTML = count;
// };

// btnMinus.onclick = function () {
//   if (count > 0) count--;
//   counterValue.innerHTML = count;
// };

let dropdown = $('.dropdown');


$.each(dropdown, function (index) {
  // console.log('1');
  let item = $('.dropdown__content-item'),
    btnClear = $('.dropdown__bottom-item-clear'),
    dropdownCount = 0;

  btnClear.on('click', function () {
    dropdownCount = 0
    $.each(item, (i, e) => {
      $(e).find('.dropdown__content-counter-value').text(0)
      // placeholder.text('Сколько гостей')
    })
  })

  $.each(item, function (index, elem) {
    // console.log('2');
    let itemCount = $(elem).find('.dropdown__content-counter-value'),
      itemCountValue = +$(elem).find('.dropdown__content-counter-value').text(),
      btnPlus = $(elem).find('.dropdown__content-counter-btn_plus'),
      btnMinus = $(elem).find('.dropdown__content-counter-btn_minus');

    // console.log(dropdownCount);

    btnPlus.on('click', function () {
      itemCountValue = +$(elem).find('.dropdown__content-counter-value').text()
      if (dropdownCount < 21) dropdownCount++ && itemCount.text(++itemCountValue)

      console.log(dropdownCount);
    })

    btnMinus.on('click', function () {
      itemCountValue = +$(elem).find('.dropdown__content-counter-value').text()
      if (itemCountValue >= 1) {
        dropdownCount--
        itemCount.text(--itemCountValue)
      }
    })
  })
})