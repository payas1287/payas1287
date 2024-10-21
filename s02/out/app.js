console.log('S02');
console.log('payas');
//* Union type
let a = 0.325;
a = 'Hello';
// a = false // compiler error
//* Type Narrowing
function checkNumber(n) {
    if (typeof n === 'number') {
    }
    else { }
}
let c = 'Selam';
c = 2;
let pet1 = "cat";
let pet2 = "dog";
let car1 = "BMW";
let car2 = "Audi";
// let car3: Car = "Fiat"  // compiler error
let car4 = 2022;
//* Object
const car = {
    type: "Honda",
    model: "CRV",
    year: 2020,
    // hatchback: true  //compiler error
};
const elevatedUser = {
    id: 1,
    name: 'Mark',
    privileges: ['start-database'],
};
let sale1 = {
    author_id: 123,
    book_id: 456,
    book_name: "Return of the King",
    author_name: "Tolkein",
    // price 200 // compiler error
};
// sale1.book_id = 1 // compiler error
//* Type Assertions
// let someValue: unknown = "this is a string"
// console.log(someValue.length) // object is type of 'unknown'
let someValue1 = "this is a string";
console.log(someValue1.length);
let someValue2 = "this is a string";
console.log(someValue2.length);
// console.log(someValue2.length) // compiler error
//* Functions
function selamla(mesaj, isim = 'konuk') {
    // if(!isim) isim = "Konuk"
    return mesaj + ' ' + isim;
}
console.log(selamla("Merhaba", "Dünya"));
// console.log(selamla ("Merhaba", 2024)), // compiler error
// console.log(selamla ("Merhaba"), // compiler error)
// selamla ("Merhaba", "dünya", 2024) // compiler error
//* Arrow Function
let topla = (a, b) => a + b;
function add(a, b) {
    return a + b;
}
//* Rest Parameters
function add1(num, ...numbers) {
    let total = num;
    numbers.forEach(number => total += number);
    console.log(total);
}
add1(1);
add1(1, 2, 3, 4, 5);
const red = { color: { r: 255, g: 0, b: 0 } };
class Square {
    constructor(color, area) {
        this.color = color;
        this.area = area;
    }
}
const sq1 = new Square({ r: 255, g: 0, b: 0 }, 255);
console.log(sq1);
//* Generic
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4]);
let strArr = getArray(["John", "Mike", "Alan"]);
// strArr.push(3) //error
// numArr.push("Sally") //error
