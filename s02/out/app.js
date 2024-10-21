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
