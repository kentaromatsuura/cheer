<template>
   <div>
   <h3>影響を与えた作品</h3>
   <carousel>
   <slide>
       <h4><img alt="Vue logo" src="https://photosku.com/images_file/small_images/s005_046.jpg" class="money"></h4>
       <br>Slide 1 Content
   </slide>
   <slide>
       <h4><img alt="Vue logo" src="https://d1f5hsy4d47upe.cloudfront.net/8c/8c1a69c50533d932d3b8fcafecadc30f_t.jpeg" class="money"></h4>
       <br>Slide 2 Content
   </slide>
   <slide>
       <h4><img alt="Vue logo" src="http://farm3.static.flickr.com/2726/5702109330_32473e5ed8.jpg" class="money"></h4>
       <br>Slide 3 Content
   </slide>
   <slide>
       <h4><img alt="Vue logo" src="http://www.hc.keio.ac.jp/ja/hiyoshi_campus/bits/9esamb0000000pk7-img/akikusamonko_1.jpg" class="money"></h4>
       <br>Slide 4 Content
   </slide>
   <slide>
       <h4><img alt="Vue logo" src="https://d1f5hsy4d47upe.cloudfront.net/d5/d584fcd1e55442439b28dd120d22897b_t.jpeg" class="money"></h4>
       <br>Slide 5 Content
   </slide>
   <slide>
       <h4><img alt="Vue logo" src="https://secure02.blue.shared-server.net/www.sebiji.com/goods_image/A53_I3.jpg" class="money"></h4>
       <br>Slide 6 Content
   </slide>
   </carousel>
   </div>
</template>



<script>
import { Carousel, Slide } from 'vue-carousel';
export default {

 components: {
   Carousel,
   Slide
 }

};


</script>

<style>
h4 {
   height: 380px;
}
</style>