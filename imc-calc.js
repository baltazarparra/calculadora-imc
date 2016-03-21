/**
 * Created by baltazar on 16/03/16.
 */

function imcCalc(){

var kilos = document.getElementById("peso").value;
var kg = kilos.toString();
var gramas = kg.replace(',','.');
var peso = Math.round(gramas);

var estatura = document.getElementById("estatura").value;

var replaceVirgula = estatura.replace(',','.');
var alturaString = replaceVirgula.toString();
var validaPonto = alturaString.replace('.','');
var altura = validaPonto.charAt(0) + '.' + validaPonto.charAt(1) + validaPonto.charAt(2);

var indice = peso / (altura * altura);
var imc = indice.toFixed(2);

	if (document.getElementById('homem').checked) {
		rate_value = document.getElementById('homem').value;
		if (imc < 20) {
			var node = document.createTextNode('Seu imc é de ' + imc + ' ' + 'Está abaixo do normal, você precisa começar a comer direito.');
		} else if (imc > 28) {
			var node = document.createTextNode('Seu imc é de ' + imc + ' ' + 'Está alto mano, você precisa se alimentar melhor.');
		} else {
			var node = document.createTextNode('Seu imc é de ' + imc + ' ' + 'Está de boas cara, continue assim.');
		}

	} else {
		if (imc < 19) {
			var node = document.createTextNode('Seu imc é de ' + imc + ' ' + 'Está abaixo do normal flor, você precisa começar a comer direito.');
		} else if (imc > 27) {
			var node = document.createTextNode('Seu imc é de ' + imc + ' ' + 'Está alto lindinha, você precisa se alimentar melhor.');
		} else {
			var node = document.createTextNode('Seu imc é de ' + imc + ' ' + 'Ui delicia, continue assim.');
		}
	}

	var para = document.createElement("h1");

	para.appendChild(node);
	var element = document.getElementById("txt");
	element.appendChild(para);
	return false;
}

