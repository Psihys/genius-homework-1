// class Circle{
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }

//     hide() {
//         this.$el.style.display = "none"
//     }

//     show() {
//          this.$el.style.display = "block"
//     }

// }

// class CircleItem extends Circle {
//     constructor(options) {
//         super(options.selector);
//         this.$el.style.width = options.size + "px";
//         this.$el.style.height = options.size + "px";
//         this.$el.style.borderRadius = '50%';
//          this.$el.style.background = options.color;
//     }
// }

// const CircleRed = new CircleItem({
//     selector: "#circleRed",
//     color: "red",
//     size:50,
// });

// const CircleBlue = new CircleItem({
//     selector: "#circleBlue",
//     color: "blue",
//     size:80,
// });

// const CircleGreen = new CircleItem({
//     selector: "#circleGreen",
//     color: "green",
//     size:110,
// });

// CircleRed.hide()
// CircleGreen.hide()
// CircleRed.show()
// CircleGreen.show()


// function Car (name,color){
//     this.name = name;
//     this.color = color;

// }

// Car.prototype.message = function () {
//     console.log(`Mark is: ${this.name} and color is ${this.color}`);
// }

// Car.prototype.start = function () {
//     console.log(`${this.name} is ready`)
// }

// const Audi = new Car("Audi", "Black")
// const BMW = new Car("BMW", "White")

// Audi.message()
// BMW.start()

// let message = {
//     messageHello() {
//         console.log(`Hello ${this.name}`);
//     },

//     messageBye() {
//           console.log(`Bye ${this.name}`);
//     },
// }

// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// Object.assign(User.prototype, message)
 
// let Ivan = new User("Ivan");
// Ivan.messageHello();

// let number = prompt("Write number");

// function show(number) {
//     for (let i = 2; i <= number; i++) {
//         let isPrime = true;
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             console.log(i);
//         }
//     }
// }

// show(number);

