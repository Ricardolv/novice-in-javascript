//Introducao a objetos

/*
	{
		chave1: valor1,
		chave2: valor1,
		chave3: function(argument) {},
	}
*/

var fox = { cor: 'prata', modelo: 'Fox', fabricante: 'VW'}
console.log('fox: ', fox);
console.log(typeof fox);
console.log('Cor do fox: ', fox.cor);

fox.cor = 'Preto';
console.log('Cor do fox alterado: ', fox.cor);
console.log('Modelo: ', fox['modelo']);

fox.peso = 1500;
console.log('fox: ', fox);

//undefined
console.log('potencia: ', fox.potencia);

fox.ligar = function() {
	console.log('carro ligado');
};

console.log('fox: ', fox);
fox.ligar();

var celta = {
	cor: 'prata',
	modelo: 'celta',
	fabricante: 'GM',
	ligar: function() {
		console.log('carro ligado');
	}
};

console.log('celta', celta);