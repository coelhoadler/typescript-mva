"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pessoa = require("./Pessoa");
var Funcionario = (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario() {
        _super.apply(this, arguments);
    }
    return Funcionario;
}(Pessoa));
Object.seal(Funcionario);
module.exports = Funcionario;
