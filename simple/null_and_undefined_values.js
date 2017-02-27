var x;
console.log(x);

console.log(null === undefined);
console.log(x === undefined);
console.log(x === null);

console.log(null == undefined);

x = 10;
console.log(x == null);
console.log(x == undefined);
console.log(x != null ? 'existe um valor em x: '+ x : 'x nao tem valor');

x = null;
console.log(x == null);
console.log(x == undefined);
console.log(x != null ? 'existe um valor em x: '+ x : 'x nao tem valor');

x = undefined;
console.log(x == null);
console.log(x == undefined);
console.log(x != null ? 'existe um valor em x: '+ x : 'x nao tem valor');