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
              <v-btn v-on:click="signUp">SignUp</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
</template>
<script>
import firebase from "firebase";
export default {
  name: "SignOut",
  data:() => ({
      drawer: false
  }),
    props: {
        source: String
    },
  methods: {
    signout: function () {
      firebase.auth().signOut().then(() => {          
          this.$router.push('/')
        });
    }
  }
};
</script>