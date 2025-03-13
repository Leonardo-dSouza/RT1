"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Endereco = /** @class */ (function () {
    function Endereco(rua, numero, bairro, cidade) {
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
    }
    Endereco.prototype.mostrarEndereco = function () {
        return "Cidade ".concat(this.cidade, ", bairro: ").concat(this.bairro, ", rua: ").concat(this.rua, " numero: ").concat(this.numero);
    };
    return Endereco;
}());
exports.default = Endereco;
