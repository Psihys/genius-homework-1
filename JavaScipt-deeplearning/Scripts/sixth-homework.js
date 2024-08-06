// const sum = 20000;
// const month = 12;
// const p = 1000;

// const credit = (sum, month, p) =>{
//     let total = sum + p * month;
//     console.log(total)
// }

// console.log(credit(sum, month, p))


// class Bank {
//     static type = 'bank';
//     constructor(options) {
//         this.summ = options.summ;
//         this.month = options.month;
//         this.p = options.p;
//     }
//     credit() {
//         return  console.log( "Personal info " + this.summ + this.month * this.p)
//     }
// }

// const userBank = new Bank({
//     summ: 50000,
//     month: 12,
//     p: 500,
// })

// userBank.credit()


// class NewBank extends Bank {
//     constructor(options) {
//         super(options)
//         this.card = options.card;
//     }
//     credit() {
//         super.credit();
//         return console.log("i am aval");
//     }
// }

// const aval = new NewBank({
//     summ: 50000,
//     month: 12,
//     p: 500,
//     card: true,
// })

// console.log(aval.credit())


// class User {
//     constructor(props) {
//         this.name = props.name;

//     }
//     firstName = "";
//     lastName = "";
//     age = "";
//     city = "";

//     set name(newName) {
//         const nameRow = newName.split(" ");
//         this.firstName = nameRow[0];
//         this.lastName = nameRow[1];

//     }

//     get name() {
//         return `First name is: ${this.firstName} Last name is: ${this.lastName}`;
//     }
// }

// const Bohdan = new User({
//     name: "Bohdan Shevchenko",
// })

// const Dasha = new User({
//     name: "Dasha Shevchenko",
// })

// console.log(Bohdan)
// console.log(Dasha)


// const a = {
//     x: 1,
//     y: 2,
    
// };
// const b = Object.create(a);

// console.log(b)
// console.log(b.x)
// console.log(b.y)
// console.log(b.hasOwnProperty("x"))


// const Manager = function (name, sales) {
//     this.name = name;
//     this.sales = sales;

//     // this.sale = function(){
//     //     this.sales += 1;
//     // };

// };

// const Ann = new Manager("Ann", 5);
// const ivan = new Manager("Ivan", 10)


// Manager.prototype.sale = function () {
//     this.sales += 1;
// }

// console.log(ivan.sales);
// ivan.sale();
// console.log(ivan.sales)
// console.log(ivan)

// console.dir(Manager)

// class coffeeMachine {
//     _water = 0;
//     #waterLimit = 500;

//     constructor(power) {
//         this.power = power;
//     }

//     set waterAmount(value) {
//         if (value < 0) {
//             value = 0;
//         }
//         this._water = value;
//     }
// }

// let coffeeMachineNew = new coffeeMachine(100);

// coffeeMachineNew.waterAmount = 20;

// console.log(coffeeMachineNew)

