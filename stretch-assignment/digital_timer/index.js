const all = document.querySelector('*')
all.style.backgroundColor = 'darkSlateGray'

const secondTens = document.querySelector('#secondTens')
const secondOnes = document.querySelector('#secondOnes')
const colon = document.querySelector('#colon')
const msHundreds = document.querySelector('#msHundreds')
const msTens = document.querySelector('#msTens')
const numbers = document.querySelectorAll('.digit')
const bod = document.getElementsByTagName('body')
bod[0].style.width = '100vw'
bod[0].style.height = '100vh'

msTens.textContent = 0
msHundreds.textContent = 0
secondOnes.textContent = 0
secondTens.textContent = 0

const timerContainer = document.querySelector('.digits')
const btnDiv = document.createElement('div')

btnDiv.style.display = 'block'
btnDiv.style.padding = '0 .7rem'

const btn = document.createElement('button')
btn.textContent = 'Go!'
btn.style.margin = '0 4%'
btn.style.width = '40%'
btn.style.height = '1.5rem'
btn.addEventListener('click', onClick)
btn.style.borderRadius = '30px'
    
const rst = document.createElement('button')
rst.textContent = 'RESET'
rst.style.margin = '0 4%'
rst.disabled = true
rst.style.width = '40%'
rst.style.height = '1.5rem'
rst.addEventListener('click', onReset)
rst.style.borderRadius = '30px'

btnDiv.appendChild(btn)
btnDiv.appendChild(rst)

let entry = document.getElementsByTagName('div')[0]
entry.appendChild(btnDiv)

let secten = 0
let secone = 0
let mshun = 0
let msten = 0

function onClick(){
    btn.disabled = true
    const something = setInterval(changeStuff, 10) 
    function startTimer() {
        changeStuff
    }
    function  killIt (){
        clearInterval(something)
    }
    function changeStuff() {
        if (secten > 1){
            alert(`Woah, there don't go runnin off now.  We top at 10.`)
            killIt()
            debugger
        } else if (msten !== 9) {
            msten++
            msTens.textContent = msten
        } else if (msten ===9 && mshun !== 9) {
            mshun ++
            msten = 0
            msTens.textContent = msten
            msHundreds.textContent = mshun
        } else if (msten === 9 && mshun === 9 && secone !== 9) {
            secone++
            msten = 0
            mshun = 0 
            msTens.textContent = msten
            msHundreds.textContent = mshun
            secondOnes.textContent = secone
        } else if (secone === 9 && mshun === 9 && msten === 9) {
            secten++
            secondTens.textContent = secten
            secone = 0
            secondOnes.textContent = secone
            mshun = 0
            msHundreds.textContent = mshun
            msten = 0
            msTens.textContent = msten
            numbers.forEach((number) => number.classList.add('redDigit'))
            killIt()
        } else {alert(`Something ain't quite right here bud!` )
            killIt()
            debugger
        }
    }
    rst.disabled = false
}
function onReset(){
    secten = 0
    secone = 0
    mshun = 0
    msten = 0
    msTens.textContent = 0
    msHundreds.textContent = 0
    secondOnes.textContent = 0  
    secondTens.textContent = 0
    numbers.forEach((number) => number.classList.remove('redDigit'))
    btn.disabled = false
    rst.disabled = true
}
