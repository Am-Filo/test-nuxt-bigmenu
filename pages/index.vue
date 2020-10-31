<template>

  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col
        v-for="(item,index) in page"
        :key="index"
        :cols="item.grid.flex"
        :sm="item.grid.sm"
        :md="item.grid.md"
        :class="'pa-'+item.style.padding"
      >

        <Slider1 v-if="item.type === 'slider'" :slider="item.content"></Slider1>
        <Text1 v-if="item.type === 'text-block'" :content="item.content"></Text1>

      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import Slider1 from "@/components/slider/Slider1.vue";
import Text1 from "@/components/text/Text.vue";

export default {
  data: () => {
    return {
      page:[
        {type: 'slider', grid: {flex: 12, sm: 12, md: 12}, style: {padding: '0'}, content: {height: '600px', slides: [
          {type: 'bg-image', image: 'https://cdn.shopify.com/s/files/1/0238/2821/files/190416_HP_Secondary-hero_royale-blanco_desktop_906878de-89d4-40f0-a8dd-fdf3197ed671.jpeg?', info: {title: {text: 'First Slide Title', style: 'display-3 red accent-4'}, content: {text: 'text for first slide is important thing<br>in our life', style: 'body-1 blue accent-2'}, buttons:[
            {title: "Let's shop now", link: '/shop', style: {bgColor: 'orange', tColor: 'black'}},
            {title: "For woman", link: '/shop/woman', style: {bgColor: 'pink', tColor: 'white'}},
            {title: "For man", link: '/shop/man', style: {bgColor: 'blue', tColor: 'white'}}
          ]}},
          {type: 'bg-image', image: 'https://cdn.shopify.com/s/files/1/0238/2821/files/191102-Mens-Ash-Secondary-Carousel-DesktopCOMP.jpg', info: {title: {text: 'First Slide Title', style: 'display-3 red accent-4'}, content: {text: 'text for first slide is important thing<br>in our life', style: 'body-1 blue accent-2'}, buttons:[
            {title: "Let's shop now", link: '/shop', style: {bgColor: 'orange', tColor: 'black'}},
            {title: "For woman", link: '/shop/woman', style: {bgColor: 'pink', tColor: 'white'}},
            {title: "For man", link: '/shop/man', style: {bgColor: 'blue', tColor: 'white'}}
          ]}},
          {type: 'bg-color', color: 'deep-purple accent-4', info: {title: {text: 'Secont Slide Title', style: 'display-3 purple accent-1'}, content: {text: 'text for second slide is important thing<br>in our life', style: 'body-2 grey accent-2'}, buttons:[
            {title: "Go plane?", link: '/about', style: {bgColor: 'blue', tColor: 'white'}}
          ]}},
          {type: 'bg-image', image: 'https://cdn.shopify.com/s/files/1/0238/2821/files/Timex-Watch-desktopCOMP.jpg', info: {title: {text: 'First Slide Title', style: 'display-1 grey accent-4'}, content: {text: 'text for third slide is important thing<br>in our life', style: 'body-2 green accent-3'}, buttons:[
            {title: "Get my sale", link: '/shop/man?sale=top', style: {bgColor: 'red', tColor: 'white'}},
            {title: "Man shop", link: '/shop/man', style: {bgColor: 'blue', tColor: 'white'}}
          ]}},
          {type: 'bg-image', image: 'https://cdn.shopify.com/s/files/1/0238/2821/files/Holiday-Gift-Guide-Secondary-Carousel-Desktop.jpg', info: {title: {text: 'First Slide Title', style: 'display-1 grey accent-4'}, content: {text: 'text for third slide is important thing<br>in our life', style: 'body-2 green accent-3'}, buttons:[
            {title: "Get my sale", link: '/shop/man?sale=top', style: {bgColor: 'red', tColor: 'white'}},
            {title: "Man shop", link: '/shop/man', style: {bgColor: 'blue', tColor: 'white'}}
          ]}},
        ]}},
        {type: 'text-block', grid: {flex: 12, sm: 12, md: 12}, style: {padding: '0'}, content: {type: 'bg-image', image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg', title: 'Pre-fab homes', text: '<small>html text</small><br>you can use', style: {height: '300px'}}},
        {type: 'text-block', grid: {flex: 12, sm: 6, md: 6}, style: {padding: '0'}, content: {type: 'bg-image', image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg', title: 'Favorite road trips', text: '<small>html text</small><br>you can use', style: {height: '300px'}}},
        {type: 'text-block', grid: {flex: 12, sm: 6, md: 6}, style: {padding: '0'}, content: {type: 'bg-image', image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg', title: 'Best airlines', text: '<small>html text</small><br>you can use', style: {height: '300px'}}},
        {type: 'slider', grid: {flex: 12, sm: 6, md: 6}, style: {padding: '0'}, content: {height: '263px', slides: [
          {type: 'bg-image', image: 'https://cdn.shopify.com/s/files/1/0238/2821/files/190416_HP_Secondary-hero_royale-blanco_desktop_906878de-89d4-40f0-a8dd-fdf3197ed671.jpeg?', info: {title: {text: 'First Slide Title', style: 'display-3 red accent-4'}, content: {text: 'text for first slide is important thing<br>in our life', style: 'body-1 blue accent-2'}, buttons:[
            {title: "Let's shop now", link: '/shop', style: {bgColor: 'orange', tColor: 'black'}},
            {title: "For woman", link: '/shop/woman', style: {bgColor: 'pink', tColor: 'white'}},
            {title: "For man", link: '/shop/man', style: {bgColor: 'blue', tColor: 'white'}}
          ]}},
          {type: 'bg-image', image: 'https://cdn.shopify.com/s/files/1/0238/2821/files/191102-Mens-Ash-Secondary-Carousel-DesktopCOMP.jpg', info: {title: {text: 'First Slide Title', style: 'display-3 red accent-4'}, content: {text: 'text for first slide is important thing<br>in our life', style: 'body-1 blue accent-2'}, buttons:[
            {title: "Let's shop now", link: '/shop', style: {bgColor: 'orange', tColor: 'black'}},
            {title: "For woman", link: '/shop/woman', style: {bgColor: 'pink', tColor: 'white'}},
            {title: "For man", link: '/shop/man', style: {bgColor: 'blue', tColor: 'white'}}
          ]}},
          {type: 'bg-color', color: 'deep-purple accent-4', info: {title: {text: 'Secont Slide Title', style: 'display-3 purple accent-1'}, content: {text: 'text for second slide is important thing<br>in our life', style: 'body-2 grey accent-2'}, buttons:[
            {title: "Go plane?", link: '/about', style: {bgColor: 'blue', tColor: 'white'}}
          ]}},
          {type: 'bg-image', image: 'https://cdn.shopify.com/s/files/1/0238/2821/files/Timex-Watch-desktopCOMP.jpg', info: {title: {text: 'First Slide Title', style: 'display-1 grey accent-4'}, content: {text: 'text for third slide is important thing<br>in our life', style: 'body-2 green accent-3'}, buttons:[
            {title: "Get my sale", link: '/shop/man?sale=top', style: {bgColor: 'red', tColor: 'white'}},
            {title: "Man shop", link: '/shop/man', style: {bgColor: 'blue', tColor: 'white'}}
          ]}},
          {type: 'bg-image', image: 'https://cdn.shopify.com/s/files/1/0238/2821/files/Holiday-Gift-Guide-Secondary-Carousel-Desktop.jpg', info: {title: {text: 'First Slide Title', style: 'display-1 grey accent-4'}, content: {text: 'text for third slide is important thing<br>in our life', style: 'body-2 green accent-3'}, buttons:[
            {title: "Get my sale", link: '/shop/man?sale=top', style: {bgColor: 'red', tColor: 'white'}},
            {title: "Man shop", link: '/shop/man', style: {bgColor: 'blue', tColor: 'white'}}
          ]}},
        ]}},
        {type: 'text-block', grid: {flex: 12, sm: 6, md: 6}, style: {padding: '0'}, content: {type: 'bg-image', image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg', title: 'Best airlines', text: '<small>html text</small><br>you can use', style: {height: '300px'}}},
        {type: 'text-block', grid: {flex: 12, sm: 12, md: 12}, style: {padding: '0'}, content: {type: 'bg-image', image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg', title: 'Best airlines', text: '<small>html text</small><br>you can use', style: {height: '300px'}}},
      ],
    }
  },
  components: {
    Slider1,
    Text1
  }
};
</script>

<style scoped>
  .container {
    /* min-height: 100vh; */
    min-height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>

