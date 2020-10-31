<template>
    <v-app-bar
        absolute
        color="white"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
        hide-on-scroll 
        class="z100 ow-h"
    >
    
    <v-col cols="1" class="mr-10 p-0">
        <a href="/">
            <v-img src="https://cdn.shopify.com/s/files/1/1064/7156/t/15/assets/logo.png?1775" alt="John" contain aspect-ratio="1.4"></v-img>
        </a>
    </v-col>

    <Menu1></Menu1>

    <v-spacer></v-spacer>

    <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
    </v-btn>

    </v-app-bar>
</template>

<script>

import Menu1 from './menu/Menu1.vue'
//import MenuHight from './menu/Menu-high.vue'

export default {
    inject: ['theme'],
    props: {
        'menu': {
            type: Object,
            //required: true
        },
        'title': {
            type: String,
            //required: true
        }
    },
    components: {
        Menu1
    }
}
</script>

<style lang="scss" scoped>
  .z100 {
    z-index: 100;
  }
  .p-0{
      padding: 0;
  }
  .ow-h{
      overflow: hidden;
  }
</style>