<template>
    <div class="flex flex-col w-48">
        <NuxtLink :to="'/good_cate/' + goodCate.id" v-for="goodCate in goodCates.result" :id="goodCate.id">{{
            goodCate.goodName }}</NuxtLink>
    </div>
</template>
<script setup>
const config = useRuntimeConfig();
const { data: goodCates } = await useFetch('/goods-category', {
    baseURL: config.public.apiBase
});
</script>