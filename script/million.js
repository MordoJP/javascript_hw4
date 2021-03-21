'use strict';

const questions = ['Вопрос 1', 'вопрос 2', 'вопрос 3'];
const answers1 = [['ответ1.1', 'ответ1.2', 'ответ1.3', 'правильный ответ1'],['ответ2.1', 'ответ2.2', 'ответ2.3', 'правильный ответ2'],['ответ3.1', 'ответ3.2', 'ответ3.3', 'правильный ответ3']];

let questGame = {
    question: '',
    var1: '',
    var2: '',
    var3: '',
    correct: ''
};
let you;

function selection(g, q, a, k) {
    g.question = q[k];
    g.var1 = a[k][0];
    g.var2 = a[k][1];
    g.var3 = a[k][2];
    g.correct = a[k][3];
}

game(questGame, questions);

function game(qG, l) {
    for (let i = 0; i < l.length; i++){
        selection (qG, questions, answers1, i);
        let questArr = Object.values (qG);
        questArr.shift();
        shuffle (questArr);
        checking(i, you, qG, questArr);
        console.log(you, questArr.indexOf(qG.correct));
        if ((you != (questArr.indexOf(qG.correct) + 1)) && (you > 0) && (you < 5)) {
            alert('проиграл');
            break;
        } else if (i === l.length-1) {
            alert('победа');
        }
    }
}

function checking(m, y, q, qA) {
    y = + prompt('Вопрос номер ' + (m + 1) +
        ': \n' + q.question + '.\n вариант 1: ' + qA[0] +
        '\n вариант 2: ' + qA[1] + '\n вариант 3: ' + qA[2] + '\n вариант 4: ' + qA[3]);
    you = y;
    if ((y < 1) || (y > 4) || (isNaN(y) === true)){
        alert ('вы ввели недопустимое значение');
        checking(m, y, q, qA);
    }
}

function shuffle(arr){
    let j, temp;
    for(let i = arr.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}