
const allButtons = document.getElementById('allbuttons')

const operatorButtons = document.querySelectorAll('.operator')

// function getOperator(){
    // operatorButtons.addEventListener('click', (event)=>{
    //     console.log(event.target.value)
    // })
// }
    
console.log(operatorButtons.value)

const display = document.getElementById('currentdisplay')
const history = document.getElementById('history')


let x=''
let totals = []
let final = 0


allButtons.addEventListener('click', (event) =>{
    const buttonClick = event.target.nodeName === 'BUTTON'
    if (event.target.dataset.type === 'number'){
        console.log(event.target.value)
        let addNumber = event.target.value
        x += addNumber
        console.log('Current value of x is ' + x)
        display.textContent += event.target.textContent
        // return newX
    }

    if (event.target.dataset.type === 'operator'){
        let currentOperator = event.target.value
        totals.push(currentOperator)
        console.log('The operator that was pushed was ' + currentOperator)
        
        totals.push(x)
            x = ''
            console.log(totals)
        // history.textContent = totals[0] + ' ' + event.target.value
        // display.textContent = ''
        // x = 0
        
    }

    if (event.target.dataset.type === 'equal'){
        totals.push(x)
        console.table('The new array is ' + totals)
        console.log('The equals was pushed ' + event.target.value)

        final = operate(totals[0], parseInt(totals[1]),parseInt(totals[2])) 
        console.log(final)

        console.log('The result of ' + totals[1] + ' ' + totals[0] + ' ' + totals[2] + ' was ' + final)
    } 
})   
    
    // console.log(event.target.dataset.type)




function operate(op, x, y){
    if (op === '+'){
        sum(x,y)
    } else if (op === '-'){
        substract(x,y)
    } else if (op === 'x'){
        multiply(x,y)
    } else if (op === '/'){
        divide(x,y)
    }
}

function sum(x, y){
    return x + y
}

function substract(x,y){
    return x - y
}

function multiply(x,y){
    console.log(x)
    console.log(y)
    return x*y

}

function divide(x,y){
    return x/y
}
