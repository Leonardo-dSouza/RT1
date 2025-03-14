"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Descritor from "./descritorEmpresa";
var empresa_1 = __importDefault(require("./empresa"));
var endereco_1 = __importDefault(require("./endereco"));
var funcionario_1 = __importDefault(require("./funcionario"));
var telefone_1 = __importDefault(require("./telefone"));
var endereco = new endereco_1.default('av paulista', 213, 'jardim paulista', 'sao pauo');
var telefone = new telefone_1.default('12', '0-00000-0000');
var funcionario = new funcionario_1.default('joao', '213123131', '2402742983-34', endereco, telefone);
var funcionarios = [funcionario];
var telefones = [telefone];
var empresa = new empresa_1.default('abc ltda', 'mercado online', '234342342424', endereco, funcionarios, telefones);
// let descritor = new Descritor
// console.log(descritor.descritor(empresa))
