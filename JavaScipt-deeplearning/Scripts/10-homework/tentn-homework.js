// const button1 = document.querySelector("#btn1")
// const button2 = document.querySelector("#btn2")
// const button3 = document.querySelector("#btn3")
// const button4 = document.querySelector("#btn4")
// const button5 = document.querySelector("#btn5")
// const button6 = document.querySelector("#btn6")
// const button7 = document.querySelector("#btn7")

// button1.addEventListener("click", () => console.log("hello"));
// button2.addEventListener("contextmenu", () => console.log("contextenu"));
// button3.addEventListener("mouseover", () => console.log("mouseover"));
// button4.addEventListener("mouseout", () => console.log("mouseout"));
// button5.addEventListener("mousedown", () => console.log("mousedown"));
// button6.addEventListener("mousemove", () => console.log("mouseout"));
// button7.addEventListener("keydown", () => console.log("keudown"));



// const addButton = document.querySelector("#add")
// const deleteButton = document.querySelector("#delete")
// const clickMe = document.querySelector("#click")


// const Buttons = () => {
//     console.log("Hello");

// };

// addButton.addEventListener("click", () => {
//     clickMe.addEventListener("click", Buttons);
// })

// deleteButton.addEventListener("click", () => {
//     clickMe.removeEventListener("click", Buttons);
// })

// const clickMe = document.querySelector("#click")
// const infoClick = (event) => {
//     console.log("event",event)
// }

// clickMe.addEventListener("click", infoClick);

// const form = document.querySelector(".form");
// const login = document.getElementById("login")
// const password = document.querySelector('input[type="password"]');

// form.addEventListener("submit", submitInfo);

// function submitInfo(event){
//     event.preventDefault();
//     console.log(login.value);
//     console.log(password.value);

//     console.log(`Login ${login.value} and yourr password ${password.value}`);

//     form.reset();
// }

// const parents = document.querySelector("#parents");
// const child = document.querySelector("#child");
// const item = document.querySelector("#item");

// parents.addEventListener("click", () => {
//     console.log("Parents")
// })
// child.addEventListener("click", () => {
//     console.log("child")
// })
// item.addEventListener("click", () => {
//     console.log("item")
// })

// const items = event => {
//     console.log("event:", event.target);
// }

// parents.addEventListener("click", items)

// const itemClick = (event) => {
//     console.log("ItemClick stop",event.target);
//     event.stopPropagation();
// }
// const childClick = (event) => {
//     console.log("ItemClick stop",event.target)
//     event.stopPropagation();
// }
// const parentsClick = (event) => {
//     console.log("ItemClick stop",event.target);
//     event.stopPropagation();
// }

// parents.addEventListener("click", parentsClick);
// child.addEventListener("click", childClick);
// item.addEventListener("click", itemClick);

// const nav = document.querySelector(".nav");

// nav.addEventListener("click", clickMe);

// function clickMe(event){

//     const checkClass = nav.querySelector('li.active');

//     if (!checkClass) {
//          event.target.classList.add("active")

//     } else {
//          event.target.classList.remove("active")

//     }
// }

// const ball = document.querySelector(".magic");
// ball.onmousedown = function (event) {
//     event.preventDefault()
//     function move(pageX, pageY) {
//         ball.style.left = pageX - ball.offsetWidth / 2 + "px";
//         ball.style.top = pageY - ball.offsetWidth / 2 + "px";
//     }

//     move(event.pageX, event.pageY);

//     function onMouseMove(event) {
//         move(event.pageX, event.pageY);
//     }
//     document.addEventListener("mousemove", onMouseMove);
    
//     ball.onmouseup = function () {
//         document.removeEventListener("mousemove", onMouseMove);
//     };
// };