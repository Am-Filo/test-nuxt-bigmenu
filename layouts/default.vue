<template>
  <v-app>

    <Header1 title="lami-site"></Header1>
    
    <v-sheet no-gutters
      id="scrolling-techniques-7"
      class="overflow-y-auto mt-15"
    >
      <nuxt />
    </v-sheet>

  </v-app>
</template>

<script>

import Header1 from "@/components/header/Header1.vue"

export default {
  data: () => {
    return {
      // title: "My Site"
    }
  },
  components: {
    Header1
  }
}
</script>

<style lang="scss" scoped>
  .mt-15{
    margin-top: 64px !important;
  }
</style>

