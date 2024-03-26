<template>
    <div class="bg-white flex p-4 border-b border-gray-300">
        <div class="text-amber-400 p-2 border border-amber-400 rounded-lg font-semibold uppercase text-sm">Sản phẩm bán chạy</div>
        <div class="p-2 ml-4 uppercase text-sm">Giày hot - giảm sốc</div>
        <div class="p-2 ml-4 uppercase text-sm">Bộ sưu tập mùa hè</div>
    </div>
    <div class="flex bg-white flex-col">
        <div class="flex flex-wrap">
            <div class="w-1/5" v-for="product in products.result" :id="product.id">
                <ItemTrending :product="product" />
            </div>
        </div>
        <div class="px-5 py-2 bg-gray-800 w-2/12 rounded-full text-center mx-auto mt-4 text-amber-400 font-semibold mb-5 hover:bg-amber-400 hover:text-gray-800">
            Xem thêm</div>
    </div>
</template>
<script setup>
const { data: products } = await useFetch('http://localhost:3000/api/products', {
    method: 'GET',
    query: {
        trending: true,
        limit: 10
    }
})
</script>