const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type: DataTypes.UUID,
         defaultValue: DataTypes.UUIDV4,
         primaryKey: true
      },

      email: {
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true
      },

      password: {
         type: DataTypes.STRING,
         allowNull: false
      }
   }, { timestamps: false });
};
