const game = {
    playerChoice : document.getElementById("playerChoice"),
    counter : 0,
    playerChoiceArray : [],
}



function rollRandomNumber(){
    let randomNumber = Math.ceil(Math.random() * 100)
    return randomNumber
}
const playerChoice = document.getElementById("playerChoice")
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
let level = 10

// makes lifes for player when he runs game for the first time(or refreshes the page)
createHearts(level)

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
        clearInputAndCounterPlus()
        removeHeart()
        youLost()
        
        
    }
    // Jeśli liczba jest mniejsza od szukanej
    else if(calcWindow.innerText < rand){
        console.log(rand)
        moreOrLessInfo()
        clearInputAndCounterPlus()
        removeHeart()
        youLost()
    
    // Jeśli gracz trafi liczbę
    } else {
        moreOrLessInfo()
        clearInputAndCounterPlus()
        console.log(rand)
        
    }
}


function clearInputAndCounterPlus(){
    playerChoiceArray.push(calcWindow.innerText)
    const para = document.createElement("div");
    const node = document.createTextNode(`${calcWindow.innerText}`);
    para.appendChild(node);
    document.querySelector('.previousResults').appendChild(para);
    calcWindow.innerText = ''
    level --
    tryCounter.innerText = `Lives left: ${level}`
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
    level = 10
    tryCounter.innerText = `Try counter: ${level}`
    // clear used Numbers
    document.querySelector('.previousResults').innerHTML = ''
    // clear info that you won
    errorInfo.classList.toggle('hidden')
    // show again input and verify button
    document.querySelector('.inputContainer')
    // toss new random number
    rand = rollRandomNumber()
    createHearts(level)
    
}


let calcWindow = document.querySelector('.window')

keys.forEach((el) => {
    el.addEventListener('click', function (element){
        calcWindow.innerText += element.srcElement.innerText

    })
})

const clearButton = document.querySelector('.keyClear')
clearButton.addEventListener('click', clearBoard)

function clearBoard(){
    calcWindow.innerText = ''
}

function removeHeart(){
    const heart = document.querySelector('.heart');
    document.querySelector('.lifes').removeChild(heart);
    
}


function createHearts(level){
    for(let i = 1; i <= level ; i++){
        const heart = document.createElement('img')
        heart.setAttribute('src','img/pixelHeart.jpg')
        heart.setAttribute('class','heart')
        document.querySelector('.lifes').appendChild(heart)
    }
}

function youLost(){
    if(level === 0){
        tryCounter.innerText = `Sorry, You lost the game`
        restart.classList.toggle('hidden')
        rollRandomNumber()
    }
}

// Zrobić funkcję resetującą serduszka przed zresetowaniem gry



