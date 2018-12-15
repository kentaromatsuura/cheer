<template>
  <div class="artistpage">
    <h1>{{user.name}}さんのページ
    <v-img :src="user.image" width="100px"></v-img>
    </h1>
    <br>
    <ul>
        <li><router-link to="/toppage/1">影響を与えた作品</router-link></li>
        <li><router-link to="/calender">{{user.name}}さんの予定</router-link></li>
        <li><router-link to="/timeline">{{user.name}}さんの作品</router-link></li>
    </ul>
  </div>
</template>
<script>
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
        user: null
      }
  },
  created() {
    this.user = api.fetchUser(this.userId);
  }
};
</script>
<style>
artistpage {
    background-color: #f7be65;
}
.SideBySide h1{
display:inline-block;
vertical-align:top;
}
h1 {
  font-size: 150px,  
}
</style>