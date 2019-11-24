let price = 5;
let quantity = 2;
let total = 0;
let storage = [];
let target = null;

let record = () => {
    storage.push(target)
}

let replay = () => {
    storage.forEach(run => run())
}

target = () => { total = price * quantity }

record()
replay()

price = 20
console.log(total)
replay()
console.log(price)