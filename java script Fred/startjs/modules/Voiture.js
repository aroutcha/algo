import Vehicule from "./Vehicule.js";

export default class Voiture extends Vehicule {
    constructor(marque, modele, annee, kilometrage, clim = true) {
        super(marque, modele, annee, kilometrage);
        this.clim = clim;
    }

    display() {
        let climDisplay = "oui";
        if (!this.clim) {
            climDisplay = "non";
        }
        // équivalent à (avec l'operateur ternaire ?)
        let climDisplayV2 = this.clim ? "oui" : "non";

        return `Voiture - ${super.display()} - Climatisation : ${climDisplay}`;
    }
}