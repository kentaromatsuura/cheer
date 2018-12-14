<template>
    <div class="topapge">
        <h1>Cheerへようこそ！</h1>
        <v-card>
            <v-container fluid grid-list-md>
                <v-layout row wrap>
                    <v-flex v-for="user in users" :key="user.id">
                        <user-list-element :user="user"></user-list-element>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
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
        users: null
      }
  },
  created() {
    this.users = api.fetchUsers();
  }
};
</script>
<style>
toppage {
    background-color: #f7be65;
}
</style>