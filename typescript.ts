// typescript
npm i -g typescript
tsc --init

// function
const sum = (a : number, b : number) => {
    return a + b;
}

// boolean, number, string
let isCool: boolean = true;
let age: number = 10;
let teste: string = 'test';

// array
let pets: string[] = ['cat', 'dog']
let numbers: Array<number> = [1, 2]

// object
let wizard: object = {
    a: 'Jhon'
}

// undefined, null
let men: undefined = undefined;
let noo: null = null;

// tuple
let basket: [string, number];
basket = ['basket', 1];

// enum
enum Size {
    Small = 1,
    Medium = 2,
    Large = 3
}

let sizeName: string = Size[2]
let sizeNumber: number = Size.Small

// WARNING: any
let anything: any = 'asas';
anything = 1;
anything = true;

// void
let sing = (): void => {
    console.log('void')
}

// never
let error = (): never => {
    throw Error('ops')
}

// interface
interface RobotArmy {
    count: number,
    type: string,
    magic: string
}

let fightRobotArmyInterface = (robots: RobotArmy) => {
    console.log(robots)
}

let fightRobotArmyObject = (robots: {count: number, type: string, magic: string}) => {
    console.log(robots)
}

// Type Assertion
interface CatArmy {
    count: number,
    type: string,
    magic: string
}

let cat = {} as CatArmy;
cat.count = 1;

// Function
let fightRobotArmy1 = (robots: RobotArmy): void => {
    console.log(robots)
}

let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}): number => {
    console.log(robots)
    return 5;
}

// Class
class Animal {
    private sing: string = 'lalala';

    constructor(sound: string) {
        this.sing = sound;
    }

    greet() {
        return `Hello ${this.sing}`;
    }
}

let lion = new Animal('RAAAWWR');

// Union
let confused: string | number | boolean = 'hello';