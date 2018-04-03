<template>
<div class="home">
  <ul>
    <li v-for="a in articles" v-bind:key=a>
      {{a.test}}
    </li>
  </ul>
    <h1>{{ msg }}</h1>
    <li v-for="list in lists" v-bind:key=list>
      {{ list }}
    </li>
    <p>test consomation API REST GET </p>
    {{ ip }}
    <p>Test de consomation de API REST POST</p>
    <button id="button" v-on:click="test()">CLIC</button>
    <span>test : </span> {{ response[0]  }}
    {{ response[1] }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'test home',
      lists: ['test', 'test2', 'test3', 'test4'],
      ip: "",
      response: [],
      articles: [{
        "test": 'test1'
        }, {
        "test": 'test2'
      }],
    }
  },
  mounted() {
    axios({ method: 'GET', 'url': "https://httpbin.org/ip" })
    .then(result => {
      this.ip = result.data.origin
    }, error => {
      console.log(error)
    })
    },
  methods: {
      test() {
        axios({ method: 'POST','url': 'https://httpbin.org/post',
      'data': { test: [1, 2] }, 'headers': { "content-type": "application/json" }
    })
    .then(result => {
      for(let i in result.data.json.test){
        console.log(i)
      this.response.push(result.data.json.test[i])
      }
      console.log(result)
      }, error => {
        console.log(error)
      })
    }
  }
}
</script>
<style scoped>
.home {
  height: 100%;
  margin-top: 50px;
}
</style>
