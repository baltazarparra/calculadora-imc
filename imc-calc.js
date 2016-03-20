/**
 * Created by baltazar on 16/03/16.
 */

function imcCalc(){


var peso = document.getElementById("peso").value;
var estatura = document.getElementById("estatura").value;

var replaceVirgula = estatura.replace(',','.');
var alturaString = replaceVirgula.toString();
var validaPonto = alturaString.replace('.','');
var altura = validaPonto.charAt(0) + '.' + validaPonto.charAt(1) + validaPonto.charAt(2);

var indice = peso / (altura * altura);
var imc = indice.toFixed(2);

	if (document.getElementById('homem').checked) {
		rate_value = document.getElementById('homem').value;
		var sexo = 'E ai mano, ';
	} else {
		var sexo = 'Ei flor, ';
	}

	var para = document.createElement("h1");

	if (imc < 24) {
		var node = document.createTextNode(imc + ' ' + sexo + 'seu imc está abaixo do normal, você precisa começar a comer direito.');
	} else if (imc > 26 ) {
		var node = document.createTextNode(imc + ' ' + sexo + 'seu imc está Alto! vamos começar a fechar a boquinha?');
	}

	para.appendChild(node);
	var element = document.getElementById("div1");
	element.appendChild(para);
	return false;
}

