

const totalScore = {playerScore : 0, computerScore : 0}
const getComputerChoice = () => {
  const rpsChoice = ['Rock', 'Paper', 'Scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return rpsChoice[randomNumber]
}
const playGame = () => {
  const rpsButtons = document.querySelectorAll('.rpsButton')
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () =>  onClickRPS(rpsButton.value)
  })

  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = ()  => endGame(totalScore)
}
playGame()
const onClickRPS = (playerChoice) => {
  console.log({playerChoice})
  const computerChoice = getComputerChoice()
  console.log({computerChoice})
  const score = getResult(playerChoice, computerChoice)
  totalScore['playerScore'] += score
  console.log({score})
  console.log(totalScore)
  showResult(score, playerChoice, computerChoice)
}
const showResult = (score, computerChoice, playerChoice) => {
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  if(score == -1){
   resultDiv.innerText = 'You Loose'
  }else if(score == 0){
    resultDiv.innerText =  "It's a tie"
  }else{
    resultDiv.innerText = 'You Won'
  }
  handsDiv.innerText = `Person: ${playerChoice} vs Computer: ${computerChoice}`
  playerScoreDiv.innerText =`Your Score: ${totalScore['playerScore']}`
}
const getResult = (playerChoice, computerChoice) => {
  let score;
  if(playerChoice === computerChoice){
    score = 0
  } else if(playerChoice == 'Rock' && computerChoice == 'Scissors'){
    score = 1
  }
    else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
    score = 1
  }
    else if(playerChoice == 'Scissors' && computerChoice == 'Paper'){
    score = 1
  } else {
    score = -1
  }
  return score
}
const endGame = (playerChoice) => {
    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0
  
    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')

    resultDiv.innertext = " "
    handsDiv.innerText = " "
    playerScoreDiv.innerText = " "
}