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

Vue.component('checked-input', {
  props: ['expected', 'show', 'bus'],
  data: function() {
    return {
      input: "",
    }
  },
  methods: {
    clear: function() {
      this.input = "";
    }
  },
  mounted() {
    this.bus.$on('clear', this.clear);
  },
  template: `<div>
               <input v-model="input" type="text"></input>
               <span v-if="show" v-bind:class="{ incorrect: (input != expected) }">{{expected}}</span>
             </div>`

});

Vue.component('checked-case', {
  props: ['kasus', 'conjugations', 'show', 'bus'],
  data: function() {
    return {
    }
  },
  template:`<div class="row">
              <div class="rowhead">{{ kasus }}</div>
              <div class="inputcell"><checked-input v-bind:bus="bus" v-bind:expected="conjugations['Singular'][kasus]" v-bind:show="show"></checked-input></div>
              <div class="inputcell"><checked-input v-bind:bus="bus" v-bind:expected="conjugations['Plural'][kasus]" v-bind:show="show"></checked-input></div>
              <div class="buttoncell"><button v-on:click="show = !show">{{ (show ? "Hide" : "Check") }}</button></div>
            </div>`
});

var app = new Vue({
  el: "#app",
  data: {
    word: "",
    conjugations: null,
    type: "",
    gender_guess: "",
    gender: "",
    show_answers: false,
    reveal_type: false,
    reveal_gender: false,
    reveal_gender_buttons: true,
    bus: new Vue()
  },

  created: function() {
    this.newWord();
  },

  methods: {
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

      this.checkGender(this.word.gender);
      this.reveal_type = true;
      this.show_answers = true;

    },

    newWord: function() {
      this.word = Dictionary[ Math.floor(Math.random() * Dictionary.length) ];
      this.conjugations = this.word.conjugations();
      this.show_answers = false;
      this.reveal_type = false;
      this.reveal_gender = false;
      this.reveal_gender_buttons = true;
      this.bus.$emit('clear');
    }
  }
});

