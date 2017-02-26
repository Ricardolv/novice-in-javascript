var x = 'Teste';
console.log('tipo ',typeof x, ' aspas simples ', x);

x = "Teste";
console.log('tipo ',typeof x, ' aspas duplas ', x);

// recurso para obter o tamanho de um string 
console.log('tamanho de uma string', x.length);

// comprara string
var a = 'teste';
var b = 'teste';
console.log('comparacao ', a === b);

// indice de uma determinada string
var m = 'Seja bem vindo';
console.log('indice ', m.indexOf('vindo'));
console.log('indice last ', m.lastIndexOf('o'));

// substring
var s = 'Testando substring';
console.log('substring ', s.substring(0, 8));

//slice
console.log('slice ', s.slice(0, 8));
//str
console.log('substr ', s.substr(5, 8));
//replace
console.log('replace ', s.replace('Testando', 'testado'));