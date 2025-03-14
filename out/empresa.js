"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empresa = /** @class */ (function () {
    function Empresa(razaoSocial, nomeFantasia, cnpj, endereco, funcionarios, telefones) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.funcionarios = funcionarios;
        this.telefones = telefones;
    }
    Object.defineProperty(Empresa.prototype, "getRazaoSocial", {
        get: function () {
            return this.razaoSocial;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "getNomeFantasia", {
        get: function () {
            return this.nomeFantasia;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "getCnpj", {
        get: function () {
            return this.cnpj;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "getEndereco", {
        get: function () {
            return this.endereco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "getFuncionarios", {
        get: function () {
            return this.funcionarios.slice();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "getTelefones", {
        get: function () {
            return this.telefones.slice();
        },
        enumerable: false,
        configurable: true
    });
    return Empresa;
}());
exports.default = Empresa;
