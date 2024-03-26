<template>
    <div class="flex bg-white shadow-lg text-gray-500 font-semibold p-4 rounded gap-x-3">
        <div class="bg-red-300 last:bg-red-500 text-white px-2 py-0.5 rounded-lg capitalize" v-for="item in itemBreadCrums">
            {{ item }}</div>
    </div>
</template>
<script setup>
const route = useRoute();

const itemBreadCrums = ref(route.name.split('-'))
if (itemBreadCrums.value[itemBreadCrums.value.length - 1] == 'id')
    itemBreadCrums.value.pop()
</script>