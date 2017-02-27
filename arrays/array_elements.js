
var acessorio = { som: 'Pioneer', banco: 'Couro' };

var ligar = function(a) {
	console.log('Ligando o carro...', a);
}

var fox = [ 'Fox', 4, acessorio, ligar ];

console.log(fox);
console.log('==========================');
console.log(fox[2].som);
console.log(fox[2].banco);
console.log('==========================');
fox[3]('agora!');
