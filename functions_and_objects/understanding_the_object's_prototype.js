//Entendendo o protótipo do objeto

var volks = {
	fabricante: 'VW'
}

var fox = {
	nome: 'Fox',
	placa: 'AAA-1111'
}

/*
var gol = Object.create(volks);
gol.nome = 'Gol';
gol.placa = 'AAA-2222';
*/

var gol = {
	nome: 'Gol',
	placa: 'AAA-2222',
	__proto__: volks
}

console.log('fox', fox);
console.log('gol', gol);

console.log(Object.getPrototypeOf(fox) === Object.getPrototypeOf(gol));

console.log('fox.fabricante', fox.fabricante);
console.log('gol.fabricante', gol.fabricante);

Object.setPrototypeOf(fox, volks);

console.log('fox.fabricante ->', fox.fabricante);
console.log('gol.fabricante ->', gol.fabricante);