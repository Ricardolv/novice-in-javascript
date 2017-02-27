//Conceito de clousers

function incrementar() {
	var valor = 0;
	return function() {
		return ++valor;
	};
}

var fn = incrementar();
console.log(fn());
console.log(fn());
console.log(fn());

console.log('=');

var incrementar = (function() {
	var valor = 0;
	return function() {
		return ++valor;
	};
})();

console.log(incrementar());
console.log(incrementar());
console.log(incrementar());