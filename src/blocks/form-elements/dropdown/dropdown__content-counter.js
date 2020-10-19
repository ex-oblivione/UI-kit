let dropdown = $('.dropdown');
let placeholder = $('.dropdown__placeholder').text('Сколько гостей');

$.each(dropdown, function (index) {

  let item = $('.dropdown__content-item'),
    btnClear = $('.dropdown__bottom-item-clear'),
    btnApply = $('.dropdown__bottom-item-apply'),
    dropdownCount = 0;

  btnApply.on('click', function () {
    $('.dropdown__btn,.dropdown__content').toggleClass('active-dropdown');
  })

  btnClear.on('click', function () {
    dropdownCount = 0
    $.each(item, (i, e) => {
      $(e).find('.dropdown__content-counter-value').text(0)
      placeholder.text('Сколько гостей')
    })
  })


  $.each(item, function (index, elem) {
    let itemCount = $(elem).find('.dropdown__content-counter-value'),
      itemCountValue = +$(elem).find('.dropdown__content-counter-value').text(),
      btnPlus = $(elem).find('.dropdown__content-counter-btn_plus'),
      btnMinus = $(elem).find('.dropdown__content-counter-btn_minus');


    btnPlus.on('click', function () {
      itemCountValue = +$(elem).find('.dropdown__content-counter-value').text();

      if (dropdownCount < 20) {
        ++dropdownCount;
        itemCount.text(++itemCountValue);
      }
      if (dropdownCount === 1) {
        placeholder.text(dropdownCount + ' гость');
      } else if (dropdownCount > 1 && dropdownCount < 5) {
        placeholder.text(dropdownCount + ' гостя');
      } else {
        placeholder.text(dropdownCount + ' гостей');
      }
    });

    btnMinus.on('click', function () {
      itemCountValue = +$(elem).find('.dropdown__content-counter-value').text();
      if (itemCountValue >= 1) {
        --dropdownCount;
        itemCount.text(--itemCountValue);
      }
      if (dropdownCount === 0) {
        placeholder.text('Сколько гостей');
      } else if (dropdownCount === 1) {
        placeholder.text(dropdownCount + ' гость');
      } else if (dropdownCount > 1 && dropdownCount < 5) {
        placeholder.text(dropdownCount + ' гостя');
      } else {
        placeholder.text(dropdownCount + ' гостей');
      }
    });
  });
});