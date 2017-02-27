var active = true;
var adminitrator = false;

console.log(active);
console.log(adminitrator);

console.log(active ? 'sim ativo' : 'nao ativo');
console.log(adminitrator ? 'sim adminitrator' : 'nao adminitrator');

console.log(active &&  adminitrator ? 'sim' : 'nao');
console.log(adminitrator || active ? 'sim' : 'nao');
