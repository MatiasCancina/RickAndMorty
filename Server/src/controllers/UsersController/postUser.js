const { User } = require('../../DB_connection');

const postUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (email && password) {
            const newUser = await User.findOrCreate({
                where: { email: email },
                defaults: {
                    email,
                    password
                }
            })
            return res.status(201).json({ user: newUser })
        }
        else return res.status(400).json({ error: 'Missing data' })
        
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    postUser
}