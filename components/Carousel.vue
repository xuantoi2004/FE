<template>
    <div class="relative carousel">
        <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <slot />
        </div>
        <div class="absolute bottom-0 left-0 right-0 flex justify-between">
            <button @click="prev()">
                <IconLeft class="text-red-500" />
            </button>
            <button @click="next()">
                <IconRight class="text-red-500" />
            </button>
        </div>
    </div>
</template>

<script setup>

const currentIndex = ref(1);
const slides = ref([]);

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
    height: 400px;
}

.carousel .slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel .slides>* {
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