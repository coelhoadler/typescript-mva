// ctrl + shift + u - abrir terminal
// ctrl + shift + b - compilar no terminal
import Pessoa = require("./Pessoa");

class Funcionario extends Pessoa {

    public salario: number;
    public cod_funcionario: number;
    public cpf : string;

}

Object.seal(Funcionario);
export = Funcionario;