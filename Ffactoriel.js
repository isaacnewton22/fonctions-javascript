function factorielle(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorielle(n - 1);
}
let nombre = 5;
console.log("Factorielle de " + nombre + ":", factorielle(nombre)); 
