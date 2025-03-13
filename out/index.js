"use strict";
var tel = {
    ddd: '12',
    numero: '1212121'
};
var mensagem = function (informacao) {
    return "ddd: ".concat(informacao.ddd, " numero: ").concat(informacao.numero);
};
console.log(mensagem(tel));
