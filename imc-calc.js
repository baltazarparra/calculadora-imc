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

var imc = peso / (altura * altura);

	var para = document.createElement("p");
	var node = document.createTextNode(imc);
	para.appendChild(node);
	var element = document.getElementById("div1");
	element.appendChild(para);
	return false;
}

