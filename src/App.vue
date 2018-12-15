<template>
  <div id="app">
    <div id="nav">
      <div align = "right">
        <router-link to="/signin">Login</router-link> |
        <router-link to="/">Home</router-link>
        <router-link to="/about"> | Future</router-link>
        <v-list-tile v-on:click="signout">| Signout</v-list-tile>
        <router-link to="/about"> | Contact us</router-link>
      </div>
    </div>
    <router-view/>
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
