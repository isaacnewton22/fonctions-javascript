function inverserChaine(chaine) {
    return chaine.split('').reverse().join('');
}
let chaine = "Bonjour";
let chaineInversee = inverserChaine(chaine);
console.log(chaineInversee);
