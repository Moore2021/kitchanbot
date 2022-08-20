import personService from '../service/person.js';

class PersonController {
    async createPerson(req, res) {
        try {
            const id = await personService.createPerson(req.body);
            res.status(201).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json('something went wrong');
        }
    }
}

export default new PersonController();