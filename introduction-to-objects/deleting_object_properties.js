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

delete joao.idade;
console.log(joao);

console.log('==============================');

delete joao.endereco.estado;
console.log(joao);

