const server = require('./app');
const { sequelize } = require('./DB_connection');

const PORT = process.env.PORT;

sequelize.sync({ force: true })
   .then(() => {
      console.log('Tablas creadas en la base de datos.');
   })
   .catch((error) => {
      console.error('Error al crear las tablas:', error);
   });

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});