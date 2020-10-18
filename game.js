let answer_1 = 'nobody';
let answer_2 = 'apeared from nowhere';
let answer_3 = 'some genius';
let answer_4 = 'Tim Berners-Lee';

function nextQuestion() {
    document.getElementById('question').innerHTML = 'Wer war zuerst? das Ei oder das Hähnchen';

    document.getElementById('answer1').innerHTML = answer_1;
    document.getElementById('answer2').innerHTML = answer_2;
    document.getElementById('answer3').innerHTML = answer_3;
    document.getElementById('answer4').innerHTML = answer_4;
}

function answer(a) {
    let selected_answer;
    
    if (a == 1) {
        selected_answer = answer_1;
    } else if (a == 2) {
        selected_answer = answer_2;
    } else if (a == 3) {
        selected_answer = answer_3;
    } else {
        selected_answer = answer_4;
    }

    if (selected_answer != answer_4) {
        alert('FALSCH!!!!')
    } else {
        alert('RICHTIG!!!!')
    }
}