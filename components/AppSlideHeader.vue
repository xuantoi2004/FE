<template>
    <div class="flex relative carousel">
        <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <img src="/img/banner/banner-fuji-1.jpg" alt="">
            <img src="/img/banner/banner-fuji-2.jpg" alt="">
            <img src="/img/banner/banner-fuji-3.jpg" alt="">
        </div>
        <div class="absolute bottom-0 left-0 right-0 top-0 flex justify-between">
            <button @click="prev()">
                <IconLeft class="text-green-600" />
            </button>
            <button @click="next()">
                <IconRight class="text-green-600" />
            </button>
        </div>
    </div>
</template>

<script setup>
const currentIndex = ref(0);

const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + 3) % 3
}

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % 3
}

defineExpose({
    prev,
    next,
})
</script>

<style scoped>
.carousel {
    width: 100%;
    height: 600px;
    overflow: hidden;
}

.carousel .slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 300%;
}

.carousel .slides > * {
    flex: 1 0 auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.carousel button {
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    padding: 0 10px;
}
</style>