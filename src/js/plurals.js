import Vue from 'vue';

import { Dictionary } from './dictionary';

import './checked-input';

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
    checkGender: function(gender) {
      this.gender_guess = gender;
      this.reveal_gender = true;
      this.reveal_gender_buttons = false;
    },

    check: function() {
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

