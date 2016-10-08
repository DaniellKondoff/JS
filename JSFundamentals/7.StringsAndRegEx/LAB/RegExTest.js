/**
 * Created by Kondoff on 05-Oct-16.
 */
var towns =
    "Sofia, Varna,Pleven,  Veliko Tarnovo;  Paris – London––Viena\n\n Пловдив|Каспичан";
console.log(towns.split(/\W+/)); // incorrect
console.log(towns.split(/\s*[.,|;\n\t–]+\s*/));
