
const fetchFunctionGet = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users", {
        headers: {
            'Origin': "https://example.com",
            'Access-Control-Allow-Origin': 'https://example.com',
            'content-type': 'application/json', //обозначает что отправлено в Формате Json
            'Cache-Control': 'max-age=3600'//хранится в cache 1 hour
        },
        cache: "default" // кеширует ответ
    }).then(async (response) => {
        const data = await response.json()
        return data
    }).catch(err => err)
    return data
}

// fetchFunctionGet().then(data=> console.log(data)) //fetchFunction() возвращает Promise<pending> поэтому нужен than

// --------------------------------------------------------

const body = {
    name: "Danyil",
    secondName: 'Shcheblykin'
}

const fetchFunctionPost = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users", {
        headers: {
            'Origin': "https://example.com",
            'Access-Control-Allow-Origin': 'https://example.com',
            'content-type': 'application/json', //обозначает что отправлено в Формате Json
            'Cache-Control': 'max-age=3600'//хранится в cache 1 hour
        },
        cache: "default",// кеширует ответ
        method: "POST",
        body: JSON.stringify(body)

    }).then(async (response) => {
        const data = await response.json()
        return data //получу обьект который сделал 
    }).catch(err => err)
    return data
}

// fetchFunctionPost().then(data => console.log(data))


// --------------------------------------------------------
const putBody = {
    name: "Danyil",
    secondName: 'Shcheblykin'
}

const fetchFunctionPut = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/1", {
        headers: {
            'Origin': "https://example.com",
            'Access-Control-Allow-Origin': 'https://example.com',
            'content-type': 'application/json', //обозначает что отправлено в Формате Json
            'Cache-Control': 'max-age=3600'//хранится в cache 1 hour
        },
        cache: "default",// кеширует ответ
        method: "PUT",
        body: JSON.stringify(putBody)

    }).then(async (response) => {
        const data = await response.json()
        return data //получу обьект который сделал  
    }).catch(err => err)
    return data
}

fetchFunctionPut().then(data => console.log(data))


// --------------------------------------------------------


const fetchFunctionPromise = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/users", {
                headers: {
                    'Origin': "https://example.com",
                    'Access-Control-Allow-Origin': 'https://example.com',
                    'content-type': 'application/json', //обозначает что отправлено в Формате Json
                    'Cache-Control': 'max-age=3600'//хранится в cache 1 hour
                },
                cache: "default" // кеширует ответ
            })
            const dataJson = data.json()
            resolve(dataJson)
        } catch (err) {
            reject(err)
        }

    })
}

// fetchFunctionPromise().then(data=> console.log(data))

// --------------------------------

const getResp = () => {
    return fetch('https://jsonplaceholder.typicode.com/users').then(data => data.json())
}

console.log(getResp())
