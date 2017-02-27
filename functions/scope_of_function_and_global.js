var nome = 'Bernardo'; // variável global

var capitalizar = function() {
	// nome é uma variável local à função capitalizar
	var nome = 'Bernardo'.toUpperCase();
}
capitalizar();
console.log('nome', nome);

var capitalizar2 = function() {
	nome = 'Bernardo'.toUpperCase();
}
capitalizar2();
console.log('nome2', nome);