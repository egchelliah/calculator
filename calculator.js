
const allButtons = document.getElementById('allbuttons')

const operatorButtons = document.querySelectorAll('.operator')
    
console.log(operatorButtons.value)

const display = document.getElementById('currentdisplay')
const history = document.getElementById('history')


let x=''
let totals = []
let result = 0
let currentOperator = ''

//Listen for any button clicks
allButtons.addEventListener('click', (event) =>{
    const buttonClick = event.target.nodeName === 'BUTTON'
    // Store the value of the number, and display it in the window
    if (event.target.dataset.type === 'number'){
        console.log('value of x at the start of the number click is ' + x)
        let addNumber = event.target.value
        x += addNumber

        console.log('Current value of x is ' + x)
        console.log('Current value of totals is ' + totals)
        
        display.textContent += event.target.textContent

        // if (result){
        //     display.textContent=''
        // }

                 
        // return newX
    }

    // Store the operator value
    // Append the value of x to the array
    if (event.target.dataset.type === 'operator'){
        if(result !==0) {
            console.log('Making sure this block of code is hit when you hit the operator after a result')
            totals.push(currentOperator)
            totals.push(result)
            console.log('Assing new x from the previous equals sign and a new operator')
            console.log('The new array is ' + totals)
            result = 0
        } 
        
    
        console.log('The array when this operator was hit is ' + totals)

        if(totals.length===0){
        currentOperator = event.target.value
        totals.push(currentOperator)
        totals.push(x)
        
        x = ''
        history.textContent = totals[1] + ' ' + currentOperator
        display.textContent = ''
        console.log('The operator that was pushed was ' + currentOperator)

                
        console.log(totals)
        }
        else if (totals.length===2){
            totals.push(x)
            console.log('The operator was hit again in a row ' + totals)
            doubleOperator = operate(totals[0], parseInt(totals[1]),parseInt(totals[2]))
            console.log('The result of that double operator was ' + result)
            totals = []
            currentOperator = event.target.value 
            history.textContent = doubleOperator + ' ' + currentOperator
            display.textContent = ''
            totals=[currentOperator, doubleOperator]
            console.log('At the end of the second operator if block, the array of totals is ' + totals)       
        }
        

        x = ''
        
    }

    if (event.target.dataset.type === 'equal'){
        totals.push(x)
        console.table('The new array at the beginning of the equals function is ' + totals)
        console.log('The equals was pushed ' + event.target.value)

        history.textContent += ' ' + totals[2]

        result = operate(totals[0], parseInt(totals[1]),parseInt(totals[2]))
        display.textContent = result
        totals = []
        x = ''
        currentOperator = ''
        console.log('New array after equals is ' + totals)
        console.log('The value of x after the equals is ' + x)
        console.log('The value of result at the end of the equals is ' + result)
        console.log('The value of the operator at the end of the equals is ' + currentOperator)

        // console.log('The result of ' + totals[1] + ' ' + totals[0] + ' ' + totals[2] + ' was ' + final)
    }
    
    if (event.target.dataset.type === 'clear'){
        display.textContent = ''
        history.textContent = ''
        x = ''
        result = 0
        totals = []
        currentOperator = ''


    }
})   
    
    // console.log(event.target.dataset.type)




function operate(op, x, y){
    let finalNum = 0
    if (op === '+'){
        finalNum = sum(x,y)
    } else if (op === '-'){
        console.log('Hit the else statement in the operate function because of the -')
        finalNum = subtract(x,y)
    } else if (op === 'x'){
        finalNum = multiply(x,y)
    } else if (op === '/'){
        finalNum = divide(x,y)
    }

    return finalNum
}

function sum(x, y){
    return x + y
}

function subtract(x,y){
    console.log('hit the subtract function')
    return x - y
}

function multiply(x,y){
    return x*y
}

function divide(x,y){
    return x/y
}
