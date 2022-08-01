function rollRandomNumber(){
    let randomNumber = Math.ceil(Math.random() * 100)
    return randomNumber
}
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
const inputContainer = document.querySelector('.inputContainer')
let keys = document.querySelectorAll('.key')
let keyString = ''
let keyCont = document.querySelector('.key').innerText

// making random number displays in the box!
let rand = document.querySelector('.hiddenNumber').innerText = rollRandomNumber()

document.querySelector('.button').addEventListener('click', checkForValid)


function checkForValid(){
    if(calcWindow.innerText === ''){
        errorInfo.classList.toggle('hidden')
        errorInfo.style.color = 'rgb(211, 207, 207)'
        errorInfo.innerText = 'Please enter valid number from 0 to 100'
        notValidInput()
    }
    // Jeśli liczba jest większa od szukanej
    else if(calcWindow.innerText > rand){
        console.log(rand)
        moreOrLessInfo()
        timeChangeAndCounterText()
        clearInputAndCounterPlus()
        
    }
    // Jeśli liczba jest mniejsza od szukanej
    else if(calcWindow.innerText < rand){
        console.log(rand)
        moreOrLessInfo()
        timeChangeAndCounterText()
        clearInputAndCounterPlus()
    } else {
        moreOrLessInfo()
        clearInputAndCounterPlus()
        makeResetButton()
        console.log(rand)
        
    }
}


function timeChangeAndCounterText(){
    setTimeout(function(){
        box.style.backgroundColor = 'white'
        box.innerText = ''
    },1000)
}

function clearInputAndCounterPlus(){
    playerChoiceArray.push(calcWindow.innerText)
    const para = document.createElement("div");
    const node = document.createTextNode(`${calcWindow.innerText}`);
    para.appendChild(node);
    document.querySelector('.previousResults').appendChild(para);
    calcWindow.innerText = ''
    counter++
    tryCounter.innerText = `Try counter: ${counter}`
}

function notValidInput(){
        setTimeout(function(){
            errorInfo.classList.toggle('hidden')
        },2000)
}





// INFO DZIAŁA
function moreOrLessInfo(){
    if(calcWindow.innerText > rand){
        errorInfo.classList.toggle('hidden')
        errorInfo.style.color = 'rgb(211, 207, 207)'
        errorInfo.innerText = 'Your number is bigger'
        notValidInput()
    }
    else if(calcWindow.innerText < rand){
        errorInfo.classList.toggle('hidden')
        errorInfo.style.color = 'rgb(211, 207, 207)'
        errorInfo.innerText = 'Your number is lesser'
        notValidInput()
    }
    else {
        errorInfo.classList.toggle('hidden')
        errorInfo.style.color = 'rgb(211, 207, 207)'
        errorInfo.innerText = `Congratulations! You guess right! It's ${rand}`
        restart.classList.toggle('hidden')
        rollRandomNumber()
    }
}


// Działa 
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
    rand = rollRandomNumber()
    
}


let calcWindow = document.querySelector('.window')

keys.forEach((el) => {
    el.addEventListener('click', function (element){
        // console.log(element)
        // console.log(element.srcElement.innerText)
        calcWindow.innerText += element.srcElement.innerText
        console.log(calcWindow.innerText)

    })
})

const clearButton = document.querySelector('.keyClear')
clearButton.addEventListener('click', clearBoard)

function clearBoard(){
    calcWindow.innerText = ''
}