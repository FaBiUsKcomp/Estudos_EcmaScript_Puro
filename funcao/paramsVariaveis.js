function soma() {
    let soma = 0;
    for(let i in arguments) {
        soma += arguments[i];
    }
    return soma
}

console.log(soma())
console.log(soma(2,3))
console.log(soma(1,2,3,4,5))
console.log(soma('a','b','c'))