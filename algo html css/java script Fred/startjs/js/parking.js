class Vehicule {
    constructor(id, startDate = new Date()) {
        this.id = id;
        this.startDate = startDate;
        this.endDate;
    }
}

function getTicket() {
    let plaque = prompt("Saisir votre plaque d'immatriculation");

    const v = new Vehicule(plaque);
    vehicules.push(v);
    //possible en passant directement l'appel au constructeur en paramètre de la méthode push --> vehicules.push(new Vehicule(plaque));

    alert("Prenez votre ticket");
}

function getDiffDate(date1, date2) {
    let diff = (date2 - date1) / 60000; // on divise par 60000 pour obtenir des minutes à partir des ms

    return diff;
}

function parkingPayment(id) {
    // On recherche le véhicule correspondant à l'id passé en paramètre
    const v = vehicules.find((vehicule) => {
        return id === vehicule.id;
    });

    // On stocke l'heure de retour
    v.endDate = new Date();

    // Calculer et afficher le prix à payer
    let duree = getDiffDate(v.startDate, v.endDate);

    let prix;
    if (duree <= 15) {
        prix = 0.8;
    } else if (duree <= 30) {
        prix = 1.3;
    } else if (duree <= 45) {
        prix = 1.7;
    } else {
        prix = 6;
    }

    alert(`Le prix à payer est de ${prix}`);
}

let choix;
const vehicules = new Array();

// Cas de tests pour valider les tarifs
vehicules.push(new Vehicule("AA-123-AA", new Date("2020-09-29T16:33:00")));
vehicules.push(new Vehicule("BB-123-AA", new Date("2020-09-29T16:13:00")));
vehicules.push(new Vehicule("CC-123-AA", new Date("2020-09-29T15:33:00")));

do {

    choix = Number(prompt(`1 - Obtenir un ticket\n2 - Payer le parking\n0 - Commande secrète pour arrêter le parking`));

    if (choix === 1) {
        // Délivrer un ticket
        getTicket();
    } else if (choix === 2) {
        // Décodage du ticket (on simule l'insertion du ticket avec une saisie)
        let currentId = prompt("Insertion du ticket");

        // Paiement parking
        parkingPayment(currentId);
    }

} while (choix != 0);