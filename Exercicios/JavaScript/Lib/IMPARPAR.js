function par(a) {
let numero = a.filter(value => value % 2 == 0);

let total = 0;

for(let i=0; i<numero.length; i++) {
    total += numero[i];
}
return total;
}
console.log(par([1, 2, 3, 4, 5]));
console.log(par([2, 4, 6, 8]));
console.log(par([1, 2, 3, 4, 5]));
console.log(par([1, 3, 5, 7]));