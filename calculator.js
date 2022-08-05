
const allButtons = document.getElementById('allbuttons')

const display = document.getElementById('display')

let x = 0
let y = 0
let operator;

numArray = [0,1,2,3,4,5,6,7,8,9]

allButtons.addEventListener('click', (event) =>{
    const buttonClick = event.target.nodeName === 'BUTTON'
    if (!buttonClick){
        return
    }
    // display.textContent = event.target.textContent
    if (event.target.value in numArray){
        let x = event.target.value
        console.log('Current value of x is ' + event.target.value)
    }

})



function operate(){
    sum(),
    substract(),
    multiply(),
    divide()
}

function sum(x, y){
    return x + y
}

function substract(x,y){
    return x - y
}

function multiply(x,y){
    return x*y
}

function divide(x,y){
    return x/y
}