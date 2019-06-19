// MANEIRAS DE IMPORT

// import { soma, sub } from './functions';

// console.log(soma(1, 5));
// console.log(sub(1, 5));

// ============================================================

// import soma from './soma'; //

// console.log(soma(1, 5));

// ============================================================

// =============== EXERCICIOS ===============

// 1.1 E 1.2
// import * as functions from './functions';

// console.log(functions.soma(1, 5));

// import ClasseUsuario from './functions';
// import { idade } from './functions';

// ClasseUsuario.info();

// console.log(idade);

// 1.3
import Usuario, { idade as IdadeUsuario } from './functions';

console.log(IdadeUsuario);
Usuario.info();

// ============================================================

const minhaPromise = () => new Promise((resolve, reject) => {
  console.log('Começou')
  setTimeout(() => {
    resolve('Terminou')
  }, 2000);
})

// minhaPromise()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   })

// async function executaPromise() {
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
// }

const executaPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}

executaPromise();

import axios from 'axios';

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log('response:', response);
      
    } catch (error) {
      console.warn(error);      
    }
  }
}

Api.getUserInfo('bruno-azzi');

// ============================================================

// EXERCICIOS ASYNC AWAIT

// =========================== EX 1 ===========================

// Funcão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// function umPorSegundo() {
//   delay().then(() => {
//     console.log('1s');
//     delay().then(() => {
//       console.log('2s');
//       delay().then(() => {
//         console.log('3s');
//       });
//     })
//   });
// }

const umPorSegundo = async () => {
  await delay();
  console.log('1s');

  await delay();
  console.log('2s');

  await delay();
  console.log('3s');
}

umPorSegundo();

// =========================== END EX 1 ===========================


// =========================== EX 2 ===========================

async function getUserFromGithub(user) {
  // axios.get(`https://api.github.com/users/${user}`)
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(err => {
  //     console.log('Usuário não existe');
  //   })

  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log('resposta', response);
  } catch (error) {
    console.log('Usuário não existe');
  }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

// =========================== END EX 2 ===========================


// =========================== EX 3 ===========================

class Github {
  // static getRepositories(repo) {
  //   axios.get(`https://api.github.com/repos/${repo}`)
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(err => {
  //       console.log('Repositório não existe');
  //     })
  // }

  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log('getRepositories:', response);
    } catch (error) {
      console.log('Repositório não existe');
    }
  }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

// =========================== END EX 3 ===========================


// =========================== EX 4 ===========================

// const buscaUsuario = usuario => {
//   axios.get(`https://api.github.com/users/${user}`)
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(err => {
//       console.log('Usuário não existe');
//     });
// }

const buscaUsuario = async usuario => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log('resposta', response);
  } catch (error) {
    console.log('Usuário não existe');
  }
}

buscaUsuario('dasdasdasdas');

// =========================== END EX 4 ===========================
