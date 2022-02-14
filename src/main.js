import Vue from 'vue'; // Global vue object
import App from './App.vue';
import VueResource from 'vue-resource'; //importa o componente

Vue.use(VueResource); //usa o componente

new Vue({
  el: '#app',
  render: (h) => h(App),
});
