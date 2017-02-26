var idade = 25;
console.log('tipo ',typeof idade, ' valor ', idade);

// Variavel Tipo numero
// No javascript todo numero e do tipo number, nao e como outras linguagens
// e tem um probleminha famoso de precisao

var x = 0.3 - 0.2;
console.log('resultado errado', x);

//nao faca contas de ponto flutuantes 
//resolvendo a questao

x = (0.3 * 10 - 0.2 * 10) / 10;
console.log('resultado correto', x);

// devido ser tipo existem varias funcoes de dados 
var y = 10;

// string em binario
console.log('binario ', y.toString(2));

// string em hexadecimal
console.log('hexadecimal ', y.toString(16));

// arrendodamento 
y = 10.99;
console.log('arredondamento ', y.toFixed());

// Existe tres casos especiaias do tipo number:
	// Infinito e menos infinito
	var i = 10 / 0 ;
	console.log('Infinito tipo ', typeof i, ' valor ', i);

	i = -10 / 0 ;
	console.log('Menos infinito tipo ', typeof i, ' valor ', i);

	// NoNanumber
	var z = 10 / 'teste';
	console.log('tipo ', typeof z, ' valor ', z, ' funcao isNaN ', isNaN(z));

	// 
	var y = 10 / '2';
	console.log('tipo ', typeof y, ' valor ', y);