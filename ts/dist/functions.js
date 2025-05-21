"use strict";
//возвращает
function sum(a, b) {
    return String(a + b);
}
sum(2, 4);
// не возвращает
const sayHi = (name) => {
    console.log('Hi ', name);
};
//never
const createError = () => {
    throw new Error('Oooops!');
};
