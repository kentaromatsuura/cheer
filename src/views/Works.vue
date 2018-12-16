<template>
  <div>
  <h3>My Favorite Works</h3>
  <!-- <carousel> -->
    <carousel v-bind:autoplay="true"  v-bind:loop="true">
   <slide>
       <figure class="snip1382">
           <img src="https://afremov.com/images/product/image_473.jpeg" alt="sample99" />
           <figcaption>
               <h2>RAIN IMPRESSION</h2>
               <p>We are used to associate rain with fresh and chilly colors – blue, green, silver, violet… But who said the palette of rain should be limited to just one end of the spectrum?</p>
           </figcaption>
       </figure>
  </slide>
  <slide>
       <figure class="snip1382">
           <img src="http://kenpaintings.com/12x16/12x16-111209-farm-hills.jpg" alt="sample99" />
           <figcaption>
               <h2>FARM HILLS</h2>
               <p>Original Seascape Impression Oil Painting from KenPaintings.com Online Gallery. Home of Artist Kenneth John , Ken paints coastal seascape, landscape and still life oil paintings in a range from art realism to impression to expression. Raised on the central east coast of Florida, many of Ken's paintings are in the Florida Art Highwaymen style.</p>
           </figcaption>
       </figure>
  </slide>
  <slide>
       <figure class="snip1382">
           <img src="http://farm3.static.flickr.com/2726/5702109330_32473e5ed8.jpg" alt="sample99" />
           <figcaption>
               <h2>Sample</h2>
               <p>sample</p>
           </figcaption>
       </figure>
  </slide>
   <slide>
       <figure class="snip1382">
           <img src="https://d1f5hsy4d47upe.cloudfront.net/d5/d584fcd1e55442439b28dd120d22897b_t.jpeg" alt="sample99" />
           <figcaption>
               <h2>Sample</h2>
               <p>sample</p>
           </figcaption>
       </figure>
  </slide>
  <slide>
       <figure class="snip1382">
           <img src="http://2.bp.blogspot.com/-kKfCwmtxpvM/UxLoQckHGsI/AAAAAAAAAiU/j21n-ovWv0A/s1600/imgb3a62feczikezj.jpeg" alt="sample99" />
           <figcaption>
               <h2>Sample</h2>
               <p>sample</p>
           </figcaption>
       </figure>
  </slide>
  <slide>
       <figure class="snip1382">
           <img src="http://oldfashioned.cocolog-nifty.com/blog/images/2012/11/09/classe_de_danse.jpg" alt="sample99" />
           <figcaption>
               <h2>Sample</h2>
               <p>sample</p>
           </figcaption>
       </figure>
  </slide>
  <slide>
       <figure class="snip1382">
           <img src="https://assets.media-platform.com/cafeglobe/dist/images/2017/12/20171222_audrey_top-w960.jpg" alt="sample99" />
           <figcaption>
               <h2>Sample</h2>
               <p>sample</p>
           </figcaption>
       </figure>
  </slide>
  <slide>
       <figure class="snip1382">
           <img src="https://pickup.cinemacafe.net/uploads/article/image/47/card_283058.jpg" alt="sample99" />
           <figcaption>
               <h2>Sample</h2>
               <p>sample</p>
           </figcaption>
       </figure>
  </slide>
  <slide>
       <figure class="snip1382">
           <img src="https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fwizardsandwhatnot.com%2Ffiles%2F2015%2F11%2FHarry-Potter-books.jpg&c=sc&w=850&h=560" alt="sample99" />
           <figcaption>
               <h2>Sample</h2>
               <p>sample</p>
           </figcaption>
       </figure>
  </slide>
  <slide>
       <figure class="snip1382">
           <img src="https://s3-ap-northeast-1.amazonaws.com/tabi-channel/upload_by_admin/sheikh_zayed_mosque_image_800" alt="sample99" />
           <figcaption>
               <h2>Sample</h2>
               <p>sample</p>
           </figcaption>
       </figure>
  </slide>
  <slide>
       <figure class="snip1382">
           <img src="http://img-cdn.guide.travel.co.jp/article/962/26377/29D974343D484C6DB9E246337CCBE51F_LL.jpg" alt="sample99" />
           <figcaption>
               <h2>Sample</h2>
               <p>sample</p>
           </figcaption>
       </figure>
  </slide>
  </carousel>
  <router-link :to="`/Artistpage/${user.id}`">Back</router-link>
  </div>
</template>



<script>
import { Carousel, Slide } from 'vue-carousel';
import UserListElement from "./UserListElement.vue";
import api from "@/api";
export default {
    name: "Users",
    components: {
    Carousel,
    UserListElement,
    Slide
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

   @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,500,900);
   @import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
   figure.snip1382 {
       font-family: 'Source Sans Pro', Arial, sans-serif;
       position: relative;
       overflow: hidden;
       margin: auto;
       min-width: 300px;
       max-width: 455px;
       max-height: 360px;
       width: 100%;
       color: #ffffff;
       text-align: center;
       font-size: 16px;
   }
   figure.snip1382 * {
       -webkit-box-sizing: border-box;
       box-sizing: border-box;
       -webkit-transition: all 0.35s ease;
       transition: all 0.35s ease;
   }
   figure.snip1382 img {
       max-width: 100%;
   }
   figure.snip1382:after,
   figure.snip1382:before,
   figure.snip1382 figcaption:after,
   figure.snip1382 figcaption:before {
       background: #0a0a0a;
       height: 25%;
       position: absolute;
       content: '';
       opacity: 0;
       -webkit-transition: all 0.35s steps(4);
       transition: all 0.35s steps(4);
       z-index: 1;
       left: 50%;
       right: 50%;
   }
   figure.snip1382:before {
       top: 0;
       -webkit-transition-delay: 0;
       transition-delay: 0;
   }
   figure.snip1382:after {
       top: 25%;
       -webkit-transition-delay: 0.1s;
       transition-delay: 0.1s;
   }
   figure.snip1382 figcaption:before {
       top: 50%;
       -webkit-transition-delay: 0.2s;
       transition-delay: 0.2s;
       z-index: -1;
   }
   figure.snip1382 figcaption:after {
top: 75%;
       -webkit-transition-delay: 0.3s;
       transition-delay: 0.3s;
       z-index: -1;
   }
   figure.snip1382 figcaption {
       position: absolute;
       top: 0;
       bottom: 0;
       left: 0;
       right: 0;
       z-index: 2;
       padding: 30px;
   }
   figure.snip1382 h2,
   figure.snip1382 p,
   figure.snip1382 .icons {
       margin: 0;
       width: 100%;
       opacity: 0;
   }
   figure.snip1382 h2 {
       font-weight: 900;
       text-transform: uppercase;
   }
   figure.snip1382 p {
       font-weight: 300;
   }
   figure.snip1382 .icons {
       position: absolute;
       bottom: 30px;
       left: 0;
       width: 100%;
   }
   figure.snip1382 i {
       padding: 0px 10px;
       display: inline-block;
       font-size: 24px;
       color: #ffffff;
       text-align: center;
       opacity: 0.8;
       text-decoration: none;
   }
   figure.snip1382 i:hover {
       opacity: 1;
   }
   figure.snip1382:hover:after,
   figure.snip1382.hover:after,
   figure.snip1382:hover:before,
   figure.snip1382.hover:before,
   figure.snip1382:hover figcaption:after,
   figure.snip1382.hover figcaption:after,
   figure.snip1382:hover figcaption:before,
   figure.snip1382.hover figcaption:before {
       left: 0;
       right: 0;
       opacity: 0.8;
   }
   figure.snip1382:hover figcaption h2,
   figure.snip1382.hover figcaption h2,
   figure.snip1382:hover figcaption p,
   figure.snip1382.hover figcaption p,
   figure.snip1382:hover figcaption .icons,
   figure.snip1382.hover figcaption .icons {
       -webkit-transition-delay: 0.25s;
       transition-delay: 0.25s;
   }
   figure.snip1382:hover figcaption h2,
   figure.snip1382.hover figcaption h2,
   figure.snip1382:hover figcaption .icons,
   figure.snip1382.hover figcaption .icons {
       opacity: 1;
   }
   figure.snip1382:hover figcaption p,
   figure.snip1382.hover figcaption p {
       opacity: 0.7;
   }
   .works {
       margin: auto;
   }
   .snip1382 {
    position: relative;
    margin:auto;
   }
   h3 {
       font-size: 60px;
   }
</style>