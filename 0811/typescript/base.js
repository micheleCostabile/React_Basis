var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var citta = 'Livorno'; //String citta="Livorno"
var anno = 2022;
//alert(citta);
//alert(anno)
var persona = {
    nome: 'Paola',
    anni: 41
};
var variabilemia = 500;
variabilemia = 'ciao';
var laura = {
    name: 'Laura',
    year: 29,
    lavoro: {
        descrizione: 'Dirigente',
        anni: 6,
        assunzione: true
    }
};
var fabiana = {
    name: 'Fabiana',
    year: 38,
    lavoro: {
        descrizione: 'Impiegata',
        anni: 10,
        assunzione: false
    }
};
var eleonora = {
    name: 'Eleonora',
    year: 74,
    indirizzo: 'Viale Angelico, 56',
    lavoro: {
        descrizione: 'CEO',
        anni: 2,
        assunzione: false
    }
};
//console.log(eleonora.indirizzo);
var frutta = [];
frutta.push('Mela');
//frutta.push(20);
var anagriche = [
    laura, fabiana, eleonora, persona
];
var Animale = /** @class */ (function () {
    function Animale(tipo, anni, nomeprop, prov) {
        this.tipo = tipo;
        this.anni = anni;
        //this.nomeproprietario = nomeprop
        this.setNome(nomeprop);
        this.setProv(prov);
    }
    //static numerozampe: number = 4;
    Animale.prototype.setProv = function (proven) {
        var colore = 'nero';
        if (proven == 'Italia' || proven == 'Francia') {
            this.provenienza = proven;
        }
        else {
            this.provenienza = 'NON PREVISTA';
        }
    };
    Animale.prototype.getProv = function () {
        return this.provenienza;
    };
    Animale.prototype.setNome = function (nomenuovo) {
        this.nomeproprietario = nomenuovo;
    };
    Animale.prototype.getNome = function () {
        return this.nomeproprietario;
    };
    Animale.numerozampe = 4;
    return Animale;
}());
var Macchina = /** @class */ (function (_super) {
    __extends(Macchina, _super);
    function Macchina(tipo, anni, nomeprop, prov, cilindrata) {
        var _this = _super.call(this, tipo, anni, nomeprop, prov) || this;
        _this.cc = 1000;
        _this.persona = eleonora;
        _this.cc = cilindrata;
        return _this;
    }
    return Macchina;
}(Animale));
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
