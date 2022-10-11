var http = require("http")

// require sempre realiza a chamada de um módulo 

// createServer aceita dois parâmetros 
// Require e Response 
http.createServer(function(req, res){
    res.end("Chamada dale")
}).listen(8080); 