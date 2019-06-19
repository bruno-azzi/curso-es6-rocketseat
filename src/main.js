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