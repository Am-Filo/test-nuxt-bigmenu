<template>

    <v-row no-gutters>
        <v-img v-if="content.type === 'bg-image' && content.image" :aspect-ratio="16/5" :src="content.image">
            <v-row no-gutters align="center" class="lightbox white--text fill-height">
                <v-col>
                    <div class="subheading">{{ content.title }}</div>
                    <div v-html="content.text" class="body-1"></div>
                </v-col>
            </v-row>
        </v-img>
    </v-row>

</template>

<script>
export default {
    props: ['content'],

}
</script>

<style>

</style>