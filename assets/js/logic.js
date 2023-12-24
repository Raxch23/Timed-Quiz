const startButton = document.getElementById('start')
const questionsContainer = document.getElementById('questions')
const endScreen = document.getElementById('end-screen')
const timeDisplay = document.getElementById('time')
const scoreDisplay = document.getElementById('final-score')

let currentQuestion = 0
let time = 75

startButton.addEventListener('click', function() {
  document.getElementById('start-screen').classList.add('hide')
  questionsContainer.classList.remove('hide')
  timeDisplay.innerHTML = time
  setInterval(function() {
    time--
    timeDisplay.innerHTML = time
  }, 1000)
})