<template>
    <div class="picture" ref="picture" @resize="getWidthPicture">
        <img
            class="picture__img"
            :src="src">
    </div>
</template>

<script>
export default {
    name: "Picture",
    props: {
        src: {
            type: String,
            default: '',
        },
    },
    methods: {
        getWidthPicture(e) {
            this.$emit('width', e)
        }
    }
}
</script>

<style lang="scss" scoped>
    .picture {
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 30%;
        max-height: 1000px;
        height: fit-content;
        margin: 10px;

        @media (max-width: 767px) {
            max-width: 100%;
        }

    }
    .picture__img {
        max-width: 100%;
        object-fit: contain;
    }
</style>