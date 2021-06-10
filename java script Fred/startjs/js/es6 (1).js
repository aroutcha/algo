/**
 * Introduction à l'ES6+
 */

/**
 * let
 * 
 * Jusqu'à présent nous avons déclaré nos variables avec le mot clé var
 * Dès maintenant nous allons privilégier le mot clé let et voici pourquoi :
 */
console.log(testPrenomVar); // undefined --> pour lui la variable est déjà déclaré --> problème de hoisting (remontée de la déclaration de variables)
// console.log(testPrenomLet); // erreur variable non déclaré

var testPrenomVar = "Jean";
let testPrenomLet = "Pierre";

/**
 * const
 * 
 * Pour déclarer une constante
 */
const nbMax = 128;
// nbMax = 127; // Syntax error --> pas possible de réaffecter une valeur à une constante

const fruits = ["Pomme"];
// fruits = ["Abricot", "Poire"];
fruits.push("Abricot"); // Possible car on ne "touche" pas à la structure de la constante à savoir un tableau (même comportement pour un objet)

/**
 * .forEach
 * .map
 * .find
 * .filter
 */
const vegetables = [
    {
        code: 10,
        name: "Carotte",
        price: 1.99
    },
    {
        code: 11,
        name: "Poivron vert",
        price: 2.99
    },
    {
        code: 12,
        name: "Poivron rouge",
        price: 2.99
    },
    {
        code: 13,
        name: "Haricot vert",
        price: 2.49
    }
];

// .forEach
vegetables.forEach(function(vegetable) {
    console.log(vegetable.name);
});

vegetables.forEach(function(vegetable, index) {
    console.log((index+1) + " : " + vegetable.name);
});

// .map
const listVegetables = vegetables.map(function(vegetable) {
    return vegetable.name;
});

console.log(listVegetables);

// .find
// Trouver un élément
const poivron = vegetables.find(function(vegetable) {
    return vegetable.name.includes("Poivron");
});

console.log(poivron);

// .filter
// Trouver un ou plusieurs éléments
const poivrons = vegetables.filter(function(vegetable) {
    return vegetable.name.includes("Poivron");
});

console.log(poivrons);

// Chainage des méthodes possible
// Exemple : rechercher tous les légumes qui ont un prix inférieur à 2€50 puis parcourir le tableau pour extraire uniquement le nom du ou des légumes
const lessExpensive = vegetables.filter(function(vegetable) {
    return (vegetable.price < 2.5)
}).map(function(vegetable) {
    return vegetable.name;
});

console.log(lessExpensive);

/**
 * Littéraux de gabarits
 * 
 * Derrière ce nom se cache une sorte de templating en JS permettant de simplifier la concaténation de chaines et de variables
 * Avec cette notation nous allons utiliser des anti quotes (` -> altgr + 7) à la place des guillemets ("")
 */
let prenom = "Jean Claude";
let nom = "Dusz";

console.log("Bonjour " + prenom + " " + nom); // ça c'était avant

console.log(`Bonjour ${prenom} ${nom}, tu vas bien ?`);

/**
 * Fonctions fléchées --> Arrow function
 * Pour écrire une fonction fléchée nous allons utiliser un opérateur que l'on appelle fat arrow =>
 */
// Cas 1 : sans paramètre
let test = function() {
    return "Toto";
};
// équivalent à
test = () => {
    return "Toto";
};
// équivalent à (attention seulement si votre formation ne fait qu'un return)
test = () => "Toto";

// Cas 2 : avec un paramètre
let test2 = function(vegetable) {
    return vegetable.name;
};
// équivalent à 
test2 = (vegetable) => {
    return vegetable.name;
};
// équivalent à (attention seulement si votre formation ne fait qu'un return)
test2 = vegetable => vegetable.name;

// Cas 3 : au moins 2 paramètres
let test3 = function(firstname, lastname) {
    return `${firstname} ${lastname}`;
};
// équivalent à 
test3 = (firstname, lastname) => {
    return `${firstname} ${lastname}`;
};
// équivalent à (attention seulement si votre formation ne fait qu'un return)
test3 = (firstname, lastname) => `${firstname} ${lastname}`;

// Repartons de notre exemple de recherche d'un poivron
const poivronV1 = vegetables.find(function(vegetable) {
    return vegetable.name.includes("Poivron");
});
// Refaire la même chose avec une fonction fléchée en affectant le résultat dans une variable appellée poivronV2
const poivronV2 = vegetables.find((vegetable) => vegetable.name.includes("Poivron"));

/**
 * rest operator
 * ...
 */
// let haricot = vegetables[3]; // cause une référence au tableau d'origine et la copie n'en est pas vraiment une...

let haricot = { ...vegetables[3] }; // une vraie copie car on vient recréer un objet et donc pas de référence

// let legumes = [ ...vegetables ]; // idem avec un tableau il suffit juste de remplacer les {} par les []

haricot.price = 2.99;
console.log(haricot);
console.log(vegetables[3]);

/**
 * Valeurs par défaut pour les paramètres d'une fonction
 */
function carre(nb = 10) {
    return nb * nb
}

carre(); // 100
carre(5); // 25

/**
 * Les classes
 */
class Developer {
    // Constructeur de la classe Developer, on peut le voir comme une "usine" à objet
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    // Méthode de la classe Developer, on ne pourra l'appeler que sur une instance de la classe Developer
    getFullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}

/**
 * Héritage
 * comment procéder ? le mot clé extends suivi du nom de la classe que l'on veut hériter
 */
class JSDeveloper extends Developer {
    constructor(firstname, lastname, job) {
        // on fait appel au constructeur de la classe mère
        super(firstname, lastname);
        this.job = job;
    }

    display() {
        // super.maMethode() permet d'appeler une methode de la classe mère
        return `${super.getFullname()} - ${this.job}`;
    }
}


// Créer une instance de la classe Developer
let dev = new Developer("Chuck", "Norris"); // appel au constructeur
console.log(dev.firstname); // affiche la valeur de la propriété firstname
console.log(dev.getFullname()); // on fait appel à la méthode getFullname()

let jsdev = new JSDeveloper("Jean-Claude", "Vandamme", "Développeur JS spécialisé en React");
console.log(jsdev.getFullname());
console.log(jsdev.display());


/* Exercice sur les classes
* Nous avons externalisé les classes dans des modules (cf dossier modules)
*/

class Vehicule {
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

class Moto extends Vehicule {
    display() {
        return `Moto - ${super.display()}`;
    }
}

class Voiture extends Vehicule {
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

let moto = new Moto("Yamaha", "R1", 2020, 500);
console.log(moto.display());

let voiture = new Voiture("Citroen", "C4", 2020, 1000);
console.log(voiture.display());

let voiture2 = new Voiture("Citroen", "BX", 1995, 150000, false);
console.log(voiture2.display());