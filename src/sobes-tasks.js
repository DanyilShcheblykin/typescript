const createId = () => {
  let id = 0;
  return () => {
    console.log(this);
    return ++id;
  }; //замыкание id . id  был создан в scope createId
};

const newFunc = createId();

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
      return counter;
    },
    incr,
  };
}

const res = createScore();
res.incr();
res.incr();

// console.log(res.counter); //0
// console.log(res.getCounter());//2

// -------------------------------

let a = {
  test: 8,
};

let b = a; // b имеет такую же ref как и а
b.test = 5;
// console.log(a === b) // поэтому тут true

let x = { ...a }; //колнирование просто ссылки разыне

// console.log(x === a) //тут false

// -------------------------------

const arr = [1, 2, 3, 4, 5, 6];

const val = arr.reduce((accum, current) => {
  return accum + current;
}, 0);

// console.log(val)

// -------------------------------

const arr2 = [1, "test", 1, "mama", "test"];

const uniqueValues = arr2.reduce((accum, currentVal) => {
  //если не добавлять initial value тогда будет браться первый эллемент с массива
  if (!accum.includes(currentVal)) {
    return [...accum, currentVal];
  }
  return accum;
}, []);

const newSet = [...new Set(arr2)];

console.log("newSet : " + newSet);

// --------------------------------------------

const resp1 = Promise.resolve(43);

resp1.then((data) => data);

const resp2 = Promise.reject("error");

resp2.then((data) => console.log(data)).catch((err) => err);

const fet = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const dd = await data.json();
  return dd;
};

// fet()

// --------------------------------------------

const getResp = async () => {
  return new Promise(async (resolve) => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    ).then((data) => data.json());
    resolve(data);
  });
};
// getResp().then(data=> console.log(data))

// --------------------------------------------

const myObject = {
  x: 42,

  getX: () => {
    console.log(this);
  },
};

console.log(myObject.getX());

// ----------------------------------------

// function pyk() {
//     console.log(this)
// }

const pyk = () => {
  console.log("this : " + this.name);
};
const pers = {
  name: "Sasha",
  method() {
    pyk(); // покажет глобальный обьект
  },
};

pers.method();

// ------------------------------------------------------------------------
const myArray = [1, 2, 3];
myArray.myProperty = "Hello, world!";
console.log(myArray);

const arg = "1";

console.log(typeof arg == "string");

// ------------------------------------------------------------------------

let rrr = [12, 3, 4];

rrr.map((item) => console.log(item));

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function example() {
  console.log("Начало");
  delay(4000).then(() => console.log("hello"));
  console.log("Прошло 4 секунды");
  delay(4000).then(() => console.log("hello"));
  console.log("Прошло еще 4 секунда");
  console.log("Конец");
}

example();

const arry = [1, 5, 2, 8, 3, 6];

for (let y = 0; y < arry.length - 1; y++) {
  for (let i = 0; i < arry.length - 1 - y; i++) {
    if (arry[i] > arry[i + 1]) {
      let temp = arry[i];
      arry[i] = arry[i + 1];
      arry[i + 1] = temp;
    }
  }
}

// --------------------------------------------------------

const mama = [1, 4, 1, 5, 6];

const newArr = [];
for (let y = 0; y < mama.length ; y++) {
  if (!newArr.includes(mama[y])) {
    console.log(newArr)
    newArr.push(mama[y]);
  }
}
// --------------------------------------------------------

const array = [1, 2, 3, [4, 5], null, 6, 'name', { one: 'one' }];

const sumAllNumbersInArray = (arr) => {
  let sum = 0;

  const extractNumbers = (element) => {
    if (typeof element === "number") {
      sum += element;
    } else if (Array.isArray(element)) {
      // Check if the element is an array
      element.forEach((nestedElement) => extractNumbers(nestedElement)); // Recursively call extractNumbers to extract numbers from the array
    } else if (typeof element === "object" && element !== null) {
      // Check if the element is an object
      Object.values(element).forEach((item) => {
        // Extract values of the object and iterate over them
        if (typeof item === "number") {
          sum += item;
        } else {
          extractNumbers(item); // Recursively call the method if the item is not a number
        }
      });
    }
  };

  extractNumbers(arr);
  return sum;
};

console.info(sumAllNumbersInArray(array));


