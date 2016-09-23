"use strict";
/// <reference path="typings/tsd.d.ts" />
var http = require('http');
var Cliente = require("./Cliente");
var Funcionario = require("./Funcionario");

var cliente = new Cliente();
cliente.nome = "Adler Coelho";
var func = new Funcionario();
func.nome = "Funcionário";
http.createServer(function (request, response) {
    response.writeHeader(200, { "Content-Type": "text/html" });
    response.write("Cliente: " + cliente.nome + " - Funcion\u00E1rio: " + func.nome);
    response.end();
});
