
var adjective;
var declensions;
var type;

const CasePrefix = {
  [Cases.Nominativ]: "nom",
  [Cases.Akkusativ]: "akk",
  [Cases.Dativ]: "dat",
  [Cases.Genitiv]: "gen"
};
const GenderPostfix = {
  [Genders.Maskulin]: "mas",
  [Genders.Feminin]: "fem",
  [Genders.Neutrum]: "neu",
  [Genders.Plural]: "plu"
};

function checkAnswer(type, kasus, gender) {
  const inputId = CasePrefix[kasus] + "_" + GenderPostfix[gender];
  const userInput = document.getElementById(inputId).value;
  const answer = declensions[type][kasus][gender];
  const answerField = document.getElementById(inputId + "_answer");

  answerField.innerText = answer;
  if (answer != userInput)
    answerField.classList.add("incorrect");
  else
    answerField.classList.remove("incorrect");
}

function clearConjugation(kasus, gender) {
  const inputId = CasePrefix[kasus] + "_" + GenderPostfix[gender];
  const answerField = document.getElementById(inputId + "_answer");
  document.getElementById(inputId).value = "";
  answerField.innerText = "";
  answerField.classList.remove("incorrect");
}

function check(kasusList) {
  for (const kasus of kasusList) {
    for (const gender of Object.values(Genders)) {
      checkAnswer(AdjektivDeclensionType[type], kasus, gender);
    }
  }
}

function randomAdjectiveDeclentionType() {
  const types = Object.keys(AdjektivDeclensionType);
  return types[Math.floor(Math.random() * types.length)];
}

function newWord() {
  adjective = randomAdjective();
  declensions = adjective.declensions();
  type = randomAdjectiveDeclentionType();
 
  document.getElementById("adjective").innerText = adjective.rootForm;
  document.getElementById("type").innerText = type;

  for (const kasus of Object.values(Cases)) {
    for (const gender of Object.values(Genders)) {
      clearConjugation(kasus, gender);
    }
  }
}

