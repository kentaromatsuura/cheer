<template>
　<h2 page-header>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.jpg" class ="logo">
      <HelloWorld msg="努力を可視化する次世代クリエイター応援サービス"/>
    </div>
　</h2>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style>
img.logo {
  width: 269px;
  height: 429px;
}
</style>
