const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Lucas Cavalcante',
    email: 'lucas@mail.com',
    phone: '912365478',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
