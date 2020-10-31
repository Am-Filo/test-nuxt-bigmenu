<template>
    <v-toolbar-items>

        <div class="v-toolbar__items" v-for="(item, index) in menu" :key="index">

            <v-btn v-if="!item.child" :to="item.link" text>{{ item.title }}</v-btn>
            <v-menu
                v-else
                open-on-hover
                eager
                :close-on-content-click="false"
                left
                max-width="100%"
                offset-y
                z-index="999"
            >
                <template v-slot:activator="{ on }">
                    <v-btn v-on="on" text>
                        {{ item.title }}
                    </v-btn>
                </template>

                <MenuChild  :menu="item.child"></MenuChild>
            </v-menu>
            
        </div>

    </v-toolbar-items>
</template>

<script>

import MenuChild from './components/Menu1-child.vue'

export default {
    data: () => {
        return {
            menu: [
                {title: 'Shop', link: '/shop', child: [
                        {title: 'Man', icon: "human-male", link: '/shop/man', badge: '7', child: [
                                {title: 'T-Shirts', link: '/shop/man/t-shirts'},
                                {title: 'Boots', link: '/shop/man/boots'},
                                {title: 'Hoodey', link: '/shop/man/hoodey'},
                                {title: 'Hats', link: '/shop/man/hats'},
                                {title: 'Bottom', link: '/shop/man/bottom'},
                                {title: 'Hats', link: '/shop/man/hats'},
                                {title: 'Hats', link: '/shop/man/hats'},
                            ]
                        },
                        {title: 'Woman', icon: "human-female", link: '/shop/woman'},
                        {title: 'Bags', icon: "bag-checked", link: '/shop/bags'},
                        {title: 'Accessors', icon: "sunglasses", link: '/shop/accessors'},
                        {title: 'Accessors', icon: "sunglasses", link: '/shop/accessors'},
                        {title: 'Accessors', icon: "sunglasses", link: '/shop/accessors'},
                        {title: 'Accessors', icon: "sunglasses", link: '/shop/accessors'},
                        {title: 'Accessors', icon: "sunglasses", link: '/shop/accessors'},
                        {title: 'Accessors', icon: "sunglasses", link: '/shop/accessors'},
                        {title: 'Accessors', icon: "sunglasses", link: '/shop/accessors'},
                        {title: 'Accessors', icon: "sunglasses", link: '/shop/accessors'},
                        {title: 'Accessors', icon: "sunglasses", link: '/shop/accessors'},
                        {title: 'Accessors', icon: "sunglasses", link: '/shop/accessors'},
                        {title: 'Accessors', icon: "sunglasses", link: '/shop/accessors'},
                        {title: 'Accessors', icon: "sunglasses", link: '/shop/accessors'},
                        {title: 'Accessors', icon: "sunglasses", link: '/shop/accessors'},
                        {title: 'Accessors', icon: "sunglasses", link: '/shop/accessors'},
                        {title: 'Accessors', icon: "sunglasses", link: '/shop/accessors'},
                        {title: 'Accessors', icon: "sunglasses", link: '/shop/accessors'},
                    ]
                },
                {title: 'About', link: '/about'},
                {title: 'Blog', link: '/blog'},
                {title: 'Visit us', link: '/contacts'}
            ]
        }
    },
    components: {
        MenuChild
    },
    methods: {
        menuTrigger(){
            
        }
    }
}
</script>

<style lang="scss" scoped>
    // .v-toolbar__items_btn{
    //     display: flex;
    //     height: 100%;
    //     align-items: center;
    // }

    .v-menu__content{
        right: 12px;
    }
</style>