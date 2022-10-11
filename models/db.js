const Sequelize = require('sequelize'); 

// Conexão com o Banco de Dados MySQL
const sequelize = new Sequelize('postapp', 'root', 'hoot', {
    host: "localhost", 
    dialect: "mysql", 
    query:{raw:true}
});  

module.exports = {
    Sequelize, 
    sequelize
}