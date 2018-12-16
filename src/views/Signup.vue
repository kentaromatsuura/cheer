<template>
    <v-app>
      <v-content>
        <v-container>
          <v-layout row>
            <v-flex xs12>
              <h3>SignUp</h3>
              <v-text-field v-model="email" placeholder="email">
              </v-text-field>
              <v-text-field type="password" v-model="password" placeholder="password">
              </v-text-field>
              <v-btn v-on:click="signUp">Sign Up</v-btn>
              <v-btn v-on:click="signUpGoogle">Sign Up with Googleaccount</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
</template>
<script>
import firebase from "firebase";
export default {
  name: "Signup",
  data() {
      return {
        email: null,
        password: null
      }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert('Create account: ', this.email);
          console.log(user);
          this.$router.push('/toppage');
        })
        .catch(error => {
          alert(error.message);
        });
      },
    signUpGoogle: function () {
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
}
</script>
<style scoped>
.v-btn{
  font-size: 30px;
  padding: 0px 30px;
}
h3{
  font-size: 60px;
}
</style>