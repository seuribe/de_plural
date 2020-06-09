import Vue from 'vue';

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