/*
	function name(args) {
		return;
	}
*/

// teste no browser
// alert('Atencao');

// console e uma funcao
console.log('LOG');

//FUNCAO MATEMATICAS

var menorNota = Math.min(3, 5, 1, 6, 10);
console.log('menor nota: ', menorNota);

var maiorNota = Math.max(3, 5, 1, 6, 10);
console.log('maior nota: ', maiorNota);

var temperatura = Math.round(22.3);
console.log('temperatura: ', temperatura);

var valor = Math.random();
console.log('valor aleatorio: ', valor);

var sorteio =  valor * 60;
console.log('numero sorteado: ', sorteio);

//var numeroMega = Math.floor(4.2);
//console.log('numero arrendodado para baixo: ', numeroMega);

var numeroMega = Math.floor(sorteio) + 1;
console.log('numero da mega: ', numeroMega);