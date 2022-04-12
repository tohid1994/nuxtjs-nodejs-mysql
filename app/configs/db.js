const { Sequelize } = require('sequelize');

const db = new Sequelize('nodejs', 'root', 'Marco943307474*', {
 host: 'localhost',
 dialect: 'mysql' 
});

try {
 db.authenticate();
 console.log('Connection has been established successfully.');
} catch (error) {
 console.error('Unable to connect to the database:', error);
}


module.exports = db