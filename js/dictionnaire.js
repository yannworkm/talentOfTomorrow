var boulanger = {
  "Poste" : "Boulanger",
  "Entreprise": "Boulangerie Marie Blachère",
  "Catégorie" : "Agroalimentaire" ,
  "Compétences" : {
    "Technique" : {
      "1" : "Pâte" ,
      "2" : "Viennoiserie" ,
      "3" : "Levain dur" ,
      "4" : "Pâtisserie"
    },
    "Methodologique" : {
      "1" : "Fabrication" ,
      "2" : "Cuisson"
    },
    "Humaine" : {
      "1" : "Ambitieux" ,
      "2" : "Rigoureux" ,
      "3" : "Accueillant" ,
      "4" : "Chaleureux"
    }
  },
  "Localisation": "Voiron",
  "Description": "Nous recherchons actuellement un boulanger pour un CDI."
};

var iT_Infra = {
  "Poste" : "Architecte infrastructure IT",
  "Entreprise": "ST",
  "Catégorie" : "Informatique" ,
  "Compétences" : {
    "Technique" : {
      "1" : "Windows" ,
      "2" : "Linux" ,
      "3" : "Serveur" ,
      "4" : "NAS" ,
      "5" : "Messagerie" ,
      "6" : "TCP"
    },
    "Methodologique" : {
      "1" : "Active directory" ,
      "2" : "Sauvegarde" ,
      "3" : "Support" ,
      "4" : "Assistance"
    },
    "Humaine" : {
      "1" : "Débrouillard" ,
      "2" : "Polyvalent" ,
      "3" : "Responsable"
    }
  },
  "Localisation": "Grenoble",
  "Description": "Nous recherchons actuellement un architecte en infrastructure IT. Ce poste débutera par un CDD de six mois puis un CDI"
};

var iT_Dev = {
  "Poste" : "Ingénieur logiciel",
  "Entreprise": "TRIXELL",
  "Catégorie" : "Informatique" ,
  "Compétences" : {
    "Technique" : {
      "1" : "Java" ,
      "2" : "C++" ,
      "3" : "Python"
    },
    "Methodologique" : {
      "1" : "Agile" ,
      "2" : "Visual Studio" ,
      "3" : "Test unitaires" ,
      "4" : "Jenkins"
    },
    "Humaine" : {
      "1" : "Accessible" ,
      "2" : "Déterminé" ,
      "3" : "Décidé" ,
      "4" : "Méthodique"
    }
  },
  "Localisation": "Moirans",
  "Description": "Nous recherchons actuellement un developpeur pour un CDI."
};

var commercial = {
  "Poste" : "Commercial",
  "Entreprise": "Carrefour",
  "Catégorie" : "Vente" ,
  "Compétences" : {
    "Technique" : {
      "1" : "Négociations" ,
      "2" : "Gérance" ,
      "3" : "Ventes"
    },
    "Methodologique" : {
      "1" : "Commercial B to B" ,
      "2" : "Analyse" ,
      "3" : "Organisation" ,
      "4" : ""
    },
    "Humaine" : {
      "1" : "Efficace" ,
      "2" : "Souriant" ,
      "3" : "Spontané" ,
      "4" : "Sociable"
    }
  },
  "Localisation": "Gières",
  "Description": "Nous recherchons actuellement un commercial. Ce poste débutera par un CDD de six mois puis un CDI"
};

var secrétaire = {
  "Poste" : "Secrétaire",
  "Entreprise": "IBM",
  "Catégorie" : "Secrétariat" ,
  "Compétences" : {
    "Technique" : {
      "1" : "Accueil physique" ,
      "2" : "Accueil téléphonique" ,
      "3" : "Standard"
    },
    "Methodologique" : {
      "1" : "Rédaction de dossier," ,
      "2" : "Notification de dossier" ,
      "3" : "Gestion des courriers" ,
      "4" : "Gestion administrative"
    },
    "Humaine" : {
      "1" : "Accueillant " ,
      "2" : "Agréable" ,
      "3" : "Humain" ,
      "4" : "Paisible"
    }
  },
  "Localisation": "",
  "Description": "Nous recherchons actuellement une secrétaire pour un CDI."
};

var listPost = new Array (boulanger, iT_Infra, iT_Dev, commercial, secrétaire);



function getMatchingPoste(compTech, comptMethodo, comptHumaine)
{
  var resultGlobalMatching = [];
  listPost.forEach(function(poste){
    var actualPoste = poste['Poste'];
    var matchingcompTech = getMatchingComp(Object.values(poste['Compétences']['Technique']),compTech);
    var matchingcompMethodo = getMatchingComp(Object.values(poste['Compétences']['Methodologique']),comptMethodo);
    var matchingcompHumaine = getMatchingComp(Object.values(poste['Compétences']['Humaine']),comptHumaine);
    var globalmatching = Math.round(((matchingcompTech+matchingcompMethodo+matchingcompHumaine)/3)*100)/100;
    resultGlobalMatching.push(
      {
        "Poste" : actualPoste,
        "Résultat" : globalmatching+"%"
      }
    );
  });
  console.log(resultGlobalMatching);
}

function getMatchingComp(listPost, listCandidat) {
    var matches = [];
    for ( var i = 0; i < listPost.length; i++ ) {
        for ( var e = 0; e < listCandidat.length; e++ ) {
            if ( listPost[i] === listCandidat[e] ) matches.push( listPost[i] );
        }
    }
    return Math.round((matches.length/listPost.length)*10000)/100;
}

const competencesTech = [
  "Javascript",
  "Symfony",
  "php",
  "TypeScript",
  "perl",
  "Angular",
  "NgRx",
  "RxJs",
  "Python",
  "C#",
  "AngularJS",
  "Bootstrap4",
  "Ajax",
  "ReactNative",
  "ReactJS",
  "MongoDB",
  "SQL",
  ".net",
  "CakePHP"
];

const competencesMeth = [
  "Kanban",
  "Scrum",
  "Jira",
  "Git",
  "Jenkins",
  "Docker",
  "Kubernetes"
];

const competencesHumaine = [
  "Curieux",
  "Accessible",
  "Agréable",
  "Altruiste",
  "Ambitieux",
  "Dynamique",
  "Honnête",
  "Autonome",
  "Combatif",
  "Coopératif",
  "Persévérant",
  "Précis",
  "minutieux",
  "Rigoureux",
  "Observateur",
  "Bienveillant",
  "Loyale",
  "généreux",
  "perfectionniste",
  "créatif",
  "calme",
  "patient",
  "ponctuel",
  "pragmatique",
  "volontaire",
  "vigilant",
  "vif",
  "sincère",
  "sociable",
  "vaillant",
  "prudent",
  "pugnace",
  "paisible",
  "optimiste"
];

const category = [
  "Curieux",
  "Accessible",
  "Agréable",
  "Altruiste",
  "Ambitieux",
  "Dynamique",
  "Honnête",
  "Autonome",
  "Combatif",
  "Coopératif",
  "Persévérant",
  "Précis",
  "minutieux",
  "Rigoureux",
  "Observateur",
  "Bienveillant",
  "Loyale",
  "généreux",
  "perfectionniste",
  "créatif",
  "calme",
  "patient",
  "ponctuel",
  "pragmatique",
  "volontaire",
  "vigilant",
  "vif",
  "sincère",
  "sociable",
  "vaillant",
  "prudent",
  "pugnace",
  "paisible",
  "optimiste"
];
