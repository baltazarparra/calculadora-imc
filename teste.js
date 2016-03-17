/**
 * Created by baltazar on 16/03/16.
 */


var estatura = 187;
var replacePonto = estatura.replace('.','');
var replaceVirgula = replacePonto.replace(',','');
var tiraLetra = parseInt(replaceVirgula);
var altura = tiraLetra.charAt(0) + '.' + tiraLetra.charAt(1) + tiraLetra.charAt(2);

console.log(altura);