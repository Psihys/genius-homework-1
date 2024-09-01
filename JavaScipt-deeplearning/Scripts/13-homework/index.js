// console.log("1")


// setTimeout(() => (console.log("2"), 2000))

// console.log("3")
// console.log("4")

// const hello = () => {
//     console.log("hello");
// }


// const timeout = setTimeout(hello, 1000)

// clearTimeout(timeout)


// const hello = () => {
//     console.log("hello");
// }

// const setInt = setInterval(hello,2000)

// const startButton = document.getElementById("start")
// const finishButton = document.getElementById("finish")

// let time = null;

// startButton.addEventListener("click", () => {
//     time = setInterval(() =>
//     {
//         console.log("Hello world")
//     },2000)
// })

// finishButton.addEventListener("click", () => {
//     clearInterval(time);
//     console.log("is works")
// })


// const a = {
//     classic() {
//         setTimeout(function () {
//             console.log(`${this},classic in obj`)
//         }, 2000);
//     },

//     arr() {
//         setTimeout(() => {
//             console.log(`${this},arr in obj`)
//         }, 3000);
//     },
// };

// a.classic()
// a.arr()




// const data = new Date();
// console.log(data)

// const date = new Date();

// console.log(date.getDate())
// console.log(date.getMonth())
// console.log(date.getFullYear())

// const ukr = date.toLocaleString("uk-UA");
// console.log(ukr)


// let prom = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(("resolve")), 2000)
//     setTimeout(() => reject(("reject")), 3000);
// });

// prom.then(
//     (resolve) => console.log(resolve),
//      (reject) => console.log(reject),

// );

// prom.catch(alert);

// prom.then().catch().finally();


// function load(src) {
//     return new Promise(
//         function (resolve, reject) {
//             let script = document.createElement("script");
//             script.src = src;

//             script.onload = () => resolve(script);
//             script.onerror = () =>
//                 reject(new Error(`Error loading script: ${script.src}`));
//             document.head.append(script);
//         }
//     )
// }

// let prom = load("https://www.jetbrains.com/webstorm/promo/?source=google&medium=cpc&campaign=EMEA_en_WEST_WebStorm_JavaScript_Search&term=javascript%20software&content=668903148124&gad_source=1&gclid=CjwKCAjw8fu1BhBsEiwAwDrsjHS810KSU9zMFE0qR8-OhEnHzr3KjKnZpyOEQVZyZBVNFhA26zDwvBoCNfYQAvD_BwE")

// prom.then(
//     (script) => console.log(`Installed ${script}`),
    
// )

// prom.catch(
//     (error) => console.log(`Error ${error.message}`),
// )

// prom.finally(
//     console.log("Finally ")
// );

// new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(2), 2);
// }).then(
//     function (result) {
//         console.log(result)
//         return new Promise((resolve, reject) => {
//             setTimeout(() => resolve(result + 5), 1000);
//              console.log(result)
//         })
       
//     }
// ).then(
//     function (result) {
//         console.log(result)
//     }
// )

// function printNumbersInterval(from, to) {
//     let current = from;
//     const intervalId = setInterval(() => {
//         console.log(current);
//         if (current === to) {
//             clearInterval(intervalId); 
//         }
//         if (current > to) {
//              clearInterval(intervalId);
//         } 
//         current++
//     }, 1000); 
// }


// printNumbersInterval(0, 5);


// function printNumbersTimeout(from, to) {
//     function printNext(current) {
//         console.log(current);
//         if (current < to) {
//             setTimeout(() => printNext(current + 1), 1000); 
//         }
//     }
    
//     printNext(from); 
// }

// printNumbersTimeout(10, 15);


// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(); // Перевести проміс в стан resolved після затримки
//         }, ms);
//     });
// }

// // Приклад використання:
// delay(1000) // Затримка на 2000 мілісекунд (2 секунди)
//     .then(() => {
//         console.log('1 секундa пройшлa!');
//     });
