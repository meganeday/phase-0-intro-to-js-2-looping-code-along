// Code your solutions in this file
let cards = [];
let names = ["Lisa", "Kaitlin", "Jan"];

function writeCards(names) {
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    };
    return cards;
};

writeCards();

function countDown() {
    let count = 10;
    while (count > -1) {
        console.log(count--);
    }
};