<template>
    <div class="bg-white flex p-4 border-b border-gray-300">
        <div class="p-2 uppercase text-sm text-amber-400 border border-amber-400 rounded-lg font-semibold ">Sản phẩm bán chạy</div>
        <div class="p-2 ml-4 uppercase text-sm">Giày hot - giảm sốc</div>
        <div class="p-2 ml-4 uppercase text-sm">Bộ sưu tập mùa hè</div>
    </div>
    <div class="flex bg-white flex-col">
        <div class="flex flex-wrap">
            <div class="w-1/5 p-4 flex flex-col justify-between hover:shadow-md" v-for="product in products.result" :id="product.id">
                <ItemTrending :product="product" />
            </div>
        </div>
        <NuxtLink to="/trending" class="px-5 py-2 w-2/12 rounded text-center mx-auto mt-4 hover:text-amber-400 hover:bg-gray-800 font-semibold mb-5 bg-amber-400 text-gray-800">
            Xem thêm
        </NuxtLink>
    </div>
</template>
<script setup>
const config = useRuntimeConfig();
const { data: products } = await useFetch('/products', {
    baseURL: config.public.apiBase,
    method: 'GET',
    query: {
        trending: true,
        limit: 10
    }
})
</script>