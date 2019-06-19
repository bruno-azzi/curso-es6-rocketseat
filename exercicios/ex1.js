console.log('==================== EXERCICIO 1 ====================')

class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  isAdmin() {
    return this.admin === true;
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);

    this.admin = true;
  }
}

const user = new Usuario('bruno@usuario.com', 'user123');
const adm = new Admin('bruno@admin.com', 'admin123');

console.log(adm);
console.log(user);

console.log(adm.isAdmin());
console.log(user.isAdmin());

console.log('==================== END EXERCICIO 1 ====================')

