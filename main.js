const write = document.querySelector('.write')
const display = document.querySelector('.display')
const btn = document.querySelector('.btn')
const start = document.querySelector('.start')
const input = document.querySelector('.input')

const aNum = document.querySelector('.a__number')
const bNum = document.querySelector('.b__number')

const cont__1 = document.querySelector('.cont__1')
const cont__2 = document.querySelector('.cont__2')

const container__3 = document.querySelector('.container__3')
const container__2 = document.querySelector('.container__2')

let counter = 0;
let rating = 0;
let numberOfQuestions = 10;
let goodAnswersCount = 0;
let wrongAnswersCount = 0;
const variableRangeA = 10;
const variableRangeB = 10;

const arrCircleColors = ["blue", "pink", "yellow", "blue", "lightgreen", "orange", "gray", "aqua", "green", "violet", "purple"];

    container__2.style.animation = 'up2 1s paused'
    container__3.style.animation = 'up3 1s paused'
    start.style.visibility = "hidden"

    randomNumberValues();

    btn.addEventListener('click', check )

function check() {

    let value = Number(input.value)
    let valueLength = input.value.length

    if ( Number.isInteger(value)) {
        if ( result == value ) {
            counterQuestions++
            goodAnswersCount++    
            display.style.color = 'rgb(116, 116, 116)'
            display.innerHTML = "Perfect!"
            randomNumberValues();
        } else if ( result != input.value.length && input.value.length > 0 ) {
            counterQuestion++
            wrongAnswersCount++   
            display.style.color = 'rgb(116, 116, 116)'
            display.innerHTML = "Wrong..."
            randomNumberValues();
        } 
        } else if (!Number.isInteger(value)){  
            display.style.color = 'rgb(116, 116, 116)'
            display.innerHTML = "Only numbers !"
            randomNumberValues();
        }
    if ( valueLength === 0 ) {
        display.style.color = 'rgb(116, 116, 116)'
        display.innerHTML = 'You did not enter anything, try again!'
        randomNumberValues();
    }
    if ( counterQuestions == numberOfQuestions ) {
        generatePlayerRating();
        
        btn.style.visibility = "hidden"
        start.style.visibility = "visible"
        aNum.innerHTML = null
        bNum.innerHTML = null
        display.innerHTML = ''
        display.style.color = 'rgb(116, 116, 116)'
        display.innerHTML = `Good answers: ${goodAnswersCount}, Wrong answers: ${wrongAnswersCount},<br> Your rating ( 0 - 5 ): ${rating}`
        btn.removeEventListener('click', check)
        start.addEventListener('click', reset )
        container__3.style.animation = ''
        container__3.style.animation = 'up3 1s forwards'
        container__2.style.animation = ''
        container__2.style.animation = 'up2 1s forwards'
    }  
}

function randomNumberValues() {
    input.value = ''
    let a = Math.floor(Math.random()* variableRangeA )
    let b = Math.floor(Math.random()* variableRangeB )

    let circleRandomColor1 = Math.floor(Math.random() * arrCircleColors.length)
    let circleRandomColor2 = Math.floor(Math.random() * arrCircleColors.length)
    cont__1.style.background = arrCircleColors[circleRandomColor1]
    cont__2.style.background = arrCircleColors[circleRandomColor2]

    aNum.innerHTML = a
    bNum.innerHTML = b
    
    return result = a + b
}

function reset() {
    counter = 0;
    goodAnswersCount = 0;
    wrongAnswersCount = 0;
    rating = 0;

    start.style.visibility = "hidden"
    btn.style.visibility = "visible"

    display.innerHTML = ''

    container__2.style.animation = 'none'
    container__3.style.animation = 'none'
    btn.addEventListener('click', check )

    randomNumberValues()
}

function generatePlayerRatig() {
    if( goodAnswersCount <= 2 ) {
        rating = 1
    }
    if( goodAnswersCount >= 3 && goodAnswersCount <= 4 ) {
        rating = 2
    }
    if( goodAnswersCount >= 5 && goodAnswersCount <= 6 ) {
        rating = 3
    }
    if( goodAnswersCount >= 7 && goodAnswersCount <= 8 ) {
        rating = 4
    }
    if( goodAnswersCount >= 9 && goodAnswersCount <= 10 ) {
        rating = 5
    }
}