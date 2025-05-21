//возвращает

function sum(a: number, b: number):string {
    return String(a + b)
}

sum(2, 4);

// не возвращает

const sayHi = (name: string):void => {
    console.log('Hi ', name)
}

//never

const createError = ():never => {
    throw new Error('Oooops!')
}