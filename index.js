const express = require("express"); 
const app = express(); 
const handlebars = require('express-handlebars'); 
const Post = require('./models/Posts'); 

// App instância o framework, qualquer funcionalidade deve ser
// usado a partir do app

// Config 
    // Template Engine 
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars'); 
    
    // Configurando o Express para receber dados de forms
    app.use(express.urlencoded({extended:false}))
    app.use(express.json())

// Rotas 
    app.get('/', function(req, res) {
        Post.findAll().then(function(posts){
            res.render('home', {posts: posts})
        })
    }); 

    app.get('/card', function(req, res){
        res.render('forms'); 
    });

    // Rota só acessada em requisições via método post
    app.post('/add', function(req, res){
       Post.create({
            titulo: req.body.titulo, 
            conteudo: req.body.conteudo
       }).then(()=> {
        res.redirect('/')
       }).catch((e) => {
        res.send("Houve um erro: " + e)
       });  
    }); 

    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(()=>{
            res.send("Postagem Deletada com Sucesso!"); 
        }).catch((e) => {
            console.log(`Houve um erro ${e}`);
        })
    })

// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/views/index.html"); 
// }); 

// /* Em " : " enviamos um parâmetro para a rota!*/

// app.get("/ola/:nome", function(req, res){
//     res.send(req.params); 
// }); 

// ------------------------------------------------------ 

app.listen(8080, () => {
    console.log("Servidor Rodando!"); 
}); 
// SEMPRE TEM QUE SER A ÚLTIMA LINHA DO CÓDIGO
