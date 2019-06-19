console.log('==================== EXERCICIO 5 ====================')

// REST
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;

console.log('x =', x, 'y =', y);

// ============================================================

const soma = (...params) => {
  return params.reduce((total, next) => total + next);
}
console.log('soma =', soma(10, 5, 5, 30));

// SPREAD
const ex2Usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};

const ex2Usuario2 = { ...ex2Usuario, nome: 'Gabriel'};
console.log(ex2Usuario2);

const ex2Usuario3 = { ...ex2Usuario, endereco: { cidade: 'Lontras', ...ex2Usuario.endereco } };
console.log(ex2Usuario3);

console.log('==================== END EXERCICIO 5 ====================')
