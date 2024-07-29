function filtrerTableau(tableau, condition) {
    let resultat = [];
    for (let i = 0; i < tableau.length; i++) {
        if (condition(tableau[i])) {
            resultat.push(tableau[i]);
        }
    }
    return resultat;
}

let nombres = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let condition = function(nombre) {
    return nombre > 4;
};
console.log("Filtré:", filtrerTableau(nombres, condition));
