let question_1 = 'Wer hat HTML erfunden?';

let question_1_answer_1 = 'Someone';
let question_1_answer_2 = 'Apeared from nowhere';
let question_1_answer_3 = 'Some genius';
let question_1_answer_4 = 'Tim Berners-Lee';

let question_2 = 'Was bedeutet das HTML Tag &lt;a&gt;?'
let question_2_answer_1 = 'Some Tag';
let question_2_answer_2 = 'Italic';
let question_2_answer_3 = 'Something';
let question_2_answer_4 = 'Ein Link';

let right_answer;
let question_number = 0;
let progress = 0;

function hideElements() {
    document.getElementById('right-answer').classList.add('d-none');
    document.getElementById('next-btn').classList.add('d-none');
}
function nextQuestion() {
    hideElements();
    question_number = question_number + 1;
    progress = question_number * 10;
    document.getElementById('progress-bar').innerHTML = progress + '%';
    document.getElementById('progress-bar').style.width = progress + '%';
    if (question_number == 1) {
        loadQuestion1();

    }
    if (question_number == 2) {
        loadQuestion2();

    }

    function loadQuestion1() {
        document.getElementById('question').innerHTML = question_1;
        document.getElementById('answer1').innerHTML = question_1_answer_1;
        document.getElementById('answer2').innerHTML = question_1_answer_2;
        document.getElementById('answer3').innerHTML = question_1_answer_3;
        document.getElementById('answer4').innerHTML = question_1_answer_4;
        right_answer = 4;
    }
    
    function loadQuestion2() {
        document.getElementById('question').innerHTML = question_2;
        document.getElementById('answer1').innerHTML = question_2_answer_1;
        document.getElementById('answer2').innerHTML = question_2_answer_2;
        document.getElementById('answer3').innerHTML = question_2_answer_3;
        document.getElementById('answer4').innerHTML = question_2_answer_4;
        right_answer = 4;

    }
}

function answer(a) {


    if (a != right_answer) {
        document.getElementById('wrong-answer').classList.remove('d-none');
        document.getElementById('right-answer').classList.add('d-none');
    } else {

        document.getElementById('right-answer').classList.remove('d-none');
        document.getElementById('wrong-answer').classList.add('d-none');
        document.getElementById('next-btn').classList.remove('d-none')
    }
}