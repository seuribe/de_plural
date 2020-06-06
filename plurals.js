

  var word;
  var conjugations;

  const CasePrefix = {
    [Cases.Nominativ]: "nom",
    [Cases.Akkusativ]: "akk",
    [Cases.Dativ]: "dat",
    [Cases.Genitiv]: "gen"
  };
  const NumberPostfix = {
    [Plurality.Singular]: "singular",
    [Plurality.Plural]: "plural"
  };

  function checkAnswer(kasus, number) {
    const inputId = CasePrefix[kasus] + "_" + NumberPostfix[number];
    const userInput = document.getElementById(inputId).value;
    const answer = conjugations[number][kasus];
    const answerField = document.getElementById(inputId + "_answer");
    document.getElementById("type").innerText = word.type;

    answerField.innerText = answer;
    if (answer != userInput)
      answerField.classList.add("incorrect");
    else
      answerField.classList.remove("incorrect");
  }

  function clearConjugation(kasus, number) {
    const inputId = CasePrefix[kasus] + "_" + NumberPostfix[number];
    const answerField = document.getElementById(inputId + "_answer");
    document.getElementById(inputId).value = "";
    answerField.innerText = "";
    answerField.classList.remove("incorrect");
  }

  function genderName(gender) {
    return (gender == Genders.Feminin) ? "Feminin" :
            (gender == Genders.Maskulin) ? "Maskulin":
            "Neutrum";
  }

  function checkGender(gender) {
    const genusElement = document.getElementById("genus");
    document.getElementById("genus_buttons").style.visibility = 'hidden';
    genusElement.innerHTML = genderName(word.gender);
    if (gender != word.gender) {
      genusElement.classList.add('incorrect');
    }
  }

  function newWord() {
    word = Dictionary[ Math.floor(Math.random() * Dictionary.length) ];
    conjugations = word.conjugations();
    document.getElementById("word").innerText = word.singular;
    document.getElementById("type").innerText = "";
    document.getElementById("genus").innerHTML = "";
    document.getElementById("genus").classList.remove('incorrect');
    document.getElementById("genus_buttons").style.visibility = 'visible';

    for (const kasus of Object.values(Cases)) {
      for (const number of Object.values(Plurality)) {
        clearConjugation(kasus, number);
      }
    }
  }

  function check(kasusList) {
    for (const kasus of kasusList) {
      for (const number of Object.values(Plurality)) {
        checkAnswer(kasus, number);
      }
    }
    checkGender(word.gender);
    document.getElementById("type").innerText = word.type;
  }
