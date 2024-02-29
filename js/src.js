// addEventListener(onclick, function() {
     
// });

const sum = (arr) => {
    let mul=1;
    let arr2 = [];
    for (const i of arr) {
        mul = i * 2;
        arr2.push(mul);
    }
    return arr2;
};
const numbers = [3,4,5,6];
const mul = numbers =>numbers.map(n => n*n ) 



console.log(mul(numbers));