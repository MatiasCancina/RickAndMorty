const { Favorite } = require('../../DB_connection');

const deleteFav = async (req, res) => {
    const { id } = req.params;

    try {
        await Favorite.destroy({
            where: { id: id }
        });

        const allFavs = await Favorite.findAll()

        return res.status(200).json({ favorites: allFavs })

    } catch (error) {
        return req.status(500).json({ error: error.message })
    }
}

module.exports = {
    deleteFav
}