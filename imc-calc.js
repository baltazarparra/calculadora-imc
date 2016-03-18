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

	//if (document.getElementById('homem').checked) {
	//	rate_value = document.getElementById('homem').value;
	//	var sexo = document.createTextNode('HOMEM');
	//} else {
	//	var sexo = document.createTextNode('MULHER');
	//}

	var para = document.createElement("h1");
	var node = document.createTextNode('Seu indice de massa corporal é de: ' + imc);
	para.appendChild(node);
	var element = document.getElementById("div1");
	element.appendChild(para);
	return false;
}

