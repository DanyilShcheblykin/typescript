
const createId = () => {
    let id = 0
    return () => {
        console.log(this)
        return ++id
    } //замыкание id . id  был создан в scope createId 
}

const newFunc = createId()

// console.log(newFunc())
// console.log(newFunc())

// -------------------------------

function createScore() {
    let counter = 0;

    function incr() {
        ++counter;
    }

    return {
        counter,
        getCounter() {
            return counter
        },
        incr
    };
}

const res = createScore();
res.incr();
res.incr();

// console.log(res.counter); //0
// console.log(res.getCounter());//2

// -------------------------------

let a = {
    test: 8
}

let b = a; // b имеет такую же ref как и а 
b.test = 5;
// console.log(a === b) // поэтому тут true

let x = { ...a }//колнирование просто ссылки разыне 

// console.log(x === a) //тут false

// -------------------------------

const arr = [1, 2, 3, 4, 5, 6]

const val = arr.reduce((accum, current) => {
    return accum + current
}, 0)

// console.log(val)

// -------------------------------

const arr2 = [1, 'test', 1, 'mama', 'test']

const uniqueValues = arr2.reduce((accum, currentVal) => { //если не добавлять initial value тогда будет браться первый эллемент с массива 
    if (!accum.includes(currentVal)) {
        return [...accum, currentVal]
    }
    return accum;
}, []); 


const newSet = [...new Set(arr2)]

console.log('newSet : ' + newSet)

// --------------------------------------------

const resp1 = Promise.resolve(43)

resp1.then(data => data)

const resp2 = Promise.reject('error')

resp2.then(data => console.log(data)).catch(err => err)

const fet = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const dd = await data.json()
    return dd
}

// fet() 

// --------------------------------------------

const getResp = async () => {
    return new Promise(async (resolve) => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users/1').then(data => data.json())
        resolve(data)
    })

}
// getResp().then(data=> console.log(data))

// --------------------------------------------


const myObject = {
    x: 42,

    getX: () => {
        console.log(this)
    }

};

console.log(myObject.getX())

// ----------------------------------------

// function pyk() {
//     console.log(this)
// }

const pyk = () => {
    console.log('this : ' + this.name)
}
const pers = {
    name: "Sasha",
    method() {
        pyk() // покажет глобальный обьект
    }
}

pers.method()



