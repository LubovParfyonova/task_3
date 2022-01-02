// Объем цилиндра

const PI = 3.14;
const num1 = +prompt('Введите высоту цилиндра, см');
const num2 = +prompt('Введите диаметр цилиндра, см');


function v(h, d){
    return PI * (d/2) * h;
}

console.log('Объем цилиндра равен ' + v(num1, num2) + ' см.куб');
alert('Объем цилиндра равен ' + v(num1, num2) + ' см.куб');