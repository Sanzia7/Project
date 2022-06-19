

/*Необходимо создать класс User

статическое свойство
  - roles(массив со значениями admin, manager, user)

свойства
  - name
  - lastname
  - role 

  методы
- get_info (вывести в консоль строку '<Имя> <Фамилия> (<роль>)')
- change_role (принимает в качестве аргумента новую роль и задает ее, если она входит в список допустимых ролей из статического свойства roles.) */

class User {
  static roles = ['admin', 'manager', 'user'];

  constructor(name, lastname, role) {
    this.name = name;
    this.lastname = lastname;
    this.role = role;
  }

  get_info() {
    //return `${this.name} ${this.lastname} (${this.role})`
    console.log(`Имя: ${this.name} Фамилия: ${this.lastname}, роль: ${this.role}`);
  }

  change_role(new_role) {
    for (let i = 0; i < User.roles.length; i++) {
      if (User.roles[i] === new_role) {
        this.role = new_role;
        return;
      }
    }
    console.log(`Указана неверная роль. Укажите одну из ролей списка ${User.roles}`);
  }
}

const user = new User('Maria', 'Berg', 'admin');
const user_1 = new User('Andrea', 'Merit', 'user');
const user_2 = new User('Hayk', 'Inanc', 'supervisor');

// console.log(user);
// console.log(user.role);
// user_1.change_role('Manager');
// console.log(user.role);
// user.change_role('Cliner');
// console.log(user.role);
// user.change_role('User');
// console.log(user.role)