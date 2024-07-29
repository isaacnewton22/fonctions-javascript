function estPremier(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
let nombre = 7;
console.log("Le nombre " + nombre + " est premier:", estPremier(nombre)); 