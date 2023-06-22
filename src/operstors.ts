1 === 1        // true
// 1 === '1'      // false
// true === 1     // false
null === null  // true

// сравнивнивает значение и типы 
// strict equality , compares value and type 

1 == 1        // true
// 1 == '1'      // true
// true == 1     // true
null == undefined // true

// пытается привести к одному типу 
// try to make both variables to one type

// -----------------------------------------------

console.log(true || 0) //первое true либо последнее false

console.log(false && 1) //первое false , лиюо последнее true

console.log(null ?? 'mama') //возвращет правое значение если перво  is null or undefined.

// -------------------------------------------------

interface Person {
    name:string
    secondName?:string
}

const person:Person = {
    name: 'Danyil'
  };
  
  console.log(person?.secondName);//если использовать Optional Chaning не выдаст ошибку а вернет undefined

//   -------------------------------------------------

 