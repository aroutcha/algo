export default class Vehicule {
    constructor(marque, modele, annee, kilometrage) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.kilometrage = kilometrage;
    }

    display() {
        return `${this.marque} - ${this.modele} - ${this.annee} - ${this.kilometrage}km`;
    }
}