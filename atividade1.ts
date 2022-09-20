/*
Crie uma classe patinete e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto patinete, defina as instâncias deste objeto e apresente as informações deste objeto no console.
*/

class Patinete {
    marca: string;
    cor: string;
    limitePeso:number;
    dimensoesItem: string;
    numeroRodas: number;
    nomeModelo:	string;

    mostrarInformacoes(){
        console.log(`Marca: ${this.marca}\nCor: ${this.cor}\nLimite de peso: ${this.limitePeso} Quilograma\nDimensões do Item: ${this.dimensoesItem}centímetros\nNúmero de Rodas: ${this.numeroRodas}\nNome do modelo: ${this.nomeModelo}`)
    }
}

const pati = new Patinete();
pati.marca = "Atrio";
pati.cor = "Preto";
pati.limitePeso = 50;
pati.dimensoesItem = "C x L x A	61 x 20 x 10";
pati.numeroRodas = 2;
pati.nomeModelo = "Monster";

pati.mostrarInformacoes();
