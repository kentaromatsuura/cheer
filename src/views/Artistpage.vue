<template>
  <div class="artistpage">
      <div class="SideBySide">
        <h1>{{user.name}}さんのページ<br><br>{{user.university}}</h1>
        <h1><v-img :src="user.image" width="150px"></v-img></h1>
            <v-layout row justify-center>
                <v-dialog v-model="dialog" persistent max-width="600px">
                    <v-btn slot="activator" color="primary" dark>{{user.name}}さんにTipする！</v-btn>
                    <v-card>
                        <v-card-title>
                            <span class="headline">金額設定</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>
                                    <v-flex xs12>
                                        <v-text-field type="number" min=0 v-model="newToDoTitle"
                                        label="送金金額を記入してください*" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-text-field v-model="comment" label="何か応援メッセージがあれば記入してください！"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm12>
                                        <v-select v-model="selected" :items="items" label="送金方法*" required>
                                        </v-select>
                                        <v-text-field v-if="selected == 'クレジットカード'" required label="カード番号を入力してください"/>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <small>*必須事項</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn v-model="dialog" v-on:click="send">送金</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-layout>
     </div>
    <br>
        <v-card>
            <v-container fluid grid-list-md fill-height　fill-width>
                <v-layout  justify-center>
                <v-flex>
                    <v-img :src="require('../assets/favorite work.jpg')"
                    height="500"
                    width="500"
                    >
                            <v-flex xs12 align-end flexbox>
                                <span class="headline white--text">
                                    <v-btn router-link :to="`${user.id}/works/`">私に影響を与え作品</router-link></v-btn>
                                </span>
                            </v-flex>
                    </v-img>
            </v-flex>
            <v-flex>
                <v-img :src="require('../assets/calendar.jpg')"
                    height="500"
                    width="500">
                            <v-flex xs12 align-end flexbox>
                                <span class="headline white--text">
                                    <v-btn router-link to="/calender">{{user.name}}さんの予定</router-link></v-btn>
                                </span>
                            </v-flex>
                </v-img>
        </v-flex>
        <v-flex>
                <v-img :src="require('../assets/favorite work.jpg')"
                    height="500"
                    width="500">
                            <v-flex xs12 align-end flexbox>
                                <span class="headline white--text">
                                    <v-btn router-link to="/timeline">{{user.name}}さんの作品</router-link></v-btn>
                                </span>
                            </v-flex>
                </v-img>
        </v-flex>
        </v-layout>
        </v-container>
    </v-card>
    <p>
    <router-link to="/toppage">Back</router-link>
    </p>
  </div>
</template>
<script>
import vSelect from 'vue-select';
import UserListElement from "./UserListElement.vue";
import api from "@/api";
export default {
  name: "Users",
  components: {
    UserListElement
  },
  props: ["userId"],
  data() {
      return {
        selected: "",
        dialog: false,
        user: null,
        items:['クレジットカード', 'paypal', 'paypay', 'Linepay'],
        todos: [],
        newToDoTitle: "",
        comment: ""
      }
  },
  methods: {
      send: function(){
      this.dialog=false
      alert("送金完了しました！")
      this.todos.push({
        id: this.todos.length,
        title: value,
        checked: false
      })
    }
  },
  created() {
    this.user = api.fetchUser(this.userId);
  }
};
</script>
<style>
.artistpage {
    background-color: #f7be65;
}
.SideBySide h1{
display:inline-block;
vertical-align:middle;
padding:10px;
}
.v-btn{
    font-size: 40px;
    size: 50pt;
    align-self: auto;
    padding: auto;
    height: 50px;
}
h1 {
  font-size: 50px;
  color:black;
}
.v-card {
    font-size: 30pt;
    color: black;
}
p {
    font-size: 30pt;
    color: black;
}
.v-img {
    opacity: 0.5;
}
</style>