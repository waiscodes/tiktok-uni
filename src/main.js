import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyCD9qHdiRGQBEFoyHy4BCijubMce8url60",
  authDomain: "vue-upload-6a992.firebaseapp.com",
  projectId: "vue-upload-6a992",
  storageBucket: "vue-upload-6a992.appspot.com",
  messagingSenderId: "436547538862",
  appId: "1:436547538862:web:fb6e01811d1df2c7b1c23f",
});

createApp(App)
  .use(router)
  .mount("#app");
