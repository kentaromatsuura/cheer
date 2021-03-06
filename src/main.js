import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from "vuetify";
import router from './router'
import firebase from "firebase"
import "vuetify/dist/vuetify.min.css";
import VueCarousel from "vue-carousel";
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);
Vue.use(VueCarousel);

Vue.config.productionTip = false
var config = {
  apiKey: "AIzaSyBhTYcA42vj_kCkrgeC_T6g0GXGIj5A8w0",
  authDomain: "cheer-dbad0.firebaseapp.com",
  databaseURL: "https://cheer-dbad0.firebaseio.com",
  projectId: "cheer-dbad0",
  storageBucket: "cheer-dbad0.appspot.com",
  messagingSenderId: "251232270323"
};
firebase.initializeApp(config);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
