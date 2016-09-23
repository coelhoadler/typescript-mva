/// <reference path="typings/tsd.d.ts" />
import http = require('http');
import Cliente = require("./Cliente");
import Funcionario = require("./Funcionario");

var cliente = new Cliente();
cliente.nome = "Adler Coelho";

var func = new Funcionario();
func.nome = "Funcionário";


http.createServer(function(request, response) {
    response.writeHead(200,  {"Content-Type" : "text/html"});
    response.write(`Cliente: ${cliente.nome} - Funcionário: ${func.nome}`);
    response.end();
}).listen(8000);