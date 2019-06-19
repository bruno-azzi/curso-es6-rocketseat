"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log('================ AULA 1 =================');

var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
    _this.usuario = 'Bruno Azzi';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  return TodoList;
}(List);

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Novo todo');
};

MinhaLista.mostraUsuario();

var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      console.log(a + b);
      return a + b;
    }
  }]);

  return Matematica;
}();

Matematica.soma(5, 2);
console.log('================ END AULA 1 =================');
"use strict";

console.log('================ AULA 2 =================');
var usuario = {
  nome: 'Bruno'
};
usuario.nome = 'Azzi';
console.log(usuario);

function teste(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
}

teste(10);
console.log('================= END AULA 2 =================');
"use strict";

console.log('==================== AULA 3 ====================');
var arr = [1, 3, 4, 5, 8, 10];
var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);
console.log('==================== END AULA 3 ====================');
"use strict";

console.log('==================== AULA 4 ====================');
var arr2 = [1, 3, 4, 5, 6];
var newArr2 = arr2.map(function (item) {
  return item * 2;
});
console.log(newArr2);

var constFunction = function constFunction() {
  return {
    nome: 'Brunoooooo'
  };
};

console.log(constFunction());
console.log('==================== END AULA 4 =================');
"use strict";

console.log('================= AULA 5 =================');

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(soma(4));
console.log(soma());
console.log('================= END AULA 5 =================');
"use strict";

console.log('================= AULA 6 =================');
var user = {
  nome: 'Bruno',
  idade: 19,
  endereco: {
    cidade: 'Estância Velha',
    estado: 'RS'
  } // const nome = user.nome;
  // const idade = user.idade;
  // const cidade = user.endereco.cidade;

};
var nome = user.nome,
    idade = user.idade,
    cidade = user.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade); // function mostraNome(usuario) {
//   console.log(usuario.nome);
// }

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      _ref$endereco = _ref.endereco,
      cidade = _ref$endereco.cidade,
      estado = _ref$endereco.estado;
  console.log(nome, idade, cidade, estado);
}

mostraNome(user);
console.log('================= END AULA 6 =================');
"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

console.log('================= AULA 7 ================='); // REST

var User = {
  UserNome: 'Bruno Azzi',
  UserIdade: 19,
  UserEmpresa: 'RCA Digital'
};

var UserNome = User.UserNome,
    resto = _objectWithoutProperties(User, ["UserNome"]);

console.log(UserNome);
console.log('resto', resto);
var restArray = [1, 2, 3, 4, 5, 6, 7, 8, {
  data: {
    diaMes: '10/06',
    ano: '2019'
  }
}];
var a = restArray[0],
    b = restArray[1],
    c = restArray.slice(2);
console.log('a = ', a);
console.log('b = ', b);
console.log('c = ', c);

function somaRest() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(somaRest(1, 3, 4, 5, 7, 8)); // SPREAD

var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var array3 = [].concat(array1, array2);
console.log('array3', array3);
var spreadUser = {
  nome: 'Bruno',
  idade: 19,
  empresa: 'RCA Digital'
};

var spreadUser2 = _objectSpread({}, spreadUser, {
  nome: 'Azzi',
  estado: 'RS',
  cidade: 'Estância Velha'
});

console.log(spreadUser2);
console.log('================= END AULA 7 =================');
"use strict";

console.log('================= AULA 8 =================');
var meuNome = 'Bruno Azzi';
var minhaIdade = 19;
console.log("Meu nome \xE9 ".concat(meuNome, " e tenho ").concat(minhaIdade, " anos."));
console.log('================= END AULA 8 =================');
"use strict";

console.log('================= AULA 9 =================');
var shortName = 'Bruno';
var shortIdade = 23;
var shortUsuario = {
  shortName: shortName,
  shortIdade: shortIdade,
  empresa: 'RCA'
};
console.log(shortUsuario);
console.log('================= END AULA 9 =================');
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log('==================== EXERCICIO 1 ====================');

var Usuario =
/*#__PURE__*/
function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin === true;
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var user = new Usuario('bruno@usuario.com', 'user123');
var adm = new Admin('bruno@admin.com', 'admin123');
console.log(adm);
console.log(user);
console.log(adm.isAdmin());
console.log(user.isAdmin());
console.log('==================== END EXERCICIO 1 ====================');
"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log('==================== EXERCICIO 2 ====================');
var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; // MAP

var idades = usuarios.map(function (item, index) {
  return console.log("idade do ".concat(index + 1, "\xBA usu\xE1rio:"), item.idade);
}); // FILTER

var rocketseatMembers = usuarios.filter(function (item) {
  return item.empresa === 'Rocketseat' && item.idade >= 18;
});
console.log('Membros da Rocketseat:', rocketseatMembers); // FIND

var googleMembers = usuarios.find(function (item) {
  return item.empresa === 'Google';
});
console.log('Membros da Google:', googleMembers, 'nenhum'); // CALC

var calcIdade = usuarios.map(function (user) {
  return _objectSpread({}, user, {
    idade: user.idade * 2
  });
}).filter(function (user) {
  return user.idade <= 50;
});
console.log('Membros da Rocketseat até 50 anos:', calcIdade);
console.log('==================== END EXERCICIO 2 ====================');
"use strict";

console.log('==================== EXERCICIO 3 ===================='); // 1ª FUNÇÃO =========================================

var arr = [1, 2, 3, 4, 5]; // arr.map(function (item) {
//   return item + 10;
// });

arr.map(function (item) {
  return item + 10;
});
console.log(arr); // 2ª FUNÇÃO =========================================

var usuario = {
  nome: 'Diego',
  idade: 23
}; // function mostraIdade(usuario) {
//  return usuario.idade;
// }

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log(mostraIdade(usuario)); // 3ª FUNÇÃO =========================================

var nome = "Diego";
var idade = 23; // function mostraUsuario(nome = 'Diego', idade = 18) {
//   return {
//     nome,
//     idade
//   };
// }

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome)); // 4ª FUNÇÃO =========================================
// const promise = function () {
//   return new Promise(function (resolve, reject) {
//     return resolve();
//   })
// }

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

console.log('==================== END EXERCICIO 3 ====================');
"use strict";

console.log('==================== EXERCICIO 4 ====================');
var empresa = {
  nome: 'RCA Digital',
  endereco: {
    cidade: 'Estância Velha',
    estado: 'RS'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    estado = _empresa$endereco.estado,
    cidade = _empresa$endereco.cidade;
console.log(nome);
console.log(estado);
console.log(cidade); // ============================================================

var mostraInfo = function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
};

console.log(mostraInfo({
  nome: 'Bruno Azzi',
  idade: 19
}));
console.log('==================== END EXERCICIO 4 ====================');
"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log('==================== EXERCICIO 5 ===================='); // REST

var arr = [1, 2, 3, 4, 5, 6];
var x = arr[0],
    y = arr.slice(1);
console.log('x =', x, 'y =', y); // ============================================================

var soma = function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
};

console.log('soma =', soma(10, 5, 5, 30)); // SPREAD

var ex2Usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var ex2Usuario2 = _objectSpread({}, ex2Usuario, {
  nome: 'Gabriel'
});

console.log(ex2Usuario2);

var ex2Usuario3 = _objectSpread({}, ex2Usuario, {
  endereco: _objectSpread({
    cidade: 'Lontras'
  }, ex2Usuario.endereco)
});

console.log(ex2Usuario3);
console.log('==================== END EXERCICIO 5 ====================');
"use strict";

console.log('==================== EXERCICIO 6 ====================');
var usuario = 'Bruno';
var idade = 19; // console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');

console.log("O usu\xE1rio ".concat(usuario, " possui ").concat(idade, " anos"));
console.log('==================== END EXERCICIO 6 ====================');
"use strict";

console.log('==================== EXERCICIO 7 ====================');
var nome = 'Bruno Azzi';
var idade = 19; // const usuario = {
//   nome: nome,
//   idade: idade,
//   cidade: 'Rio do Sul',
// };

var usuario = {
  nome: nome,
  idade: idade,
  cidade: 'Estância Velha'
};
console.log(usuario);
console.log('==================== END EXERCICIO 7 ====================');
