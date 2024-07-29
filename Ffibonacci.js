function fibonacci(n) {
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
let termes = 10;
console.log("Séquence de Fibonacci jusqu'à " + termes + " termes:", fibonacci(termes));
