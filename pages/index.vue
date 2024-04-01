<template>
  <!-- slider -->
  <AppSlideHeader />
  <!-- Feature -->
  <AppFeature />
  <!-- category -->
  <!-- <AppCategoryHeader /> -->
  <!-- flash sale -->
  <AppFlashsale />
  <!-- danh muc -->
  <div class="flex mt-4 flex-col p-4 border-t border-dashed border-green-300">
    <div class="flex justify-center items-center text-2xl text-green-600 uppercase gap-2 font-semibold">
      <IconMenu />
      Danh mục sản phẩm
    </div>
    <div class="flex flex-wrap w-5/6 mx-auto">
      <NuxtLink :to="'/good_cate/' + goodCate.id" class="w-1/12 flex flex-col items-center justify-between gap-2 hover:underline text-xl"
        v-for="goodCate in goodCates.result" :id="goodCate.id">
        <img :src="goodCate.picture" alt="" class="mx-auto max-h-24">
        <div class="text-center text-sm font-semibold">{{ goodCate.goodName }}</div>
      </NuxtLink>
    </div>
  </div>
  <!-- trending -->
  <AppTrending />

  <!-- category -->
  <AppCategoryIndex v-for="goodCate in goodCates.result" :goodCate="goodCate" />

</template>
<script setup>
const config = useRuntimeConfig();
const { data: goodCates } = await useFetch('/goods-category', {
  baseURL: config.public.apiBase
});

</script>