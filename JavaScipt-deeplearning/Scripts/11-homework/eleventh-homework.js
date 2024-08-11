// localStorage.setItem("name", "Bohdan")
// const a = localStorage.getItem("name")
// console.log(a)

// function check() {
//     let value = document.getElementsByName("radio");
//     if (value[0].checked) {
//         console.log("Female");
//     } else {
//         console.log("Male");
//     }
// }

// const form = document.querySelector(".form");
// const inputName = document.getElementById("name")
// const lastName = document.getElementById("lastname")
// const age = document.getElementById("age")
// const male = document.getElementById("male")

// form.addEventListener("submit", clickSubmit);

// function clickSubmit(event) {
//     event.preventDefault();
//     const info = {
//         name: inputName.value,
//         lastName : lastName.value,
//         age: age.value,
//         male: male.checked,
//     };
//     console.log(info)
//     localStorage.setItem("info",JSON.stringify(info))
// }

// if (localStorage.getItem("info")) {
//     const ls = JSON.parse(localStorage.getItem("info"))
//     inputName.value = ls.name
//     lastName.value = ls.lastName
//     age.value = ls.age
// }

// console.log(JSON.parse(a))



// const form = document.getElementById("form");

// let formData = {};
// form.addEventListener("input", function (event) {
//     formData[event.target.name] = event.target.value;
//     localStorage.setItem('formData', JSON.stringify(formData))
// }

// );

// if (localStorage.getItem("formData")) {
//     formData = JSON.parse(localStorage.getItem("formData"))

//     for (let key in formData) {
//         form.elements[key].value = formData[key]
//     }
// }

