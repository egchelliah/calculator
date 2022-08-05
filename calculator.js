
const buttons = document.querySelector('buttons')

let buttonInputs = document.querySelectorAll('input')

console.log(buttons)

console.log(buttonInputs)

buttonInputs.forEach(e => e.addEventListener("click", (event)=>{
    
    console.log(event)

    if(event.target.input==='7'){
        console.log('7')
    }

}))


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