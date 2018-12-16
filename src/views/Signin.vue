<template>
    <v-app>
      <v-content>
        <v-container>
          <v-layout row>
            <v-flex xs12>
              <h3>Log In</h3>
              <v-text-field v-model="email" placeholder="email">
              </v-text-field>
              <v-text-field type="password" v-model="password" placeholder="password">
              </v-text-field>
              <v-btn v-on:click="signin">Log In</v-btn>
              <v-btn v-on:click="signInGoogle">Log In with Google account</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
</template>
<script>
import firebase from "firebase";
export default {
  name: "SignIn",
  data() {
      return {
        email: null,
        password: null
      }
  },
  methods: {
    signin: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert('Success!')
          this.$router.push('/toppage')
        },
        err => {
          alert(err.message)
        });
    },
    signInGoogle: function (){
      var provider = new firebase.auth.GoogleAuthProvider();
      
      firebase.auth().signInWithPopup(provider).then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      console.log(user);
      // ...
      this.$router.push('/toppage');

      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
      });
    }
  } 
};
</script>