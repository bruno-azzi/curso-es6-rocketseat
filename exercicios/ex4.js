console.log('==================== EXERCICIO 4 ====================')

const empresa = {
  nome: 'RCA Digital',
  endereco: {
    cidade: 'Estância Velha',
    estado: 'RS',
  }
};

const { nome, endereco: { estado, cidade } } = empresa;

console.log(nome);
console.log(estado);
console.log(cidade);

// ============================================================

const mostraInfo = ({ nome, idade }) => {
  return `${nome} tem ${idade} anos.`;
}

console.log( mostraInfo({ nome: 'Bruno Azzi', idade: 19 }) );

console.log('==================== END EXERCICIO 4 ====================')
