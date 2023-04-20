

const zamuk = (n: number) => {
    return (x: number) => {
        return x * n
    }
}

const newFunc = zamuk(10)//10 замыкается
// console.log(newFunc(20))

// --------------------------------------

const objMain = {
    name: "Danyil",
    job: "coach"
}

function show(this: { name: string, job: string }) {
    console.log("person : " + this.name + " " + this.job)
}

// const bindFunc = (obj: { name: string, job: string }, callBack: () => void) => {
//     callBack.bind(obj)()
// }

// bindFunc(objMain, show)
function bind(context: any, callBack: () => void) {
    return (...args: any) => {
        console.log(args)
        callBack.apply(context, args)
    }
}

bind(objMain, show)('mama')