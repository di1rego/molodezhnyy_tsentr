// Маска для телефона
const phoneInput = document.querySelector('#phone');
const btn = document.querySelector('.formBtn');
const mask = new IMask(phoneInput, {
    mask: '+{7}(000)000-00-00',
});

// Модальное окно
document.querySelector('.formBtn').onclick = function () {
    alert('Заявка отправлена!');
}

// Активация кнопки
var inputs = [].slice.call(document.querySelectorAll('input[type="text"], input[type="tel"], input[type="date"]')),
    button = document.querySelector('button');
inputs.forEach(function (el) {
    el.addEventListener('input', checkInputs, false);
});
function checkInputs() {
    var empty = inputs.filter(function (el) {
        return el.value.trim() === '';
    }).length;
    button.disabled = empty !== 0;
}
checkInputs();