
<template>
  <div class="about">
      <h3>{{email}} さん ようこそ！</h3>
      <v-card>
            <v-container fluid grid-list-md fill-height　fill-width>
                <v-layout  justify-center>
                <v-flex>
                    <v-img :src="require('../assets/money.jpg')"
                    height="500"
                    width="500"
                    >
                            <v-flex xs12 align-end flexbox>
                                <span class="headline white--text">
                                    <v-btn router-link :to="`/works/`">Tipしたアーティスト</router-link></v-btn>
                                </span>
                            </v-flex>
                    </v-img>
            </v-flex>
            <v-flex>
                <v-img :src="require('../assets/logo.jpg')"
                    height="500"
                    width="500">
                            <v-flex xs12 align-end flexbox>
                                <span class="headline white--text">
                                    <v-btn router-link to="/calender">あなたにおすすめのアーティスト</router-link></v-btn>
                                </span>
                            </v-flex>
                </v-img>
        </v-flex>
        <v-flex>
                <v-img :src="require('../assets/logo.jpg')"
                    height="500"
                    width="500">
                            <v-flex xs12 align-end flexbox>
                                <span class="headline white--text">
                                    <v-btn router-link to="/timeline">カレンダー</router-link></v-btn>
                                </span>
                            </v-flex>
                </v-img>
        </v-flex>
        </v-layout>
        </v-container>
    </v-card>  
  </div>

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
  beforeCreate(){
      firebase.auth().onAuthStateChanged( user =>  {
        if (user) {
            console.log(firebase.auth().currentUser);
            this.email = user.email
            // User is signed in.
        } else {
            // No user is signed in.
        }
    });
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

<style>
    
    h6 {color:grey;
      font-size: 20px;
    }

</style>
