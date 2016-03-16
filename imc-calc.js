/**
 * Created by baltazar on 16/03/16.
 */

var peso = prompt('Quanto está pesando?.');
var estatura = prompt('Quanto você mede?.');
var virgula = estatura.replace(',','.');
var stat = virgula.toString();
var rem = stat.replace('.','');
var altura = rem.charAt(0) + '.' + rem.charAt(1) + rem.charAt(2);

var imc = peso / (altura * altura);

var mostra = function(frase) {
	document.write(frase);
};

mostra('Seu indice de massa corporal é de ' + imc);