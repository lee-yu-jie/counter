const plus = document.querySelector('.up')
const subtract = document.querySelector('.down')
const number = document.querySelector('.number')
const zero = document.querySelector('.zero')

plus.addEventListener('click', () => {
    number.textContent = Number(number.textContent) + 1;
})

subtract.addEventListener('click', () => {
    number.textContent = Number(number.textContent) - 1;
})

zero.addEventListener('click', () => {  
    number.textContent = 0
})