// const button = document.getElementById("button");

// async/await

// async function a() {
//     return Promise.resolve(true);
// }
// a().then(console.log);

// let value = await Promise.re

// async function a() {
//     let prom = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Hello"), 1000);

//     });
//     let result = await prom;
//     console.log(result)
// }
// a();

// const monocurrency = async () => {
//     let response = await fetch("https://api.monobank.ua/bank/currency");

//     if (response.ok) {
//        console.log("Success",response.status)
//     } else {
//       console.error("Error",response.status)
//     }
// }

// monocurrency();

// const postTest = async () => {
//     let user = {
//         name: "Bohdan",
//         city: "Kyiv",
//     };
//     let response = await fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json",
//         },
//     })
// }

// try {
//     console.log("Hello")
//     a;
//   console.log("World")

// } catch (err) {
//     console.log("error");
// }

// try {
//     setTimeout(function () {
//         console.log("Hello")
//     }, 1000);
// } catch (err) {
//     console.log("Error")
// }
// try/cattch не можу спіймати помилку ,якщо наприклад функція запланована.

// setTimeout(function () {
//     try {
//         di;
//     } catch (err) {
//         console.log("Error")
//     }
// })

// try { da} catch (err) {
//     console.log(err.stck);
// }

// let user = `{
// "name":"Ann"
// }`

// try {
//     let json = JSON.parse(user);
//     console.log("user", json.name)
//     if (!user) {
//         throw new SyntaxError("Вкажіть місто")
//     }
// } catch (err) {
//     console.error(err.message);
// } finally {
//      console.log("finally");
// }

// let socket = new WebSocket("ws://example.com/socketserver");


// socket.onopen = function (event) {
//     console.log("Connection is successful")
//     socket.send("Hello!")

// }

// socket.onmessage = function (event) {
//     console.log("message",event.data)
// }

// socket.onclose = function (event) {
//     if (event.wasClean) {
//         console.log("The connection on pause",event.code)
//     } else {
//          console.log("The connection lost",event.code)
//     }
// }

// socket.onerror = function (event) {
//     console.log(event)
// }

