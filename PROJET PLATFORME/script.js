document.addEventListener("DOMContentLoaded", function() {
    const cours = [
        {
            titre: "Introduction à la Programmation",
            contenu: `
                <p>La programmation consiste à donner des instructions à un ordinateur pour qu'il réalise des tâches spécifiques.</p>
                <p><strong>Exemple :</strong> Afficher "Bonjour le monde" en JavaScript :</p>
                <pre>console.log("Bonjour le monde");</pre>
            `
        },
        {
            titre: "Variables et Types",
            contenu: `
                <p>Une variable permet de stocker une valeur en mémoire.</p>
                <p><strong>Exemple :</strong></p>
                <pre>let age = 25; // variable de type nombre</pre>
            `
        },
        {
            titre: "Conditions",
            contenu: `
                <p>Les conditions permettent d'exécuter du code selon une situation.</p>
                <p><strong>Exemple :</strong></p>
                <pre>
if (age >= 18) {
    console.log("Majeur");
} else {
    console.log("Mineur");
}
                </pre>
            `
        }
    ];

    let index = 0;
    const btnCours = document.getElementById("btn-cours");
    const blocCours = document.getElementById("cours");
    const titreCours = document.getElementById("titre-cours");
    const contenuCours = document.getElementById("contenu-cours");
    const btnSuivant = document.getElementById("btn-suivant");

    btnCours.addEventListener("click", function() {
        blocCours.style.display = "block";
        btnCours.style.display = "none";
        afficherCours(index);
        if (cours.length > 1) btnSuivant.style.display = "block";
    });

    btnSuivant.addEventListener("click", function() {
        index++;
        if (index < cours.length) {
            afficherCours(index);
            if (index === cours.length - 1) btnSuivant.textContent = "Terminer";
        } else {
            titreCours.textContent = "Félicitations !";
            contenuCours.innerHTML = "<p>Tu as terminé ce mini-cours 🎉</p>";
            btnSuivant.style.display = "none";
        }
    });

    function afficherCours(i) {
        titreCours.textContent = cours[i].titre;
        contenuCours.innerHTML = cours[i].contenu;
        btnSuivant.textContent = (i === cours.length - 1) ? "Terminer" : "Leçon suivante";
    }
});