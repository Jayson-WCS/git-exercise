/* ---------------   constante pour les exercices  -------------------- */

const listeAnimaux = ["caniche", "persan", "canari", "saumon"];

const animaux = [
  {
    famille: "chien",
    patte: 4,
    poils: true,
    race: "caniche",
  },

  {
    famille: "chat",
    patte: 4,
    poils: true,
    race: "persan",
  },

  {
    famille: "oiseau",
    patte: 2,
    poils: false,
    race: "canari",
  },

  {
    famille: "poisson",
    patte: 0,
    poils: false,
    race: "saumon",
  },
];

/* ---------------   EXERCICE 1  -------------------- */

/* écrivez votre code ici */
for (let i = 0; i < listeAnimaux.length; i++) {
  console.log(`Je suis un ${listeAnimaux[i]}`);
}

function printSentence(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(
      `Je suis un ${arr[i].race}, j'ai ${arr[i].patte} pattes et ${
        arr[i].patte === 4
          ? "j'ai des poils"
          : arr[i].patte === 2
          ? "j'ai des plumes"
          : "j'ai des écailles"
      }`
    );
  }
}

printSentence(animaux);

/* ---------------   BONUS  -------------------- */

const animaux2 = [
  {
    famille: "chien",
    patte: 4,
    poils: true,
    race: "dalmatien",
  },

  {
    famille: "chien",
    patte: 4,
    poils: true,
    race: "dobermann",
  },

  {
    famille: "chat",
    patte: 4,
    poils: true,
    race: "siberien",
  },

  {
    famille: "chat",
    patte: 4,
    poils: true,
    race: "chartreux",
  },

  {
    famille: "oiseau",
    patte: 2,
    poils: false,
    race: "rouge gorge",
  },
  {
    famille: "oiseau",
    patte: 2,
    poils: false,
    race: "perroquet",
  },
  {
    famille: "oiseau",
    patte: 2,
    poils: false,
    race: "faisan",
  },

  {
    famille: "poisson",
    patte: 0,
    poils: false,
    race: "thon",
  },
  {
    famille: "poisson",
    patte: 0,
    poils: false,
    race: "bar",
  },
];

printSentence(animaux2);
