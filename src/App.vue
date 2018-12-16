<template>
  <div id="app">
    <v-toolbar
      color="orange lighten-2"
      dense
      fixed
      clipped-left
      dark
      app
    >
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat to="/">Home </v-btn>
        <v-btn flat to="/signup">  Sign Up </v-btn>
        <v-btn flat to="/signin"> Log In </v-btn> 
        <v-btn flat to="/signout">  Sign Out </v-btn>
        <v-btn flat to="/about">  Contact us </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>

    <v-footer
    height="auto"
    color="#111"
    >
      
      <v-card
      class="flex"
      flat
      tile
      color="#f7be65"
      >
        <v-card-title class="gray --text text-xs-center">
          <strong class="subheading">Get connected with us on social networks!</strong>
          <v-spacer></v-spacer>
          <v-layout justify-space-around>   

            <v-icon class="gray--text">mdi-facebook</v-icon>

            <v-icon class="gray--text">mdi-twitter</v-icon>

            <v-icon class="gray--text">mdi-instagram</v-icon>

            <v-icon class="gray--text">mdi-google-plus</v-icon>
          </v-layout>
        </v-card-title>
        <v-card-actions class="gray--text justify-center">
         &copy;2018 — <strong>Cheer</strong>
        </v-card-actions>
        </v-card>
    </v-footer>
 </div> 
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
      alert("sign out");
      firebase.auth().signOut().then(() => {          
          this.$router.push('/')
        });
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:#f7be65;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
