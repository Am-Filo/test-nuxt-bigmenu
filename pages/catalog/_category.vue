<template>
  <nuxt-child>
    <h1>Отдельная категория</h1>
    <v-card>
      <v-card-title primary-title>
        {{ this.$route.params.category }}
      </v-card-title>
    </v-card>
  </nuxt-child>
</template>

<script>
export default {
  validate({ params }) {
    return params.category;
  }
};
</script>

<style></style>
