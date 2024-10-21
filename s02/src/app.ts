console.log('S02')
console.log('payas')

//* Union type

let a: string | number = 0.325
a = 'Hello'
// a = false // compiler error

//* Type Narrowing

function checkNumber(n: (string | number)): void {


    if (typeof n === 'number') {

    } else { }
}

//* Type Aliases

type Mark = string | number

let c: Mark = 'Selam'
c = 2
// c = true // compiler error

//* String Literals

type Pet = 'cat' | 'dog'

let pet1: Pet = "cat"
let pet2: Pet = "dog"


type Car = "BMW" | "Audi" | "Mercedes" | 2022

let car1: Car = "BMW"
let car2: Car = "Audi"
// let car3: Car = "Fiat"  // compiler error
let car4: Car = 2022

//*Intersection


type User = {
    id: number;
    name: string;
};
type Admin = {
    privileges: string[]
};

type SuperUser = User & Admin;

const elevatedUser: SuperUser = {
    id: 1,
    name: 'Mark',
    privileges: ['start-database'],
};

