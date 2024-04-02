<template>
    <!-- <div class="bg-white flex p-4 border-b border-gray-300">
        <div class="p-2 uppercase text-sm text-amber-400 border border-amber-400 rounded-lg font-semibold ">Sản phẩm bán chạy</div>
        <div class="p-2 ml-4 uppercase text-sm">Giày hot - giảm sốc</div>
        <div class="p-2 ml-4 uppercase text-sm">Bộ sưu tập mùa hè</div>
    </div> -->
    <div class="flex flex-col w-5/6 mx-auto">
        <div class="flex flex-wrap gap-2">
            <div class="w-1/5 p-4 flex flex-col justify-between border rounded hover:shadow-md" v-for="product in products.result" :id="product.id">
                <ItemTrending :product="product" />
            </div>
        </div>
        <NuxtLink to="/trending" class="px-5 py-2 w-2/12 rounded text-center mx-auto mt-4 hover:text-green-300 font-semibold mb-5 bg-green-600 text-white hover:shadow-md">
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