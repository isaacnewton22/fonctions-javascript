function trouverMaximum(tableau) {
    let max = tableau[0];
    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > max) {
            max = tableau[i];
        }
    }
    return max;
}

function trouverMinimum(tableau) {
    let min = tableau[0];
    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] < min) {
            min = tableau[i];
        }
    }
    return min;
}
let nombres = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("Maximum:", trouverMaximum(nombres));
console.log("Minimum:", trouverMinimum(nombres));