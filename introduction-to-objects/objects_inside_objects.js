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

console.log('Cidade: ', joao.endereco.cidade);

console.log('==============================');

joao.endereco.numero = 101;
console.log(joao);

console.log('==============================');
console.log('Estado: ', joao['endereco']['estado']);