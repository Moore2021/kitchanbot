import personDAO from '../dao/person.js';

class PersonService {
  createPerson(personDto) {
    const { firstName, lastName, email } = personDto;
    return personDAO.createPerson(firstName, lastName, email);
  }
}

export default new PersonService();