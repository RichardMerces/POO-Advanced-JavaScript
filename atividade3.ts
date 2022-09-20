/*
Crie uma classe paciente e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto paciente, defina as instâncias deste objeto e apresente as informações deste objeto no console.
*/


class Paciente {
    emfermaria:string;
    nome: string;
    leito: number;
    remedio: string;
    qtd: string;
    horario: string;

    mostrarInformacoes(){
        console.log(`Emfermaria: ${this.emfermaria}\nNome: ${this.nome}\nLeito: ${this.leito}\nRemédio: ${this.remedio}\nQuantidade: ${this.qtd}\nHorário: ${this.horario}\n`)
    }
}

const paci = new Paciente();
paci.emfermaria = "02";
paci.nome = "Maria";
paci.leito = 10;
paci.remedio = "Bezetacil";
paci.qtd = "3ml";
paci.horario = "15h40min";

paci.mostrarInformacoes();


