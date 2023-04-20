//this глобально ссылвется на window ; window === this 

function x(this: { name: string }) {
  console.log(this)
  console.log("hello: " + this.name);//this было вызвано в контексте somePerson поэтому можно доступиться до полей 
}

const somePerson = {
  name: "Danyil",
  make: x
};

//   -------------------------------------------------

const anotherPerson = {
  name: "Danyil",
  logInfo: function (job: string, age: number) {
    console.log("Name : " + this.name)
    console.log("Job : " + job)
    console.log("Age : " + age)
  }
}

const lena = {
  name: "Lena"
}

// const newFunction = anotherPerson.logInfo.bind(lena) //делаем так что бы logInfo выполнялось в контексте lena
// newFunction("frontEnd", 22)

anotherPerson.logInfo.call(lena, "frontEnd", 22)//call тож самое что bind только сразу же вызывает функцию 

// --------------------------------------------------------------

const objMain1 = {
  name: "Danyil",
  job: "coach"
}

function show1(this: { name: string, job: string }) {
  console.log("person : " + this.name + " " + this.job)
}

const bindFunc = (obj: { name: string, job: string }, callBack: () => void) => {
  callBack.bind(obj)()
}

bindFunc(objMain1, show1)

// --------------------------------------------------------------

const obj2002 = {
  name: "John",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  sayHelloArrow: () => {
    //console.log(`Hello, my name is ${this.name}`); у arraow function теряется scope
  }
};

//   -----------------------------------

function exampleFunction() {
  var x = 1; // local (function) scope variable
  if (true) {
    let y = 2; // block scope variable
    const z = 3; // block scope variable
    console.log(x, y, z); // output: 1, 2, 3
  }
  console.log(x); // output: 1
}

exampleFunction();

//   -----------------------------------
const objThis = {
  name: "Danyil",
  show() {
    console.log(this)
  }
}

objThis.show() //{ name: 'Danyil', show: [Function: show] }
