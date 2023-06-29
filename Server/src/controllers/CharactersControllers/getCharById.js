const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await axios(`${URL}/${id}`)
        if (response.data) {
            return res
                .status(200)
                .json({ character: response.data })
        }
    } catch (error) {
        return res
            .status(404)
            .json({error: error.message})
    }
}

module.exports = {
    getCharById
}