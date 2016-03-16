/**
 * Created by baltazar on 16/03/16.
 */

var peso = prompt('Quanto está pesando?.');
var estatura = prompt('Quanto você mede?.');
var stat = estatura.toString();
var altura = stat.charAt(0) + '.' + stat.charAt(1) + stat.charAt(2);

var imc = peso / (altura * altura);

var mostra = function(frase) {
	document.write(frase);
};

mostra('Seu indice de massa corporal é de ' + imc);