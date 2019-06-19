console.log('==================== EXERCICIO 3 ====================')

// 1ª FUNÇÃO =========================================
const arr = [1, 2, 3, 4, 5];

// arr.map(function (item) {
//   return item + 10;
// });

arr.map(item => { return item + 10 });
console.log(arr)

// 2ª FUNÇÃO =========================================
const usuario = { nome: 'Diego', idade: 23 };

// function mostraIdade(usuario) {
//  return usuario.idade;
// }

const mostraIdade = usuario => usuario.idade;

console.log(mostraIdade(usuario));

// 3ª FUNÇÃO =========================================
const nome = "Diego";
const idade = 23;

// function mostraUsuario(nome = 'Diego', idade = 18) {
//   return {
//     nome,
//     idade
//   };
// }

const mostraUsuario = (nome = 'Diego', idade = 18) => ({ 
  nome, idade
});

console.log(mostraUsuario(nome, idade))
console.log(mostraUsuario(nome))

// 4ª FUNÇÃO =========================================
// const promise = function () {
//   return new Promise(function (resolve, reject) {
//     return resolve();
//   })
// }

const promise = () => new Promise((resolve, reject) => resolve());

console.log('==================== END EXERCICIO 3 ====================')
