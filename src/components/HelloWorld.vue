<template>
  <div class="hello">
    <h1>努力を可視化する<br>次世代クリエイター応援サービス</h1>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <div align="left" style="margin-left:100px"><h2>応援する、そして一緒に作っていく</h2>
        <h4>Cheerは、今はまだ未熟だけど、未来に向かって頑張るクリエーターを応援するサービスです。</h4>
      </div>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
     <div class="container">
      <div class="row">
        <div class="col-md-4"><img alt="Vue logo" src="../assets/enogu.jpg" class="money"><br>
          <h5>夢に向かうクリエイターの努力を見ることができます</h5>
            <h6>制作活動はもちろん、取材や売り込み、資料調査など表には出てこないクリエイターの様々な努力をCheerではみることができます。Cheerで将来性のあるクリエイターと出会ってみませんか？</h6>
        </div>
        <div class="col-md-4"><img alt="Vue logo" src="../assets/money.jpg" class="money">
          <h5>見込みがある！と思ったクリエイターにはTipができます</h5>
          <h6>Cheerで正しい努力を十分な量行なっているクリエイターを見つけたら、彼らにTipして経済的に支援することができます。Tipしておくと彼らが成長した時に仕事の依頼がしやすくなります。</h6>
        </div>
        <div class="col-md-4"><img alt="Vue logo" src="../assets/present.jpg" class="money">
          <h5>Tipで溜まったポイントでお返しもゲットできます</h5>
          <h6>Tipするとそのクリエイターが用意しているお返しをゲットできます。レア画像や個展へのチケットなど様々なクリエイターのお返しをゲットしましょう！</h6>
        </div>
      </div>
     </div>
    <br>
    <p>
      <!-- <button v-on:click="Enter">{{start}}</button> -->
      <!-- <h1 v-if="show">私は{{ love }}が好きです</h1> -->
       <v-btn router-link to="/signup">今すぐ始める！</v-btn>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      show: false,
      start: "今すぐ始める!",
      items: ["a", "b"]
    }
  },
  props: {
    msg: String
  },
  methods: {
    Enter: function(){
      this.show=!this.show
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {color: white;
font-size: 80px;
}
h2 {color: black;
font-size: 50px;
}
h3 {
  margin: 80px 100 100;
}
h4 {
  font-size: 20px;
  color: white;
}
h5 {color: black;
font-size: 40px;
}
h6 {color:grey;
font-size: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img.money{
  width: 350px;
  height: 350px;
}
img.gift{
  width: 350px;
  height: 550px;
}
button {
  font-size: 40px;
  padding: 10px 30px;
  background-color: grey;
}
button.btn btn-primary:hover {
    /* 背景色を明るい青色に指定 */
    background-color: #24d;
    /* 文字色を白色に指定 */
    color: #fff;
}
.v-btn{
  font-size: 40px;
  height: 40px;
}

</style>
