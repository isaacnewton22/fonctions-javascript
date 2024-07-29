function mettreEnMajuscules(phrase) {
    return phrase.split(' ').map(mot => mot.charAt(0).toUpperCase() + mot.slice(1)).join(' ');
}

let phrase = "bonjour tout le monde";
let phraseMajuscules = mettreEnMajuscules(phrase);
console.log(phraseMajuscules);
