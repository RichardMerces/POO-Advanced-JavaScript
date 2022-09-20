/*
Crie uma classe conta bancária e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto conta bancária, defina as instâncias deste objeto e apresente as informações deste objeto no console.
*/

class contaBancaria {
    titularConta: string;
    cpf: number;
    tipoConta:string;
    codigoAgencia: string;
    numeroConta: string;

    mostrarInformacoes(){
        console.log(`Titular da conta: ${this.titularConta}\nCPF: ${this.cpf}\nTipo de conta: ${this.tipoConta}\nCódigo da agência: ${this.codigoAgencia}\nNúmero da conta: ${this.numeroConta}\n`)
    }
}

const conta = new contaBancaria();
conta.titularConta = "Francisco Pereira";
conta.cpf = 33322211145;
conta.tipoConta = "Conta corrente";
conta.codigoAgencia = "00001";
conta.numeroConta = "12345678912312";

conta.mostrarInformacoes();
