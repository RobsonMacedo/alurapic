<template>
  <div id="app">
    <h1>{{titulo}}</h1>
    <ul>
      <li v-for="imagem of fotos">
        <img :src="imagem.url" :alt="imagem.titulo">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      titulo: 'Alura PIC',
      fotos: [
        
      ]
    }
  },
  created() {
    let promise = this.$http.get('htt://localhost:3000/v1/fotos');
    promise.then(resp => console.log(resp)).catch(err => console.log(err))
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
</style>
