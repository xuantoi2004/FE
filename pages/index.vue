<template>
  <!-- slider -->
  <AppSlideHeader />
  <!-- banner sale -->
  <!-- <div class="flex">
    <div class="w-3/12 p-2 pl-0"><img src="/img/banner/subbanner1.png" class="w-full" alt=""></div>
    <div class="w-3/12 p-2"><img src="/img/banner/subbanner2.png" class="w-full" alt=""></div>
    <div class="w-3/12 p-2"><img src="/img/banner/subbanner3.png" class="w-full" alt=""></div>
    <div class="w-3/12 p-2 pr-0"><img src="/img/banner/subbanner2.png" class="w-full" alt=""></div>
  </div> -->
  <!-- Feature -->
  <AppFeature />
  <!-- category -->
  <!-- <AppCategoryHeader /> -->
  <!-- flash sale -->
  <AppFlashsale />
  <!-- danh muc -->
  <div class="flex mt-4 flex-col bg-white p-4">
    <div class="flex border-b border-gray-200 pb-4 items-center gap-x-2">
      <IconMenu />
      <div class="font-bold uppercase">
        Danh mục
      </div>
    </div>
    <div class="flex mt-4 flex-wrap">
      <div class="w-1/12 flex flex-col items-center justify-between gap-y-2" v-for="goodCate in goodCates.result" :id="goodCate.id">
        <img :src="goodCate.picture" alt="" class="mx-auto max-h-24">
        <NuxtLink :to="'/good_cate/'+goodCate.id" class="text-center text-sm font-semibold">{{ goodCate.goodName }}</NuxtLink>
      </div>
    </div>
  </div>
  <!-- trending -->
  <AppTrending />

  <!-- category -->
  <AppCategoryIndex v-for="goodCate in goodCates.result" :goodCate="goodCate" />

  <div class="bg-gray-200 flex mt-4 p-4 justify-between items-center max-h-48">
    <div class="w-1/6"><img src="/img/banner/nike.png"></div>
    <div class="w-1/6"><img src="/img/banner/converse.png"></div>
    <div class="w-1/6"><img src="/img/banner/vans.png"></div>
    <div class="w-1/6"><img src="/img/banner/fila.png"></div>
    <div class="w-1/6"><img src="/img/banner/adidas.png"></div>
    <div class="w-1/6"><img src="/img/banner/puma.png"></div>
  </div>


</template>
<script setup>

const { data: goodCates } = await useFetch('http://localhost:3000/api/goods-category');

</script>
  