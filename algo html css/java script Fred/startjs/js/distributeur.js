function roundDecimal(nb, precision) {
    let tmp = Math.pow(10, precision);
    return Math.round(nb*tmp)/tmp;
}

class Boisson {
    constructor(code, nom, prix) {
        this.code = code;
        this.nom = nom;
        this.prix = prix;
    }
}

// Déclaration et initialisation du tableau de boissons
const boissons = [
    new Boisson("B1", "Coca-cola", 0.8),
    new Boisson("B2", "Fanta", 0.7),
    new Boisson("B3", "Ice Tea", 0.7),
    new Boisson("B4", "Perrier", 1)
];

// 1/ L'utilisateur doit saisir la boisson souhaitée
let choix = prompt("Choisissez votre boisson");

// Trouver dans le tableau la boisson sélectionnée
const selectedDrink = boissons.find((boisson) => {
    return choix === boisson.code;
});
// boissons.indexOf(selectedDrink); --> indexOf permet de retrouver l'index d'un élément recherché

// 2/ Afficher le prix de la boisson sélectionnée
alert(selectedDrink.prix + "€");

// 3/ Tester si la somme payée est correcte
let monnaie = Number(prompt("Insérer la monnaie"));

while(monnaie < selectedDrink.prix) {

    let manque = roundDecimal(selectedDrink.prix - monnaie, 2);
    let appoint = Number(prompt("Manque " + manque + "€"));

    monnaie = roundDecimal(monnaie + appoint, 2);

    console.log(monnaie);
    console.log(selectedDrink.prix);
}

// Le distributeur rend la monnaie
if (monnaie > selectedDrink.prix) {

    let monnaieRendue = roundDecimal(monnaie - selectedDrink.prix, 2);
    alert("Voici votre monnaie : " + monnaieRendue + "€");

}

// 4/ Afficher un message de Fin
alert("Votre boisson " + selectedDrink.nom + " est prête");
