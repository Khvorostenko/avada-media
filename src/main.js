import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyC3b-r1-WqiALaLA31e7U4a5x0WE0P58lk",
  authDomain: "avada-media-335d6.firebaseapp.com",
  databaseURL: "https://avada-media-335d6-default-rtdb.firebaseio.com",
  projectId: "avada-media-335d6",
  storageBucket: "avada-media-335d6.appspot.com",
  messagingSenderId: "910287046654",
  appId: "1:910287046654:web:f17bd820510b4d4234e2af"
};

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      render: h => h(App),
      router,
      store
    }).$mount('#app')
  }
})