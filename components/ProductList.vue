<template>
    <div>
        <h1>ProductList</h1>
        <ul>
            <li v-for="item in products" :key="item">{{ item }}</li>
        </ul>
        <v-btn color="success">text</v-btn>

    </div>
</template>

<script>
export default {

    data: () => {
        return {
            products: [1,2,3,4,5]
        }
    }

}
</script>

<style>

</style>