// Primeiro modo para exportar dados
/* function printName(name) {
  console.log(name);
}

const lastName = 'Cavalcante';

module.exports = { printName, lastName }; */

// Segundo modo para exportar dados

exports.printName = (name) => {
  console.log(name);
};

exports.lastName = 'Cavalcante';
