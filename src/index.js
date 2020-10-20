import './style.scss'
import './assets/images/Box.png'
import './blocks/form-elements/masked-text-field/masked-text-field'
import './blocks/form-elements/dropdown/dropdown'
import './blocks/form-elements/dropdown/dropdown__content-counter'

// Отключение transition при загрузке страницы.
$("window").load(function () {
  $("body").removeAttr("id");
});
