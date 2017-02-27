var pessoa1 = 'FISICA';
var pessoa2 = 'JURIDICA';
var pessoa3 = '';

if (pessoa1 === 'FISICA') {
	console.log('pessoa fisica');
} else if (pessoa2 === 'JURIDICA') {
	console.log('pessoa juridica');
} else {
	console.log('pessoa invalida');
}

//============================================

var valor = 0;

if (!valor) {
	console.log('Valor zero');
}

var idade = 20;

if (idade) {
	console.log('Daqui a 5 anos voce tera', idade + 5, ' anos');
}