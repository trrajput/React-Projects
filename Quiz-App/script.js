const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is Hactoberfest ?',
    answers: [
      { text: 'Competion of Coding', correct: false },
      { text: 'Open source contrbution Event', correct: true },
      { text: 'Technical MCQ test', correct: false },
      { text: 'Holiday ', correct: false }
    ]
  },
  {
   question: 'Which of these is react framework ?',
   answers: [
     { text: 'Django', correct: false },
     { text: 'React', correct: true },
     { text: 'Laravel', correct: false },
     { text: 'Code Igniter ', correct: false }
   ]
 },
 {
   question: 'In which month does hacotber comes ?',
   answers: [
     { text: 'January', correct: false },
     { text: 'October', correct: true },
     { text: 'March', correct: false },
     { text: 'June ', correct: false }
   ]
 },
 {
   question: 'PNG is a ?',
   answers: [
     { text: 'internet format', correct: false },
     { text: 'image format', correct: true },
     { text: 'file format', correct: false },
     { text: 'html format ', correct: false }
   ]
 },
 {
   question: ' OSI stands for?',
   answers: [
     { text: ' Open Source Index', correct: false },
     { text: 'Open Source Initiative', correct: true },
     { text: 'Open Source Image', correct: false },
     { text: 'Open Source Instant', correct: false }
   ]
 },
]
