'use strict';

function clickB () {
    let k = document.getElementById('numb_hold').value;
    let obj = {};
    if ((k.length > 3) || (k > 999)) {
        str.innerHTML = 'Слишком большое значение!';
        console.log('Слишком большое значение!')
    } else if (k < 0) {
        str.innerHTML = 'Слишком маленькое значение!';
        console.log('Слишком маленькое значение!')
    } else {
        correct_n(obj, k, str)
    }
}

function correct_n (o, k1, s) {
    let mas = k1.split ('');
    if (mas.length === 3) {
        o.hundreds = mas[0];
        o.tens = mas[1];
        o.units = mas[2];
    } else if (mas.length === 2){
        let mas = k1.split ('');
        o.hundreds = 0;
        o.tens = mas[0];
        o.units = mas[1];
    } else {
        let mas = k1.split ('');
        o.hundreds = 0;
        o.tens = 0;
        o.units = mas[0];
    }
    s.innerHTML = ('Сотни: ' + o.hundreds + ', десятки: ' + o.tens + ', единицы: ' + o.units + '.');
    console.log(o);
}