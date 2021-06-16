// define a global method to handle the try-catch 

// returns [data, error]
const processPromise = async (p: Promise<any>) => {
    try {
        const res = await p;
        return [res, null];
    } catch (error) {
        return [null, error];
    }
}


// example
const randomNumber = (): Promise<number> => {
    return new Promise((resolve, reject) => {
        resolve(Math.random());
    });
}


const getRandomNumberAndIncrement = async () => {
    const [data, error] = await processPromise(randomNumber());
    if (error) {
        console.log(error);
    }
    console.log(data);
}