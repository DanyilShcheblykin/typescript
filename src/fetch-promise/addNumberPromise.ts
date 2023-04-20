function addNumbers(a: number, b: any): Promise<number> {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) {
            reject(new Error('One or both arguments are not numbers'));
        } else {
            resolve(a + b);
        }
    });
}

addNumbers(2, 'foo')
    .then(result => console.log(`Result: ${result}`))
    .catch(error => console.error(error.message));

// -------------------------------------------------

const resp = Promise.resolve(43)

resp.then(data => console.log(data))