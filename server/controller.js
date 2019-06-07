const getHouses = (req, res) => {
    const db = req.app.get('db');

    db.getAll()
    .then(response => res.status(200).json(response))
    .catch(() => res.status(404).send('No info found.'))
}

const addHouse = (req, res) => {
    const {name, address, city, state, zip} = req.body;
    const db = req.app.get('db');

    db.addHouse(name, address, city, state, zip)
    .then(response => res.status(200).send(response))
    .catch(() => res.status(404).send('Could not add add house.'))
}

const deleteHouse = (req, res) => {
    const db = req.app.get('db'),
    {house_id} = req.params;

    db.deleteOne(house_id)
        .then(() => res.sendStatus(200))
        .catch(() => res.status(404).send('Unable to delete house.'))
}

const updateHouse =(req, res) => {
        const db = req.app.get('db'),
        { name, address, city, state, zip } = req.body,
        { house_id } = req.params
    
    db.updateHouse( house_id, name, address, city, state, zip )
        .then(response => res.status(200).json(response))
        .catch(() => res.status(404).send('Could not update.'))
    }

module.exports = {
    getHouses,
    addHouse,
    deleteHouse,
    updateHouse
}
