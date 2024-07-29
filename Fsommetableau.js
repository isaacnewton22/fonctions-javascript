function sommeTableau(tableau) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme;
}

let nombres = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("Somme:", sommeTableau(nombres));
