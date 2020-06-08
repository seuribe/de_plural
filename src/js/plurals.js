import { Genders, Cases, Plurality } from './definitions';
import { Dictionary } from './dictionary';

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

var app = new Vue({
  el: "#app",
  data: {
    word: "",
    conjugations: null,
    type: "",
    gender_guess: "",
    gender: "",
    answers: {},
    reveal_type: false,
    reveal_gender: false,
    reveal_gender_buttons: true
  },

  created: function() {
    this.newWord();
  },

  methods: {
    checkAnswer: function(kasus, number) {
      const inputId = CasePrefix[kasus] + "_" + NumberPostfix[number];
      const userInput = document.getElementById(inputId).value;
      const answer = this.conjugations[number][kasus];
      const answerField = document.getElementById(inputId + "_answer");
  
      answerField.innerText = answer;
      if (answer != userInput)
        answerField.classList.add("incorrect");
      else
        answerField.classList.remove("incorrect");
      },

    clearConjugation: function(kasus, number) {
      const inputId = CasePrefix[kasus] + "_" + NumberPostfix[number];
      const answerField = document.getElementById(inputId + "_answer");
      document.getElementById(inputId).value = "";
      answerField.innerText = "";
      answerField.classList.remove("incorrect");
    },

    genderName: function(gender) {
      return (gender == Genders.Feminin) ? "Feminin" :
              (gender == Genders.Maskulin) ? "Maskulin":
              "Neutrum";
    },

    checkGender: function(gender) {
      this.gender_guess = gender;
      this.reveal_gender = true;
      this.reveal_gender_buttons = false;
    },

    check: function(kasusList = null) {
      if (kasusList == null)
        kasusList = Object.values(Cases);

      for (const kasus of kasusList) {
        for (const number of Object.values(Plurality)) {
          this.checkAnswer(kasus, number);
        }
      }
      this.checkGender(this.word.gender);
      this.reveal_type = true;
    },

    newWord: function() {
      this.word = Dictionary[ Math.floor(Math.random() * Dictionary.length) ];
      this.conjugations = this.word.conjugations();
      this.reveal_type = false;
      this.reveal_gender = false;
      this.reveal_gender_buttons = true;

      for (const kasus of Object.values(Cases)) {
        for (const number of Object.values(Plurality)) {
          this.clearConjugation(kasus, number);
        }
      }
    }
  }
});

