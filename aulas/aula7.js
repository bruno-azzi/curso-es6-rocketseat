console.log('================= AULA 7 =================');

// REST
const User = {
  UserNome: 'Bruno Azzi',
  UserIdade: 19,
  UserEmpresa: 'RCA Digital'
}

const {
  UserNome,
  ...resto
} = User;

console.log(UserNome);
console.log('resto', resto);

const restArray = [1, 2, 3, 4, 5, 6, 7, 8, {
  data: {
    diaMes: '10/06',
    ano: '2019'
  }
}];
const [a, b, ...c] = restArray;

console.log('a = ', a);
console.log('b = ', b);
console.log('c = ', c);

function somaRest(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(somaRest(1, 3, 4, 5, 7, 8));

// SPREAD
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];

console.log('array3', array3);

const spreadUser = {
  nome: 'Bruno',
  idade: 19,
  empresa: 'RCA Digital'
}

const spreadUser2 = {
  ...spreadUser,
  nome: 'Azzi',
  estado: 'RS',
  cidade: 'Estância Velha'
};

console.log(spreadUser2);

console.log('================= END AULA 7 =================');
