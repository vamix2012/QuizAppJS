let answer_1 = 'Someone';
let answer_2 = 'Apeared from nowhere';
let answer_3 = 'Some genius';
let answer_4 = 'Tim Berners-Lee';

function nextQuestion() {
    document.getElementById('question').innerHTML = 'Wer hat HTML erfunden?';

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
        document.getElementById('wrong-answer').classList.remove('d-none');
        document.getElementById('right-answer').classList.add('d-none');
    } else {
       
        document.getElementById('right-answer').classList.remove('d-none');
        document.getElementById('wrong-answer').classList.add('d-none');
    }
}