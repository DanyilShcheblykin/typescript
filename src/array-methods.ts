const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue // 10 , 11 , 13 , 16 , 20
}, 10);

// ----------------------------------------------------

const array2 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10); //12 выедет

// ----------------------------------------------------

const array3 = [5, 12, 8, 130, 44];

const isLargeNumber = array3.findIndex(elem => elem > 12) // 3

// ----------------------------------------------------

// сортировка пузырькво , сравнивает по два элемента 

const puzurok = [9, 3, 6, 2, 5, 11, 4, 1]

for (let y = 0; y < puzurok.length - 1; y++) {
    for (let j = 0; j < puzurok.length - y - 1; j++) {
        if (puzurok[j] > puzurok[j + 1]) {
            let temp = puzurok[j]
            puzurok[j] = puzurok[j + 1]
            puzurok[j + 1] = temp
        }
    }
}

// -----------------------------------------------------

const arr = [4, 2, 4, 2, 5, 6, 7, 3, 2];

const newArr1 = arr.sort((a, b) => a - b) // по увелечению 
const newArr2 = arr.sort((a, b) => b - a) // по убыванию 

// -----------------------------------------------------







