<template>

  <v-container>

    <v-card
    class="mx-auto"
    :max-width="100+'%'"
    tile
  >
    <v-list
      >
        <v-subheader>REPORTS</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(post, i) in posts"
            :key="i"
          >
            <v-list-item-avatar class="avatar-margin">
              <v-img :src='avatar' ></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="post.title"></v-list-item-title>
              <v-list-item-subtitle v-html="post.body"></v-list-item-subtitle>
            </v-list-item-content>
            <v-btn class="grey lighten-3 mr-4" icon to="catalog/post.title">
                <v-icon color="grey lighten-1">mdi-eye</v-icon>
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>

  </v-card>

  <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">{{setPost.title}}</v-card-title>
        <v-card-text>{{setPost.body}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>

</template>

<script>
export default {
  data () {
   return {
     avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
     dialog: false,
     setPost: {}
    }
  },
  async asyncData({ $axios }) {
    const posts = await $axios.$get('https://jsonplaceholder.typicode.com/posts')
    return { posts }
  },
  methods: {
    ViewAllPost(){
      this.dialog = true;
      //this.setPost = post;
    }
  }
}
</script>

<style>
.avatar-margin{
  margin-right: 10px;
}
</style>