// Домашнє завдання

// // Якщо змінна більше нуля - виведіть true, менше - false
// //Перевірте це на варіантах 1, 0, -3.

// const value = prompt('Write a number');

// if (value > 0) {
//     console.log('Success')
// } else (
//     console.error('Error')
// )
// console.log(typeof value);

// // Якщо змінна ="test" - виведіть true,
// //Перевірте це на варіантах 'test' ,"qwerty", true

// const value = prompt('Write a word');
// if (value === "test") {
//     console.log(true)
// } else {
//     console.log(false)
// }

// // Якщо змінна більше 10 - відніміть 5,
// //менше - додайте 5, результат виведіть в консоль
// //Перевірте це на варіантах 1, 10, 13.

// const input = prompt('Write a number');
// let value = Number(input);
// if (value > 0) {
//     console.log('Success')
//     if (value > 10) {
//         console.log(value-5)
//     } else {
//         console.log(value+5)
//     }
// } else (
//     console.error('Error')
// )
// console.log(typeof value);

// //Зробіть сервіс який отримує число від 1 до 12
// // виведіть місяць який дорівнює числу

// const input = prompt('Enter a number between 1 and 12');
// const monthNumber = Number(input);

// if (monthNumber === 1) {
//     console.log('January');
// } else if (monthNumber === 2) {
//     console.log('February');
// } else if (monthNumber === 3) {
//     console.log('March');
// } else if (monthNumber === 4) {
//     console.log('April');
// } else if (monthNumber === 5) {
//     console.log('May');
// } else if (monthNumber === 6) {
//     console.log('June');
// } else if (monthNumber === 7) {
//     console.log('July');
// } else if (monthNumber === 8) {
//     console.log('August');
// } else if (monthNumber === 9) {
//     console.log('September');
// } else if (monthNumber === 10) {
//     console.log('October');
// } else if (monthNumber === 11) {
//     console.log('November');
// } else if (monthNumber === 12) {
//     console.log('December');
// } else {
//     console.error('Error');
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const input = prompt('Enter a number between 1 and 12');
// const value = Number(input);

// if (value >= 100 && value <= 999) {
//     let nummber = value.toString();

//     let sum = Number(nummber[0]) + Number(nummber[1]) + Number(nummber[2]);
//     console.log(Number(sum));
// } else {
//     console.error("Write the value that is bigger than 100")
// }