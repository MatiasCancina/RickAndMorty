const { User } = require('../../DB_connection');

const login = async (req, res) => {
    const { email, password } = req.query;

    try {
        if (!email || !password)
            return res.status(400).json({ error: 'Missing data' })

        const findUser = await User.findOne({
            where: { email }
        })

        if (!findUser)
            return res.status(404).json({ error: 'User not found' })

        if (findUser.password !== password) {
            return res.status(403).json({ error: 'Incorrect password' })
        }

        return res.status(202).json({ access: true })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    login
}