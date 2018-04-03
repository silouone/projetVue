<template>
  <nav>
    <ul>
      <li id="li-home"><router-link to='/' active-class="active">Home</router-link></li>
      <li><router-link to='/Categories' active-class="active">Categories</router-link></li>
      <li><router-link to='/Favoris' active-class="active">Favoris</router-link></li>
    </ul>
  </nav>
</template>

<script>
import Home from './Home'
import Categories from './Categories'
import Favoris from './Favoris'

export default {
  components: {
    'Home': Home,
    'Categories': Categories,
    'Favoris': Favoris
  },
  name: 'FooterMenu',
  data () {
    return {

    }
  }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
nav {
  position: fixed;
  bottom : 0;
  width: 100%;
  background-color: #5597b4;
  box-shadow: 0 1px 1px #ccc;
  white-space: nowrap;
}
li {
  display: inline-block;
  width: 133px;
  padding: 18px 25px;
  color:wheat !important;
  border-right: 1px solid ;
  white-space: normal;
}
#li-home {
border-left: 1px solid;
}
li :hover {
  background-color: #555;
}
</style>
