console.log('================= AULA 6 =================');

const user = {
  nome: 'Bruno',
  idade: 19,
  endereco: {
    cidade: 'Estância Velha',
    estado: 'RS'
  }
}

// const nome = user.nome;
// const idade = user.idade;
// const cidade = user.endereco.cidade;

const {nome, idade, endereco: { cidade } } = user;

console.log(nome);
console.log(idade);
console.log(cidade);

// function mostraNome(usuario) {
//   console.log(usuario.nome);
// }

function mostraNome({
  nome,
  idade,
  endereco: {
    cidade,
    estado
  }
}) {
  console.log(nome, idade, cidade, estado);
}

mostraNome(user);

console.log('================= END AULA 6 =================');