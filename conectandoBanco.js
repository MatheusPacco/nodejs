const Sequelize = require('sequelize'); 
const sequelize = new Sequelize('conexao', 'root', 'hoot', {
    host: "localhost", 
    dialect: "mysql"
}); 

// fetch para saber se o acesso foi permitido 

sequelize.authenticate().then(() =>{
    console.log("Conectado com sucesso!")
}).catch((e) => {
    console.log("Falha ao se conectar" + e)
}); 

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    }, 
    conteudo: {
        type: Sequelize.TEXT
    }
}); 

// Adicionando conteúdo na tabela

// Postagem.create({
//     titulo: "Curso de Node", 
//     conteudo: "Um curso do YOUTUBE sobre node!"
// })

// Responsável por sicronizar
// Postagem.sync({force: true}); 

const Usuarios = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    }, 
    sobrenome: {
        type: Sequelize.STRING
    }, 
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
}); 

// Usuarios.sync(); 

// Usuarios.create({
//     nome: "Pedro",
//     sobrenome: "Henrique", 
//     idade: 22, 
//     email: "PedroAlgumaCoisa@gmail.com"
// })