import db from '../../database/database.js';
class PersonDAO {
  async createPerson(firstName, lastName, email) {
    console.log(`Creating person with firstName: ${firstName} lastName: ${lastName} email: ${email}`);
    const [id] = await db('person')
      .insert({
        email,
        firstName: firstName,
        lastName: lastName,
      })
      .returning('firstName');

      console.log(id);
    return id;
  }
}

export default new PersonDAO();