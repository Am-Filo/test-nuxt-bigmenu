<template>
    <v-carousel cycle :height="slider.height" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(slide, index) in slider.slides" :key="index">
    
            <v-sheet v-if="slide.type === 'bg-color'" :color="slide.color" height="100%">
                <v-row class="fill-height" align="center" justify="center" no-gutters>
                    <div :class="slide.info.title.style ? slide.info.title.style : 'display-2'">{{ slide.info.title.text }}</div>
                    <div :class="slide.info.content.style ? slide.info.content.style : 'body-1'" v-html="slide.info.content.text"></div>
                </v-row>
            </v-sheet>

            <v-img v-if="slide.type === 'bg-image' && slide.image" :aspect-ratio="1" :src="slide.image" class="grey lighten-2" width="100%" height="100%">
                <v-row no-gutters align="center" class="lightbox white--text fill-height">
                    <v-col>
                        <div :class="slide.info.title.style ? slide.info.title.style : 'display-2'">{{ slide.info.title.text }}</div>
                        <div :class="slide.info.content.style ? slide.info.content.style : 'body-1'" class="mt-5" v-html="slide.info.content.text"></div>
                    </v-col>
                </v-row>
            </v-img>
            
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    props:['slider'],
    data: () => {
        return {
            // data
        }
    },
}
</script>

<style>

</style>