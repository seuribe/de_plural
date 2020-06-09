import Vue from 'vue';

import { randomAdjectiveDeclentionType } from './definitions';
import { randomAdjective } from './dictionary';

import './checked-input';

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
    newWord: function() {
      this.adjective = randomAdjective();
      this.declensionType = randomAdjectiveDeclentionType();
      this.declensions = this.adjective.declensions()[this.declensionType];
      this.show_answers = false;
      this.bus.$emit('clear');
    },

    check: function() {
      this.show_answers = true;
    }
  }
});
