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
        }
        )
    }
  }
};
</script>