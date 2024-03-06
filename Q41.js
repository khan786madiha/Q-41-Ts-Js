"use strict";
// 41.	Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
// function showMagicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }
// const magicianNames: string[] = ["Penn Jillette", "Criss Angel", "Teller"];
// showMagicians(magicianNames);
// 2ND WAY
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
const magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
show_magicians(magicianNames);
