/**
 * Created by baltazar on 16/03/16.
 */


var kilos = '80,8';
var kg = kilos.toString();
var gramas = kg.replace(',','.');
var peso = Math.round(gramas);

console.log(peso);