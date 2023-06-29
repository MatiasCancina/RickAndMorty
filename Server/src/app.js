require('dotenv/config')
const { router } = require('./routes/index.js')
const express = require('express');
const morgan = require('morgan')
const cors = require('cors')

const server = express();
server.use(express.urlencoded({ extended: true }))
server.use(express.json()) //? middleware 
server.use(morgan('dev'))
server.use(cors({origin: 'http://localhost:3000'}))

server.use('/rickandmorty', router) //? middleware que agrega "/rickandmorty" antes de cada ruta

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
      );
   next();
});

module.exports = server