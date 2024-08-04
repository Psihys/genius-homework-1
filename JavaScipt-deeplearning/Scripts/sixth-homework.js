const sum = 20000;
const month = 12;
const p = 1000;

const credit = (sum, month, p) =>{
    let total = sum + p * month;
    console.log(total)
}

console.log(credit(sum, month, p))