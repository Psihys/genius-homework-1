// const name = "Bohdan"
// function showMessage(name, city) {
//     alert("Hello my name is" + name + "and i am from " + city);
// }
// showMessage("Bohdan", "Kortrijk")
// showMessage("Bohdan", "Harelbeke")
// showMessage("Bohdan","Gent")

// const sayHi = function () {
//     let message = "Hello,my name is"
//     console.log(message + " " + name);
// }

// sayHi();

// function sum(a, b) {
//     return a + b;
// }

// let result = sum(10, 11);
// console.log(result);\

// const test = function(a, b){
//     console.log("a:" + a);
//     console.log("b:" + b);


//     let result = a + b;
//     console.log(result)

//     return result;
// }

// test(5, 44)

// const a = function () {
//     console.log("functiom a:");
//     b();
//     c();
// }

// const b = function () {
//     console.log("functiom b:");
//     a();
//     c();
// }

// const c = function () {
//     console.log("functiom c:");
//     a();
//     b();
// }

// a();
// b();
// c();

// const addName = function () {
//     const arg = Array.from(arguments)
//     console.log(arg);
//     console.log(arg[1])
// };

// addName(1, 2, 3, 4, 5, 6);
// addName(1, 2, 3, 4, 5, 6, 33, 4, 5, 4, 64, 23, 42);

// const addName = function (...arg) {
//     console.log(arg);
// };

// addName(1, 2, 3, 4, 5);

// function ask(question,yes,no) {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// }

// function Ok() {
//     console.log("Yes")
// }
// function NotOk() {
//     console.log("NO")
// }

// ask("Yes or no",Ok,NotOk)

// const hello = function (name) {
//     console.log(`Hello, ${name}`)
// }

// const searchName = function (callback) {
//     const name = "Bohdan";
//     callback(name);
// }

// searchName(hello)

// function checkAge(age) {
//     if (age > 18) {
//         return console.log("hello");
//     }
//        return console.log("bye,bye")
// }

// checkAge(12)

// function showMovie(age) {
//     if (age < 21) {
//         return;
//     }
//     return console.log("go to movie");
// }
// showMovie(11)

// const showMovie = (age) => {
//       if (age > 21) {
//         return console.log("Hello");
//     }
//     return console.log("go to another movie");
// }

// showMovie(2)

// const a = () => {
//     console.log('Hello')
// }

// const b = () => {
//     console.log('Bye')
// }

// const c = () => {
//     console.log(a)
//        console.log(b)
// }

// c();

// console.log(document);

// const addNumber = (nummber) => {
//     let sum = Number(nummber) + 10;
//     return console.log(sum)
// }

// const number = document.querySelector('input[name="number"]')
// const button = document.querySelector("button")

// button.addEventListener('click', () => addNumber(number.value));

// console.log(button)

// Домашнє завдання

// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm('Батьки дозволили?');
// }
// function checkAge(age) {
//   return age > 18 || confirm('Батьки дозволили?');
// }

// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Ви згодні?",
//   () => alert("Ви погодились."),
//   () => alert("Ви скасували виконання.")
// );
