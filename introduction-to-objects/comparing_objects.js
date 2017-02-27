var bernardo = {
	nome: 'Bernardo',
	idade: 4,
	email: 'teste@email.com',
	igualA: function(obj) {
		return this.email === obj.email;
	}
}

var hadassa = {
	nome: 'Hadassa',
	idade: 3,
	email: 'teste2@email.com',
	igualA: function(obj) {
		return this.email === obj.email;
	}
}

console.log(bernardo === hadassa);
console.log('Bernardo e Hadassa tem os mesmos e-mails?', bernardo.igualA(hadassa));