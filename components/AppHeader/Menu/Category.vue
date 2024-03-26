<template>
    <div class="flex flex-col w-48">
        <NuxtLink :to="'/good_cate/'+goodCate.id" v-for="goodCate in goodCates.result" :id="goodCate.id">{{ goodCate.goodName }}</NuxtLink>
    </div>
</template>
<script setup>
    const { data: goodCates } = await useFetch('http://localhost:3000/api/goods-category');
</script>