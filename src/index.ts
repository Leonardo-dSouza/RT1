type Telefone1 = {
    ddd: string
    numero: string
}

let tel: Telefone1 ={
    ddd: '12',
    numero: '1212121'
}

let mensagem = (informacao: Telefone1): string =>{
    return `ddd: ${informacao.ddd} numero: ${informacao.numero}`
}

console.log(mensagem(tel))
