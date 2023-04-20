
function reverseArray<T>(array: T[]): T[] {
    return array.reverse();
}

const numbers = [1, 2, 3, 4, 5];

const reversedNumbers = reverseArray(numbers);

//   ---------------------------------------------------

interface GebericInterface<T> {
    name: T
}

const genericObj: GebericInterface<string> = {
    name: "Danyil"
}

