const { Favorite } = require('../../DB_connection');

const postFav = async (req, res) => {
    const { name, origin, status, image, species, gender } = req.body;

    try {
        if (!name || !origin || !status || !image || !species || !gender) {
            return res.status(401).json({ error: 'Missing data' })
        }

        else {
            await Favorite.findOrCreate({
                where: { name: name },
                defaults: {
                    name,
                    origin,
                    status,
                    image,
                    species,
                    gender
                }
            })

            const allFavs = await Favorite.findAll()

            return res.status(200).json({ favorites: allFavs })
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    postFav
}