const { Country } = require('../../db');

const getCountriesById = async (req, res) => {
    try {
        let { id } = req.params;
        if (!id) throw Error('Falta ID');
        res.status(200)
    } catch (error) {
        
    }
}