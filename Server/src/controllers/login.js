const users = require('../utils/users.js')

const login = (req, res) => {
    const { email, password } = req.query;

    const userFound = users.find(user =>
        user.email === email &&
        user.password === password
    )

    const access = userFound ? true : false;

    return res
        .status(200)
        .json({ access })
}

module.exports = {
    login
}