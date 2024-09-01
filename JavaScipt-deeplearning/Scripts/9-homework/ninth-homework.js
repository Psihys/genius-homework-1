
// const begin = () => {
//     let item = document.getElementById("button");
//     item.addEventListener("click", showValue);
// }

// const showValue = () =>{
    
//     let element = document.getElementById("text")
// console.log(element.value)
// }

//  document.addEventListener("DOMContentLoaded", begin)

// let element = document.querySelector(".button")
// element.style.backgroundColor ="red"

// let element = document.getElementById("text")
// console.log(element.classList)
// console.log(element.classList.contains("red"))
// console.log(element.classList.remove("red"))
// console.log(element.classList.contains("red"))


let text = document.getElementById('text')

let button = document.getElementById('textButton')


const hideElement = () => {
    text.classList.add('hidden')
}
button.addEventListener('click', hideElement)
const hideButton = () => {
    button.classList.add('hidden')
}

button.addEventListener('click',hideButton)