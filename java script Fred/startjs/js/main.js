// Commentaire sur une ligne

/*
Commentaire sur
plusieurs lignes
*/

// Ctrl + K + C -> commenter la ou les lignes
// Ctrl + K + U -> décommenter la ou les lignes

/**
 * Les variables
 */
// Déclarer une variable en JS
var prenom;

// Affecter une valeur à notre variable
prenom = "Anakin";

// Afficher la valeur de la variable dans la console
console.log(prenom);

// Déclarer et affecter une variable sur une même ligne
var age = 18;

// Les types de variables
// On ne définit pas de type à la déclaration mais il y a quand même un type pour notre variable (variable auto typé)
console.log(typeof (age));
// age = "Toto"; // est autorisé en JS, il change le type...
// console.log(typeof(age));

// Concaténation de chaines (se fait par l'intermédiaire de l'opérateur +)
console.log("Bonjour je m'appelle " + prenom + " et j'ai " + age + " ans");

/**
 * Les opérateurs arithmétiques
 */
var nb1 = 10, nb2 = 5, resultat;

// L'addition
resultat = nb1 + nb2;
console.log(nb1 + "+" + nb2 + "=" + resultat);

// La soustraction, la multiplication, la division
resultat = nb1 - nb2;
resultat = nb1 * nb2;
resultat = nb1 / nb2;

// Le modulo -> le reste de la division
resultat = nb1 % nb2;
console.log(resultat);

// Les écritures simplifiées
nb1 = nb1 + 5;
// peut s'écrire plus implement en :
nb1 += 5;

/**
 * Incrémentation et décrementation
 */
// Incrémentation
nb1 = nb1 + 1;
// peut se simplifier en
nb1 += 1;
// mais encore mieux
nb1++;

// Décrémentation
nb1 = nb1 - 1
nb1 -= 1;
nb1--;

nb1 = 1;
console.log(nb1++); // affiche la valeur de nb1 avant incrémentation
console.log(nb1);

nb1 = 1;
console.log(++nb1); // fait l'incrémentation puis affiche la valeur de nb1
console.log(nb1);

/**
 * Les tableaux
 * on accède à une case du tableau par sa position/son index
 */
// Déclaration d'un tableau (2 façons de faire)
var monTableau = [];
var monTableau2 = new Array();

// Affecter une valeur à une case du tableau
monTableau[0] = "Pomme"; // affectation à la 1ère case en position 0
monTableau[1] = "Poire";

// Afficher le contenu d'un tableau
console.table(monTableau);
console.log(monTableau[0]); // affiche Pomme
console.log(monTableau[1]); // affiche Poire

// Déclarer et affecter en même temps un tableau numérique
var legumes = ["Carotte", "Haricot", "Poivron"];
var legumes2 = new Array("Carotte", "Haricot", "Poivron");

// Réaffecter une valeur à une case d'un tableau
console.log(legumes[2]);
legumes[2] = "Epinard";
console.log(legumes[2]);

// Récupérer la taille du tableau
console.log(legumes.length);

// Ajouter un élément au tableau
legumes.push("Courgette"); // ajoute 1 case contenant courgette
legumes.push("Aubergine", "Tomate", "Potiron");

// Retirer un élément du tableau
// La méthode pop() va nous permettre de retirer le dernier élément d'un tableau
legumes.pop(); // retire le Potiron

// La méthode shift() va nous permettre de retirer le premier élément d'un tableau
legumes.shift(); // retire la Carotte

// La méthode splice() va nous permettre de retirer un ou plusieurs éléments d'un tableau à une position donnée
// tableau.splice(positionDemarrage, nbASupprimer)
legumes.splice(1, 2); // supprime Epinard et Courgette

// Nous pouvons aussi ajouter des éléments à une position donnée avec la méthode splice()
var concombre = "Concombre";
legumes.splice(1, 0, concombre);

console.table(legumes);

/**
 * Les tableaux associatifs / objets anonymes
 */
var personne = {
    nom: "Wayne",
    prenom: "Bruce",
    age: 35
};

console.log(personne.prenom);
console.log(personne["nom"] + " " + personne["prenom"]);

/**
 * Les tableaux à deux dimensions
 */
var tabLegumes = ["Carotte", "Poivron", "Navet"];
var tabFruits = new Array("Banane", "Pomme", "Kiwi");

// A partir de ces 2 tableaux nous allons créer un tableau à 2 dimensions
var primeur = new Array(tabLegumes, tabFruits);

console.table(primeur);
// Afficher le legume Poivron
console.log(primeur[0][1]);
// Afficher le fruit Kiwi
console.log(primeur[1][2]);

// Tableaux à 2 dimensions avec un dimension numérique et une dimension associative
var zoo = [
    {
        pseudo: "Covid",
        espece: "Pangolin",
        continent: "Afrique"
    },
    {
        pseudo: "Simba",
        espece: "Lion",
        continent: "Afrique"
    }
];

// Afficher dans la console le pseudo des deux animaux
console.log("Nos amis " + zoo[0].pseudo + " et " + zoo[1]["pseudo"]);

/**
 * Exercice
 * 
 * 1/ Créer un tableau à deux dimensions contenant trois personnes
 * Chaque personne est représenté par son prénom, son nom et son age
 * 
 * 2/ Afficher dans la console la concaténation du prénom et du nom de la 2ème personne
 */
var annuaire = [
    {
        nom: "Stark",
        prenom: "Tony",
        age: 99
    },
    {
        nom: "Banner",
        prenom: "Bruce",
        age: 99
    },
    {
        nom: "Parker",
        prenom: "Peter",
        age: 16
    }
];

console.log("Il est beau, il est vert, voici " + annuaire[1].prenom + " " + annuaire[1]["nom"]);

/**
 * Afficher une alerte à l'utilisateur
 */
//alert("Coucou toi !");

/**
 * Demander une saisie à l'utilisateur
 */
// var firstname = prompt("Quel est votre prénom ?");
// console.log(firstname);
// Attention si la valeur saisie n'est pas stockée dans une variable, la valeur est perdue...

/**
 * Les fonctions
 */
// Lorsque les parenthèses d'une fonction sont vides cela signifie qu'elle ne prend pas de paramètre
function hello() {
    // Lors de l'appel à la fonction les instructions ci-dessous seront exécutées
    console.log("Hello World !");
}

// Appel à la fonction hello
hello();

// Fonction avec un paramètre
function bonjour(name) {
    // message est une variable locale
    var message = "Bonjour " + name;

    // retourner/renvoyer la valeur de message à mon programme appelant
    return message;
}

var display = bonjour("Fred");
console.log(display);

/**
 * Exercice
 * 
 * 1/ Ecrire une fonction permettant de calculer le périmètre d'un rectangle
 * 
 * 2/ Demander à l'utilisateur de saisir la longueur et la largeur
 * 
 * 3/ Appel à la fonction précédemment créée
 * 
 * 4/ Afficher le résultat dans la console
 */
// 1
function perimetre(longueur, largeur) {
    return (longueur + largeur) * 2;
}

// console.log(perimetre(10, 5)); on teste notre fonction et youpi elle fonctionne !

// 2
// var long = Number(prompt("Saisir la longueur"));
// var larg = Number(prompt("Saisir la largeur"));
// //console.log(typeof(long)); // Attention le prompt retourne une chaine même pour les nombres
// // Solution : transformer la chaine en nombre

// console.log(perimetre(long, larg));

/**
 * Les conditions
 * 
 * En algo :
 * Si (condition) alors
 *  instructions
 * FinSi
 * 
 * En JS :
 * if (condition) {
 *  instructions
 * }
 */
if (age >= 18) {
    console.log("Vous êtes majeur !");
} else {
    console.log("Vous êtes mineur !");
}

/**
 * Les opérateurs de comparaison
 * 
 * == signifie égal à
 * Il permet de vérifier que la valeur de deux variables sont identiques
 * 
 * === signifie strictement égal à
 * Il permet de vérifier que la valeur ET le type de deux variables sont identiques
 * 
 * != signifie différent de
 * Il permet de vérifier que la valeur de deux valeurs sont différentes
 * 
 * !== signifie strictement différent de
 * Il va vérifier si la valeur OU le type sont différents
 * 
 * Exemples
 * 
 * 1 == 1 --> vrai
 * "1" == 1 --> vrai
 * 1 != 2 --> vrai
 * 1 != "1" --> faux
 * 3 === 3 --> vrai
 * 3 !== "3" --> vrai
 * 3 !== 3 --> faux
 * 4 !== 3 --> vrai
 * 3 === "3" --> faux
 * 
 * Exercice
 * 
 * Nous disposons de deux variables email et mdp contenant respectivement l'email et le mot de passe pour accéder à un espace sécurisé (mais pas tant que ça au final)
 */
var email = "contact@teamDotNet.fr";
var mdp = "tuEtaisLElu";
/**
 * 1/ Demander à l'utilisateur de saisir son email et son mot de passe
 * 2/ Vérifier que l'email est correct
 * 3/ Vérifier que le mot de passe est correct
 * 4/ Si OK alors on affiche un message de bienvenue
 * 5/ Sinon on indique à l'utilisateur l'information incorrecte
 */
// 1 
// var userEmail = prompt("Saisir votre email");
// var userPwd = prompt("Saisir votre mot de passe");

// // 2 
// if (userEmail === email) {
//     if (userPwd === mdp) {
//         alert("Bienvenue sur l'espace presque sécurisé");
//     } else {
//         alert("Mot de passe incorrect");
//     }
// } else {
//     alert("Email incorrect");
// }

/**
 * Les opérateurs logiques
 * 
 * L'opérateur ET : &&
 * 
 * Exemple: Tester si un nombre est supérieur ou égal à 1 ET inférieur ou égal à 3
 */
var nb = 2;
if ((nb >= 1) && (nb <= 3)) {
    console.log("Le nombre " + nb + " est supérieur ou égal à 1 ET inférieur ou égal à 3");
}
// La condition sera remplie si et seulement si les deux conditions simples donnent VRAI
// Cf table de vérité

/**
 * L'opérateur OU : ||
 * AltGr+6 -> Windows
 * Alt+shift+L -> MacOS
 * 
 * Exemple : Tester si un nombre est inférieur à 1 OU supérieur à 3
 */
nb = 5;
if ((nb < 1) || (nb > 3)) {
    console.log("Le nombre " + nb + " n'est pas compris entre 1 et 3");
}
// La condition sera remplie si l'une des deux conditions simples est VRAI
// Cf table de vérité

/**
 * L'opérateur NON/CONTRAIRE DE -> !
 */
var weekend = false;
// Si weekend est vrai -> if (weekend) -> if (weekend == true)
// Si weekend est faux -> if (!weekend) -> if (weekend == false)
if (!weekend) {
    console.log("Encore un peu de patience !");
}

/**
 * Les boucles
 */

// La boucle TANTQUE : while
var i = 1;
while (i <= 10) {
    console.log("Instructions de la boucle while éxécutées " + i + " fois");
    // Attention de bien incrémenter la valeur de i
    i++;
}

// La boucle FAIRE...TANTQUE : do...while
do {
    console.log("Instructions de la boucle do...while éxécutées " + i + " fois");
    // Attention de bien incrémenter la valeur de i
    i++;
} while (i <= 10);

// La boucle POUR : for
for (var j = 1; j <= 10; j++) {
    console.log("Instructions de la boucle for éxécutées " + j + " fois");
}

/**
 * Exercice
 * 
 * A partir du tableau suivant :
 */
var names = ["Sébastien", "Mustapha", "Benjamin", "Yassine", "Céline"];
/**
 * 1/ Gràce à une boucle for, afficher la liste des prenoms du tableau
 * 2/ Gràce à une boucle while, afficher la liste des prenoms du tableau
 * BONUS/ Rajouter un 6ème prénom et valider que les boucles fonctionnent toujours
 */
names.push("Thomas");

for (var j = 0; j < names.length; j++) {
    console.log(names[j]);
}

i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

/**
 * La boucle for...in
 * 
 * Pratique pour parcourir les clés d'un tableau associatif
 */
var contact = {
    nom: "Norris",
    prenom: "Chuck",
    telephone: "0123456789",
    email: "cnorris@wanadoo.fr"
};

for (var key in contact) {
    // console.log(contact.key) pas possible car sinon il va chercher une clé qui s'appelle key
    console.log(key + " : " + contact[key]);
}

/**
 * La boucle for...of
 */
names = ["Sébastien", "Mustapha", "Benjamin", "Yassine", "Céline"];

for (var item of names) {
    console.log(item);
}

/**
 * Exercice
 */
var etudiants = [
    {
        prenom: "Michel",
        nom: "Delpech",
        matieres: {
            francais: 18,
            anglais: 10,
            musique: 17
        }
    },
    {
        prenom: "Jackie",
        nom: "Quartz",
        matieres: {
            francais: 15,
            anglais: 10,
            musique: 12,
            eps: 5
        }
    }
];
/**
 * A partir du tableau ci-dessus : 
 * 
 * 1/ Afficher la liste des étudiants (Prénom Nom)
 * 
 * 2/ Pour chaque étudiant, afficher la liste des matières avec la note associée
 * 
 * 3/ Pour chaque étudiant, calculer et afficher la moyenne générale
 */
var moyenne, somme, nbNotes;

for (var item of etudiants) {
    // 1
    console.log(item.prenom + " " + item.nom);

    // Initialisation pour chaque étudiant de la somme
    somme = 0;
    nbNotes = 0;

    // 2 - Boucle qui permet de parcourir toutes les matières pour chaque étudiant
    for (var key in item.matieres) {
        console.log(key + " : " + item.matieres[key]);

        // 3.1 - Somme des notes d'un étudiant
        somme = somme + item.matieres[key];
        nbNotes++;
    }

    // 3.2 - Calcul de la moyenne
    moyenne = somme / nbNotes;
    console.log("moyenne générale : " + moyenne);

}