/*
Snack 1:
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es:
['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
*/
console.log('SNACK 1');
console.log(' ');

const arrDisney = ['pippo', 'PLUTO', 'Paperino', 'MINNIE', 'topolino', 'GasTone'];
console.log(arrDisney);

const arrDisneyUppercase = [];

arrDisney.forEach(disneyCharacter => {
    let disneyCharacterLowerCase = disneyCharacter.toLowerCase();
    //console.log(disneyCharacterLowerCase);
    let disneyCharacterCapitalized = disneyCharacterLowerCase.charAt(0).toUpperCase() + disneyCharacterLowerCase.slice(1);
    //console.log(disneyCharacterCapitalized);
    arrDisneyUppercase.push(disneyCharacterCapitalized);
})
console.log(arrDisneyUppercase);
console.log(' ');





/*
Snack 2:
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.
*/
console.log('----------');
console.log('SNACK 2');
console.log(' ');

const arrAnimali = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi'
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },
    {
        nome: 'tartaruga',
        famiglia: 'testudinidi',
        classe: 'rettili'
    },
    {
        nome: 'rana',
        famiglia: 'ranidi',
        classe: 'anfibi'
    },
    {
        nome: 'delfino',
        famiglia: 'delfinidi',
        classe: 'mammiferi'
    },
    {
        nome: 'colibrì',
        famiglia: 'trochilidi',
        classe: 'uccelli'
    },
    {
        nome: 'trota',
        famiglia: 'salmonidi',
        classe: 'pesci'
    },
    {
        nome: 'elefante',
        famiglia: 'elefantidi',
        classe: 'mammiferi'
    },
    {
        nome: 'cobra',
        famiglia: 'elapidi',
        classe: 'rettili'
    }
]

console.table(arrAnimali);

let arrMammiferi = [];

arrAnimali.forEach(animale => {
    if (animale.classe == 'mammiferi' && !arrMammiferi.includes(animale)) {
        arrMammiferi.push(animale.nome)
    }    
})
console.log(arrMammiferi);
console.log(' ');





/*
Snack 3:
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/
console.log('----------');
console.log('SNACK 3');
console.log(' ');