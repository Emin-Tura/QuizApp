const quizData = [
  {
    question: 'How Old is Muhammed Emin Tura?',
    a: '10',
    b: '17',
    c: '22',
    d: '110',
    correct: 'c',
  },
  {
    question: 'What is the most used programming language in 2021?',
    a: 'Java',
    b: 'JavaScript',
    c: 'C++',
    d: 'Python',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Creative Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Computer Style Sheets',
    d: 'Colorful Style Sheets',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hyper Text Modul Language',
    c: 'Hyper Test Markup Language',
    d: 'Hyperlink Markup Language',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answerEl.checked = false;
    }
  });
}
submitBtn.addEventListener('click', () => {
  //Check too see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
      <button onClick='location.reload()'>Reload</button>`;
    }
  }
  if (answer == undefined) {
    alert('Please tick an option!');
  }
});
