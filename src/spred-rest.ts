interface Info {
    name: string,
    secondName: string
}

const firstObject = {
    name: "Dan",
    secondName: "shch"
}
const secondObject = { ...firstObject, job: "coach" }

const { job: string, ...info } = secondObject

// -------------------------------

const obj = {
    money: 100,
    job: 'Coach'
}
const obj2 = {
    money2: 200,
    job2: 'Coach2'
}

const mainObj = { ...obj, ...obj2 } //spread

// ------------------------
const todo = {
    text: "Water the flowers",
    completed: false,
    tags: ["garden"],
};

const shallowCopy = { ...todo };
//   console.log(todo === shallowCopy); // false потомк что ссылки разные 
// -------------------------------

const restFunction = (f: number, s: number, ...rest: Array<number>) => {
}

restFunction(1, 2, 3, 5)

// ---------------------------------

// In general, if the ... operator appears in a function parameter declaration,
//     it is a rest parameter.If it appears in an array or object literal,
//         it is a spread operator.
