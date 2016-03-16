/**
 * Created by baltazar on 16/03/16.
 */

var peso = prompt('Quanto está pesando?.');
var altura = prompt('Quanto você mede?.');

var imc = peso / (altura * altura);

var mostra = function(frase) {
	document.write(frase);
};

mostra('Seu indice de massa corporal é de ' + imc);