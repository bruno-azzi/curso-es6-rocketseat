console.log('==================== EXERCICIO 2 ====================')

const usuarios = [
 { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
 { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// MAP
const idades = usuarios.map((item, index) => console.log(`idade do ${index + 1}º usuário:`, item.idade));

// FILTER
const rocketseatMembers = usuarios.filter(item => {
  return item.empresa === 'Rocketseat' && item.idade >= 18;
})

console.log('Membros da Rocketseat:', rocketseatMembers);

// FIND
const googleMembers = usuarios.find(item => {return item.empresa === 'Google'});
console.log('Membros da Google:', googleMembers, 'nenhum');

// CALC
const calcIdade = usuarios
  .map(user => ({ ...user, idade: user.idade * 2 }))
  .filter(user => { return user.idade <= 50 });

console.log('Membros da Rocketseat até 50 anos:', calcIdade);

console.log('==================== END EXERCICIO 2 ====================')
