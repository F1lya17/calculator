/*const box = document.querySelector('.boxes');
box.addEventListener('click', function (event) {
    if (event.target.closest('.boxes__elem'))
        event.target.classList.toggle('active');
});*/

const calc = document.querySelector('.calc');
const calcResult = document.querySelector('.calc__field')
document.addEventListener('keydown', function (event) {
    if (event.code == 'Backspace') {
        calcResult.innerHTML = `<div class="result">${calcResult.textContent.slice(0, calcResult.textContent.length - 1)}</div>`;
    }
    if (event.code == 'Minus' || event.code == 'Equal') {
        calcResult.innerHTML = `<div class="result">${calcResult.textContent + event.key}</div>`;
    }
    if (event.code == 'Enter') {
        dang_eval(calcResult.textContent.replace('×', '*').replace('÷', '/'));
    }
    if (event.code == 'Slash') {
        calcResult.innerHTML = `<div class="result">${calcResult.textContent + '÷'}</div>`;
    }
    if (event.code == 'Period') {
        calcResult.innerHTML = `<div class="result">${calcResult.textContent + '.'}</div>`;
    }
    if (event.code == 'Digit8' && event.shiftKey) {
        calcResult.innerHTML = `<div class="result">${calcResult.textContent + '×'}</div>`;
    }
    else if (['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0'].indexOf(event.code) != -1) {
        calcResult.innerHTML = `<div class="result">${calcResult.textContent + event.key}</div>`;
    }
})
calc.addEventListener('click', function (event) {
    if (event.target.closest('.digits__elem') && !event.target.closest('.erase') && !event.target.closest('.null')) {
        calcResult.innerHTML = `<div class="result">${calcResult.textContent + event.target.textContent}</div>`;
    }
    if (event.target.closest('.null')) {
        calcResult.innerHTML = `<div class="result"</div>`;
    }
    if (event.target.closest('.erase')) {
        calcResult.innerHTML = `<div class="result">${calcResult.textContent.slice(0, calcResult.textContent.length - 1)}</div>`;
    }
    if (event.target.closest('.signs__elem') && !event.target.closest('.res')) {
        calcResult.innerHTML = `<div class="result">${calcResult.textContent + event.target.textContent}</div>`;
        console.log(event.target.textContent);
    }
    if (event.target.closest('.res')) {
        dang_eval(calcResult.textContent.replace('×', '*').replace('÷', '/'));
    }
});

function calcul() {
    digits = [];
    signs = [];
    temp_dig = '';
    for (i of calcResult.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim()) {
        if (i >= '0' && i <= '9') {
            temp_dig += i;
        }
        else {
            digits.push(parseInt(temp_dig));
            temp_dig = ''
            signs.push(i);
        }
    }
    digits.push(parseInt(temp_dig));
    let result;
    if (signs[0] == '+')
        result = digits[0] + digits[1];
    else if (signs[0] == '-')
        result = digits[0] - digits[1];
    else if (signs[0] == '×')
        result = digits[0] * digits[1];
    else if (signs[0] == '÷')
        result = digits[0] / digits[1];
    for (let i = 2; i < digits.length; i++) {
        if (signs[i - 1] == '+')
            result = result + digits[i];
        else if (signs[i - 1] == '-')
            result = result - digits[i];
        else if (signs[i - 1] == '×')
            result = result * digits[i];
        else if (signs[i - 1] == '÷')
            result = result / digits[i];
    }
    calcResult.innerHTML = `<div class="result">${result}</div>`
}

function dang_eval(val) {
    let res = eval(val);
    calcResult.innerHTML = `<div class="result">${res}</div>`
}