const randomNumber = Math.ceil(Math.random() * 100)
console.log(randomNumber)
const playerChoice = document.getElementById("playerChoice")
let box = document.querySelector('.hidden-number-container')
let number = document.querySelector('.hiddenNumber')
let counter = 0
let playerChoiceArray = []
const tryCounter = document.querySelector('h2')
let usedNumbers = document.querySelector('.used-numbers')
let errorInfo = document.querySelector('.errorInfo')
let resultsArray = document.querySelector('.array')
const restart = document.querySelector('.reset')

// making random number displays in the box!
let rand = document.querySelector('.hiddenNumber').innerText = randomNumber

document.querySelector('.button').addEventListener('click', checkForValid)


function checkForValid(){
    if(playerChoice.value === ''){
        errorInfo.classList.toggle('hidden')
        errorInfo.style.color = 'rgb(211, 207, 207)'
        errorInfo.innerText = 'Please enter valid number from 0 to 100'
        notValidInput()
    }
    // Jeśli liczba jest większa od szukanej
    else if(playerChoice.value > rand){
        moreOrLessInfo()
        timeChangeAndCounterText()
        clearInputAndCounterPlus()
    }
    // Jeśli liczba jest mniejsza od szukanej
    else if(playerChoice.value < rand){
        moreOrLessInfo()
        timeChangeAndCounterText()
        clearInputAndCounterPlus()
    } else {
        moreOrLessInfo()
        clearInputAndCounterPlus()
    }
}


function timeChangeAndCounterText(){
    setTimeout(function(){
        box.style.backgroundColor = 'white'
        box.innerText = ''
    },1000)
}

function clearInputAndCounterPlus(){
    playerChoiceArray.push(playerChoice.value)
    const para = document.createElement("div");
    const node = document.createTextNode(`${playerChoice.value}`);
    para.appendChild(node);
    document.querySelector('.previousResults').appendChild(para);
    playerChoice.value = ''
    counter++
    tryCounter.innerText = `Try counter: ${counter}`
}

function notValidInput(){
        setTimeout(function(){
            errorInfo.classList.toggle('hidden')
        },2000)
}


function moreOrLessInfo(){
    if(playerChoice.value > rand){
        errorInfo.classList.toggle('hidden')
        errorInfo.style.color = 'rgb(211, 207, 207)'
        errorInfo.innerText = 'Your number is bigger'
        notValidInput()
    }
    else if(playerChoice.value < rand){
        errorInfo.classList.toggle('hidden')
        errorInfo.style.color = 'rgb(211, 207, 207)'
        errorInfo.innerText = 'Your number is lesser'
        notValidInput()
    }
    else {
        errorInfo.classList.toggle('hidden')
        errorInfo.style.color = 'rgb(211, 207, 207)'
        errorInfo.innerText = `Congratulations! You guess right! It's ${rand}`
        makeResetButton()
    }
}

function makeResetButton(){
    const del = document.querySelector('.inputContainer')
    const buton = document.createElement("button");
    buton.classList.add('reset')
    buton.setAttribute('onclick', 'resetGame()')
    const butonValue = document.createTextNode(`Reset`);
    buton.appendChild(butonValue);
    document.querySelector('.inputContainer').appendChild(buton);
}

function resetGame(){
    let buton = document.querySelector('.reset')
    buton.classList.toggle('hidden') // hides reset button
    // clear Try Counter
    counter = ''
    tryCounter.innerText = `Try counter: ${counter}`
    // clear used Numbers
    document.querySelector('.previousResults').innerHTML = ''
    // clear info that you won
    errorInfo.classList.toggle('hidden')
    // show again input and verify button
    document.querySelector('.inputContainer')
    // toss new random number
    
}
