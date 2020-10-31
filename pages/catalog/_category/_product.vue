<template>
  <v-container>
    <h1>Отдельный продукт</h1>

    <v-card>
      <v-card-title primary-title>
        {{ this.$route.params.product }}
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  validate({ params }) {
    return params.product;
  }
};
</script>

<style></style>
