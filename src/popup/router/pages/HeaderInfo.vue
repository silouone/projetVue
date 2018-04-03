<template>
<div class="headerInfo">
    <h1>{{ msg }}</h1>
</div>
</template>

<script>

export default {
  name: 'HeaderInfo',
  data () {
    return {
      msg: 'info'
    }
  }
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.headerInfo {
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  background-color: #5597b4;
  box-shadow: 0 1px 1px #ccc;
  border-radius: 2px;
  margin-bottom: auto;
}
h1 {
  font-size: 12px;
  color:#fff !important;
  padding: 18px 35px;
}
</style>
