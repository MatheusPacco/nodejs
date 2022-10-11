const db = require('./db'); 

// Criando tabela de postagens
const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    }, 
    conteudo: {
        type: db.Sequelize.TEXT
    }
}); 

module.exports = Post; 