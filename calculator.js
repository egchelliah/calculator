
const allButtons = document.getElementById('allbuttons')

const operatorButtons = document.querySelectorAll('.operator')
    
console.log(operatorButtons.value)

const display = document.getElementById('currentdisplay')
const history = document.getElementById('history')


let x=''
let totals = []
let result = 0


allButtons.addEventListener('click', (event) =>{
    const buttonClick = event.target.nodeName === 'BUTTON'
    if (event.target.dataset.type === 'number'){
        let addNumber = event.target.value
        x += addNumber
        console.log('Current value of x is ' + x)
        display.textContent += event.target.textContent
        // return newX
    }

    if (event.target.dataset.type === 'operator'){
        if(result !==0) {
            x = result
            console.log('Assing new x from the previous result ')
        }
        let currentOperator = event.target.value
        totals.push(currentOperator)
        console.log('The operator that was pushed was ' + currentOperator)
        
        totals.push(x)
            x = ''
            console.log(totals)
        history.textContent = totals[1] + ' ' + event.target.value
        display.textContent = ''
        // x = 0
        
    }

    if (event.target.dataset.type === 'equal'){
        totals.push(x)
        console.table('The new array is ' + totals)
        console.log('The equals was pushed ' + event.target.value)

        console.log('The first number is ' + totals[1])
        console.log('The second number is ' + totals[2])
        console.log('The operator was ' + totals[0])

        history.textContent += ' ' + totals[2]

        result = operate(totals[0], parseInt(totals[1]),parseInt(totals[2]))
        display.textContent = result
        totals = []
        x = result
        console.log('New array after equals is ' + totals)

        // console.log('The result of ' + totals[1] + ' ' + totals[0] + ' ' + totals[2] + ' was ' + final)
    }
    
    if (event.target.dataset.type === 'clear'){
        display.textContent = ''
        history.textContent = ''
        x = ''
        totals = []


    }
})   
    
    // console.log(event.target.dataset.type)




function operate(op, x, y){
    let finalNum = 0
    if (op === '+'){
        finalNum = sum(x,y)
    } else if (op === '-'){
        finalNum = substract(x,y)
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

function substract(x,y){
    return x - y
}

function multiply(x,y){
    console.log(x)
    console.log(y)
    let newThing = x*y
    console.log(newThing)
    typeof(newThing)
    return newThing
    console.log('Getting this console log from multiply function ' + x*y)
    // console.log(typeOf(x*y))
    //return x*y This does not work. Returns undefined

}

function divide(x,y){
    return x/y
}
