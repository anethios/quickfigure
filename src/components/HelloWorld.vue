<template>
  <div class="hello">
    <b-container>
      <b-row>
        <b-col>
          <b-form-input v-model="number" placeholder="Total Squares"/>
        </b-col>
        <b-col>
          <b-form-select v-model="selected" :options="options"/>
        </b-col>
      </b-row>
      <br/>
      <br/>
      <br/>
      <br/>
      <b-row>
        <b-col class="chaching">
          {{endValue | currency}}
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          {{testPref}}
        </b-col>
        <b-col>
          <b-button v-on:click="set"> set </b-button>
        </b-col>
        <b-col>
          <b-button v-on:click="testRemote"> test </b-button>
        </b-col>
        <b-col>
          {{user}}
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { remote } from 'electron'
const foo = remote.require('../test.js')
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    set: function(){
      this.$cookies.set("user", "britton")
    },
    get: function(){
      //Console.log(this.$cookies.get("user"))
    },
    testRemote (){
      console.log(foo)
    }
  },
  data() {
    return {
      selected: null,
      number: null,
      options: [
        { value: null, text: 'Select Steepness'},
        { value: 300, text: 'Gentle'},
        { value: 325, text: 'Steep In Some Places'},
        { value: 350, text: 'Steep'}
      ]
    }
  },
  computed : {
    user: function(){
      return this.$cookies.get("user")
    },
    endValue: function(){
      if(this.selected == null){
        return 0
      }
      else{
        var waste = this.number * 0.15
        var newNumber = (parseFloat(this.number) + waste) * this.selected
        return newNumber
      }
    },
    testPref: function(){
      return 0+1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.chaching {
  color: rgb(31, 145, 31);
  font-size: 70px;
}
</style>
