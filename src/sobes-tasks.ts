
const createId = () => {
    let id = 0
    return () => id++
}
const incr = createId()

// console.log(incr());//0
// console.log(incr());//1
// console.log(incr());//2

// ------------------------------------------
let map = new Map<string, string>();

map.set('1', 'str1');

function test(key: string) {
    const v = map.get(key)

    if (!v) return

}

test('')

// ------------------------------------------

setTimeout(() => { //это macroTask

})

// Promise.resolve('data').then(data => console.log("microTask : " + data)) //первое будет это потому что это microTask

// ------------------------------------------

const mama = {  //способ клонирования
    name: 'Tamila',
    job: {
        name: 'Teacher'
    }
}
const newPerson = JSON.stringify(mama)

const onj = { ...JSON.parse(newPerson) }



// ------------------------------------------
function getNumber(numb: number, numb2: number) {
    if (numb % 2 === 0 && numb2 % 2 === 0) {
        return numb * numb2
    }
    if (numb % 2 !== 0 && numb2 % 2 !== 0) {
        return numb + numb2
    }
    return numb % 2 && numb !== 1 ? numb2 : numb
}

// ------------------------------------------

const rendomArr = [
    {
        age: 22, salaray: 1000
    },
    {
        age: 42, salaray: 1300
    },
    {
        age: 62, salaray: 500
    },
    {
        age: 12, salaray: 8000
    },
    {
        age: 92, salaray: 8000
    },
]

const filterArr = rendomArr.filter((item, index) => item.age > 40)

const ageAll = filterArr.reduce((accum, item) => accum += item.age, 0)

// const objAll = rendomArr.reduce((accum, current) => {
//     if (current.age > 20 && current.salaray > 100) {
//         accum.age += current.age
//         accum.salaray += current.salaray
//     }
//     return accum
// }, { age: 0, salaray: 0 })

// console.log(objAll)

// ------------------------------------------

function getStringOrNumber(): string | number {
    return 42;
}

// ------------------------------------------

function run(numb: number) { // это не ломает код потому что macroTask не блокируют поток 
    setTimeout(() => {

        run(numb + 1)
    },);
}

//   run(1)

const p = Promise.resolve();

function run2(numb: number) { //это поломает код потому что microTask мгновенно выполняется 
    p.then(() => {


        run2(numb + 1)
    })
}

// run2(10)

// ------------------------------------------

function mapFunc<T, R>(arr: Array<T>, callBack: (v: T, index: number) => R): Array<any> {
    return arr.map(callBack)
}

const mapInside = (numb: number) => {
    return numb * 2
}

// console.log(mapFunc<number, number>([1, 2, 3], (v) => v * 2))

// ------------------------------------------

const mapReduce = (arr: Array<any>, callBack: (v: any, index?: number) => any) => {

    const initialval: Array<any> = []

    const newVaL = arr.reduce((accum, currentVal) => {
        const numb = callBack(currentVal)
        accum.push(numb)
        return accum
    }, initialval)

    return newVaL

}

const callBack = (item: number) => {
    return item * 2
}
const arrReduce = [1, 2, 3, 4]


// ------------------------------------------


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("correct")
    }, 1000)
})

const asyncFunc = async (promise: any) => {
    const resp = await promise
    // console.log(promise)

}

const fir = () => {
    return new Promise<number>((resolve, reject) => {
        resolve(2)
    })
}
const sec = () => {
    return new Promise<number>((resolve, reject) => {
        resolve(4)
    })
}


const sumFunc = async () => {
    return Promise.all([fir, sec]).then(([sum1, sum2]) => {

    })
}

// ------------------------------------------------------------

const obj1 = { name: 'mama' }
const obj22 = obj1

// console.log(obj1 === obj22) //true

// ------------------------------------------------------------

const pers = {
    name: "Sasha",
    method() {
        // console.log(this.name)
    }
}

const someObj = pers

someObj.name = 'Tamila'

someObj.method()//Tamila
pers.method()//Tamila

// ------------------------------------------------------------

// dddd() //error
dddd1()

const dddd = () => { //Function Expression

}
function dddd1() { //Function declar

}

// ------------------------------------------------------------

const firstPromise: Promise<number> = new Promise(res => res(1))
const secondPromise: Promise<number> = new Promise(res => res(2))

const returnFewPromise = (prom1: Promise<number>, prom2: Promise<number>): Promise<[number, number]> => {
    return Promise.all([prom1, prom1])
}

returnFewPromise(firstPromise, secondPromise).then(data => {
    const sum = data[0] + data[1]

})

// ------------------------------------------------------------


function sleep(ms: number) {
    return new Promise(res => {
        setTimeout(res, ms)
    })
}

const fetc1 = () => {
    return sleep(500).then(() => 11)
}

const fetc2 = () => {
    return sleep(800).then(() => 20)
}

const returnAllPromise = (promises: Array<Promise<number>>) => {
    const result: Array<number> = []
    let counter = 0;

    return new Promise((res, rej) => {
        for (let y = 0; y < promises.length; ++y) {
            promises[y].then(data => {
                result[y] = data
                ++counter
                if (counter === promises.length) {
                    res(result)
                }
            })
            // res(result) так нельзя делать потому что он сработает раньше чем for 
        }
    })
}
returnAllPromise([fetc1(), fetc2()]).then(data => {
})

// ------------------------------------------------------------

const sumFunction = (...arg: Array<number>) => {
    let sum = 0
    for (let y of arg) {
        sum += y
    }

    const reduceSum = arg.reduce((accum: number, current) => {
        return accum + current
    }, 0)


}


// ------------------------------------------------------------


const arrOfObjects = [
    { a: "aaaa" },
    { name: "name1" },
    { b: "vvvv" },
    { name: "name2" }
]

const newArr = arrOfObjects.filter((item: Object, index) => {
    return Object.keys(item)[0] === 'name'
})

const arrayOfNames = newArr.map((item, index) => item.name)


// ------------------------------------------------------------


class Pers {
    name: string
    constructor(name: string) {
        this.name = name
    }
}
// ------------------------------------------------------------


const isPalidrome = (word: string) => {

    let start = 0
    let end = word.length - 1

    while (start < end) {
        const leftChar = word[start]
        const rightChar = word[end]
        if (leftChar !== rightChar) {
            return false
        }
        start += 1
        end -= 1
    }

    return true

}
console.log(isPalidrome('mamam'))

// ------------------------------------------------------------

const objnest = {
    red: {
        apple: {
            mama: "hello"
        }
    }
}
const strNes = 'red.aple.mama'

const getFromNestedObj = (str: string, obj: Object) => {

    const arraykeys = str.split('.')

    let newObj: { [key: string]: any; } = obj;

    for (let y of arraykeys) {
        if (!newObj.hasOwnProperty(y)) {
            return undefined
        }
        newObj = newObj[y]

    }
    return newObj
}

console.log(getFromNestedObj(strNes, objnest))










