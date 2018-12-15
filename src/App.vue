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
        <v-btn flat to="/signin"> Log In </v-btn> 
        <v-btn flat to="/signout">  Sign Out </v-btn>
        <v-btn flat to="/about">  Contact us </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
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
