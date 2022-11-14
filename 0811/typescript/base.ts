
var citta: string = 'Livorno';   //String citta="Livorno"

var anno: number = 2022;

//alert(citta);
//alert(anno)

var persona: any = {
    nome: 'Paola',
    anni: 41
}

var variabilemia: any = 500;
variabilemia = 'ciao';

interface lavoro {
    descrizione: string,
    anni: number,
    assunzione: boolean
}

interface people {
    name: string,
    year: number,
    indirizzo?: string,
    lavoro: lavoro
}

var laura: people = {
    name: 'Laura',
    year: 29,
    lavoro: {
        descrizione: 'Dirigente',
        anni: 6,
        assunzione: true
    }
}


var fabiana: people = {
    name: 'Fabiana',
    year: 38,
    lavoro: {
        descrizione: 'Impiegata',
        anni: 10,
        assunzione: false
    }
}


var eleonora: people = {
    name: 'Eleonora',
    year: 74,
    indirizzo: 'Viale Angelico, 56',
    lavoro: {
        descrizione: 'CEO',
        anni: 2,
        assunzione: false
    }
}

//console.log(eleonora.indirizzo);

var frutta: string[] = [];

frutta.push('Mela');
//frutta.push(20);

var anagriche: Array<people> = [
    laura, fabiana, eleonora, persona
]

class Animale {
    tipo: string;
    anni: number;
    static readonly numerozampe: number = 4
    private nomeproprietario: string;
    private provenienza: string;
    constructor(tipo: string, anni: number, nomeprop: string, prov: string) {
        this.tipo = tipo
        this.anni = anni;
        //this.nomeproprietario = nomeprop
        this.setNome(nomeprop)
        this.setProv(prov);
    }

    //static numerozampe: number = 4;


    setProv(proven: string): void {
        const colore: string = 'nero';
        if (proven == 'Italia' || proven == 'Francia') {
            this.provenienza = proven;
        }
        else {
            this.provenienza = 'NON PREVISTA';
        }
    }

    getProv(): string {
        return this.provenienza;
    }

    setNome(nomenuovo: string): void {
        this.nomeproprietario = nomenuovo;
    }

    getNome(): string {
        return this.nomeproprietario
    }

}


class Macchina extends Animale {
    cc: number = 1000;
    persona: people = eleonora;
    constructor(tipo: string, anni: number, nomeprop: string, prov: string, cilindrata: number) {
        super(tipo, anni, nomeprop, prov)
        this.cc = cilindrata
    }
}

var gatto = new Animale('Gatto', 4, 'Alba', 'Germania');
/*
alert(gatto.tipo);
alert(gatto.anni);
alert(gatto.getNome());
*/

//alert(gatto.getProv());

//alert(Animale.numerozampe);


var f40 = new Macchina('Sportiva', 10, 'Valeri', 'Polonia', 4000);

alert(f40.getProv());

//Animale.numerozampe = 10;
alert(Animale.numerozampe);






