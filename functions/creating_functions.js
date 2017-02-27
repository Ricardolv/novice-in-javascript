//functions expression
var subtrair = function(a, b) {
	console.log('arguments ->', arguments);
	return a - b;
}

//functions declaration
function somar(a, b) {
	console.log('arguments ->', arguments);
	return a + b;
}

var subtraido = subtrair(65, 5);
console.log('65 + 5 =', subtraido);

var soma = somar(2, 3);
console.log('soma 2 + 3 =', soma);



