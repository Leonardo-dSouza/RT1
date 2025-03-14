// import Descritor from "./descritorEmpresa";
import Empresa from "./empresa";
import Endereco from "./endereco";
import Funcionario from "./funcionario";
import Telefone from "./telefone";

let endereco = new Endereco('av paulista', 213, 'jardim paulista', 'sao pauo')
let telefone = new Telefone('12', '0-00000-0000')
let funcionario = new Funcionario('joao', '213123131', '2402742983-34', endereco, telefone)
let funcionarios = [funcionario]
let telefones = [telefone]
let empresa = new Empresa( 'abc ltda', 'mercado online', '234342342424', endereco, funcionarios, telefones)

// let descritor = new Descritor
// console.log(descritor.descritor(empresa))