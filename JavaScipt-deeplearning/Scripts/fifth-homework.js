// Домашнє завдання

// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній бал і кількість пропущених занять
function studentInfo(){
        console.log(this.name);
            console.log(this.specialty);
            console.log(this.averageGrade);
            console.log(this.missedClasses);
}

const student = [
    {
        name: "Bohdan Shevchenko",
        specialty: "Комп'ютерні науки",
        averageGrade: 5,
        missedClasses: 3,
        studentInfo: studentInfo,
        info: function (city) {
       console.log(this.name);
            console.log(this.specialty);
            console.log(this.averageGrade);
            console.log(this.missedClasses);
            console.log(city);
   },
    },
      {
        name: "Vova",
        specialty: "Комп'ютерні науки",
        averageGrade: 4,
          missedClasses: 7,
          studentInfo: studentInfo,
          logInfo: function (job,city) {
              console.group(`${name} info:`)
              console.log(`Name is: ${this.name}`); 
              console.log(`Name is: ${job}`);
              console.log(`Name is: ${city}`);
              console.groupEnd();
        }
    },
        {
        name: "DIma",
        specialty: "Комп'ютерні науки",
        averageGrade: 3,
        missedClasses: 33,
        studentInfo: studentInfo,
 
    },
];



// student[0].studentInfo();
// student[1].studentInfo();
// student[2].studentInfo();


// student[0].info.bind(student[1])("Kiyv");
// student[0].info.bind(student[1])("Odessa");

student[1].logInfo.call(student[1], "developer", "Kiyv");
student[1].logInfo.apply(student[1],["developer", "Kiyv"]);
// studentInfo.apply(student[0]);


// 2) написати метод який буде виводити цю інформацію

// 3) написати три варіанти студентів

// 4) прикріпити знначення за допомогою call apply bind
// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const htmlButtons = () => {
//     let html = document.getElementById("html-button");
//     html.addEventListener('click', showTextHtml)

//     let css = document.getElementById("css-button");
//     css.addEventListener('click',showTextCss )
// }
// const showTextHtml = () => {
//      alert("стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора.")
// }
//  const showTextCss = () => {
//      alert("формальный язык декодирования и описания внешнего вида документа (веб-страницы), написанного с использованием языка разметки (чаще всего HTML или XHTML). Также может применяться к любым XML-документам, например, к SVG или XUL.")
// }
 
// htmlButtons();

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// const shop = (productName, price, quantity) => {
//     if (price < 0 || quantity < 0) {
//         return null;
//     } else {
//         let total = price * quantity;
//         return " Youre order is " + productName + "total price is " + total;
//     }
// }

// console.log(shop("banana", 30, 4.5))
// console.log(shop("cherry", 58, 1.3))
// console.log(shop("orange", 89, 4, 3.4))