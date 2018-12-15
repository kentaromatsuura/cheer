<template>
    <div class="timeline">
        <h1>My Works</h1>
        <div class="container">
        <div class="row">
            <div class="col-md-4"><img alt="Vue logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg/340px-Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg" class="money"><br>
                <h6>workname: 日傘をさす女</h6>
                <h6>status: 完成</h6>
                <h6>date: 2015.2.3</h6>
            </div>
            <div class="col-md-4"><img alt="Vue logo" src="https://stat.ameba.jp/user_images/20100720/08/moohwa/9e/5c/j/o0590043410648781034.jpg?caw=800" class="money"><br>
                <h6>workname: りんご</h6>
                <h6>status: 完成</h6>
                <h6>date: 2016.10.23</h6>
            </div>
            <div class="col-md-4"><img alt="Vue logo" src="http://www.artmasters.ac.jp/oil/img/impressionism.jpg" class="money"><br>
                <h6>workname: 風景画</h6>
                <h6>status: 完成</h6>
                <h6>date: 2017.6.22</h6>
            </div>
            <div class="col-md-4">
            <a href="/mywork">
                <img alt="Vue logo" src="https://blog-imgs-59.fc2.com/n/a/s/nasaklozeebrautamaru/7.jpg" class="money" :to="`/mywork`"><br>
                </a>
                <h6>workname: いもうと</h6>
                <h6>status: 未完成</h6>
                <h6>date: 2017.10.15</h6>
            </div>
            <div class="col-md-4"><img alt="Vue logo" src="http://www.artmasters.ac.jp/html/images/!oil/y01-s.jpg" class="money"><br>
                <h6>workname: 風景画</h6>
                <h6>status: 未完成</h6>
                <h6>date: 2018.7.21</h6>
            </div>
            <div class="col-md-4"><img alt="Vue logo" src="data:image/jpeg;base64,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" class="money"><br>
                <h6>workname: 石膏デッサン</h6>
                <h6>status: 未完成</h6>
                <h6>date: 2018.3.21</h6>
            </div>
            
        </div>
    </div>
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
</style>