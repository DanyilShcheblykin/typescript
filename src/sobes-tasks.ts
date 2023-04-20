
const createId = () => {
    let id = 0
    return () => id++
}
const incr = createId()

// console.log(incr());
// console.log(incr());
// console.log(incr());

// ------------------------------------------
let map = new Map<string, string>();

map.set('1', 'str1');

function test(key: string) {
    const v = map.get(key)

    if (!v) return
    console.log('v : ' + v)
}

test('')

// ------------------------------------------

setTimeout(() => { //это macroTask
    console.log("macroTask")
})

Promise.resolve('data').then(data => console.log("microTask : " + data)) //первое будет это потому что это microTask

// ------------------------------------------

const mama = {  //способ клонирования
    name: 'Tamila',
    job: {
        name: 'Teacher'
    }
}
const newPerson = JSON.stringify(mama)

const onj = { ...JSON.parse(newPerson) }

console.log(newPerson)

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

console.log(getNumber(2, 2))
console.log(getNumber(1, 1))
console.log(getNumber(1, 2))

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
        console.log(numb)
        run(numb + 1)
    },);
}

//   run(1)

const p = Promise.resolve();

function run2(numb: number) { //это поломает код потому что microTask мгновенно выполняется 
    p.then(() => {
        console.log(numb)
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

console.log(mapReduce(arrReduce, callBack))

// ------------------------------------------


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("correct")
    }, 1000)
})

const asyncFunc = async (promise: any) => {
    const resp = await promise
    console.log(promise)

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
        console.log(sum1())
    })
}

sumFunc()

// ------------------------------------------------------------

const obj1 = { name: 'mama' }
const obj22 = obj1

console.log(obj1 === obj22) //true

// ------------------------------------------------------------

const pers = {
    name: "Sasha",
    method() {
        console.log(this.name)
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
    console.log(sum)
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

    console.log('data : ' + data)
})









