import Vue from 'vue';

import { Genders, Cases, AdjektivDeclensionType } from './definitions';
import { randomAdjective } from './dictionary';

import './checked-input';

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

Vue.component('deklination-adjectiv-row', {
  props: ['kasus', 'declensions', 'show', 'bus'],
  data: function() {
    return {
    }
  },
  template:`<div class="row">
              <div class="rowhead">{{ kasus }}</div>
              <div class="inputcell"><checked-input v-bind:bus="bus" v-bind:expected="declensions[kasus]['Maskulin']" v-bind:show="show"></checked-input></div>
              <div class="inputcell"><checked-input v-bind:bus="bus" v-bind:expected="declensions[kasus]['Feminin']" v-bind:show="show"></checked-input></div>
              <div class="inputcell"><checked-input v-bind:bus="bus" v-bind:expected="declensions[kasus]['Neutrum']" v-bind:show="show"></checked-input></div>
              <div class="inputcell"><checked-input v-bind:bus="bus" v-bind:expected="declensions[kasus]['Plural']" v-bind:show="show"></checked-input></div>
              <div class="buttoncell"><button v-on:click="show = !show">{{ (show ? "Hide" : "Check") }}</button></div>
            </div>`

});

var app = new Vue({
  el: "#adjektivApp",
  data: {
    adjective: "",
    declensions: "",
    declensionType: "",
    show_answers: false,
    bus: new Vue()
  },
  created: function() {
    this.newWord();
  },
  methods: {
    randomAdjectiveDeclentionType: function() {
      const types = Object.keys(AdjektivDeclensionType);
      return types[Math.floor(Math.random() * types.length)];
    },

    newWord: function() {
      this.adjective = randomAdjective();
      this.declensionType = this.randomAdjectiveDeclentionType();
      this.declensions = this.adjective.declensions()[this.declensionType];
      this.show_answers = false;
      this.bus.$emit('clear');
    },

    check: function() {
      this.show_answers = true;
    }
  }
});
