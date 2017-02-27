var joao = {
	nome: 'joao',
	idade: 25,
	endereco: {
		logradouro: 'AV Brasilia',
		numero: '100',
		complemento: 'Apto 202',
		cidade: 'BH',
		estado: 'MG'
	}
}

console.log(joao);
console.log('==============================');

for (var prop in joao) {
	console.log(prop, '->', joao[prop]);
}