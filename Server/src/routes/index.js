const { getCharById } = require('../controllers/CharactersControllers/getCharById');
const { postFav } = require('../controllers/FavsControllers/postFav')
const { deleteFav } = require('../controllers/FavsControllers/deleteFav')
const { login } = require('../controllers/LoginController/login')
const { postUser } = require('../controllers/UsersController/postUser')

const express = require('express')
const router = express.Router()

router.get("/login", login)
router.post("/login", postUser)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)
router.get("/character/:id", getCharById)

module.exports = {
    router
}