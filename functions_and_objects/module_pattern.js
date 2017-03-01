// 	Sem Module Pattern
console.log('Sem Module Pattern');
var contador = {

	valor: 0,
	incrementar: function() {
		this.valor++;
	},
	reset: function() {
		console.log('Valor do contador agora', this.valor);
		this.valor = 0;
	}

}

contador.incrementar();
contador.incrementar();

contador.reset();

contador.incrementar();
contador.reset();

console.log('=========================');
console.log('Com Module Pattern');

// 	Module Pattern
//	Outros exemplos: 
// 	https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

var contadorMP = (function() {
	var valor = 0; //privado 

	return {
		incrementar: function() {
			valor++;
		},
		reset: function() {
			console.log('Valor do contador:', valor);
			valor = 0;
		}
	}

})();

contadorMP.incrementar();
contadorMP.incrementar();
contadorMP.reset();


