let allQuestions = [{
    'question': 'Wer hat HTML erfunden?',
    'answer_1': 'Someone',
    'answer_2': 'Apeared from nowhere',
    'answer_3': 'Some genius',
    'answer_4': 'Tim Berners-Lee',
    'right_answer': 3
},
{
    'question': 'Was bedeutet das HTML Tag &lt;a&gt;?',
    'answer_1': 'Some Tag',
    'answer_2': 'Italic',
    'answer_3': 'Some genius',
    'answer_4': 'Ein Link',
    'right_answer': 4
},
{
    'question': 'Wer hat HTML erfunden?',
    'answer_1': 'Someone',
    'answer_2': 'Apeared from nowhere',
    'answer_3': 'Some genius',
    'answer_4': 'Tim Berners-Lee',
    'right_answer': 3
}];

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
    loadQuestion();

    function loadQuestion() {
        document.getElementById('question').innerHTML = allQuestions[question_number -1]['question'];
        document.getElementById('answer1').innerHTML = allQuestions[question_number -1]['answer_1'];
        document.getElementById('answer2').innerHTML = allQuestions[question_number -1]['answer_2'];
        document.getElementById('answer3').innerHTML = allQuestions[question_number -1]['answer_3'];
        document.getElementById('answer4').innerHTML = allQuestions[question_number -1]['answer_4'];
        right_answer = allQuestions[question_number -1]['right_answer'];
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