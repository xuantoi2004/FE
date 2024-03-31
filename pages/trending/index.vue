<template>
    <div class="flex my-3 text-sm items-center gap-x-3">
        <NuxtLink to="/" class="uppercase flex items-center gap-x-2">
            <IconHome /> Trang Chủ
        </NuxtLink> &rArr; SẢN PHẨM NỔI BẬT
    </div>
    <div class="bg-white flex p-4 border-b border-gray-300">
        <div class="p-2 uppercase text-sm text-amber-400 border border-amber-400 rounded-lg font-semibold ">Sản phẩm bán
            chạy</div>
        <div class="p-2 ml-4 uppercase text-sm">Giày hot - giảm sốc</div>
        <div class="p-2 ml-4 uppercase text-sm">Bộ sưu tập mùa hè</div>
    </div>
    <div class="flex">
        <div class="w-full bg-white flex flex-col p-4 shadow-sm">
            <div class="border-b border-gray-300 pb-4 mb-2 px-2">
                Sắp xếp theo:
                <select name="" id="" class="border rounded-lg px-5 py-2 mr-2">
                    <option value="">
                        Bán Chạy Tuần
                    </option>
                </select>
                <select name="" id="" class="border rounded-lg px-5 py-2">
                    <option value="">
                        24 sản phẩm
                    </option>
                </select>
            </div>
            <div class="flex bg-white flex-col">
                <div class="flex flex-wrap">
                    <div class="w-1/5 p-4 flex flex-col justify-between hover:shadow-md"
                        v-for="product in products.result" :id="product.id">
                        <ItemTrending :product="product" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const config = useRuntimeConfig();

const { data: products } = await useFetch('/products', {
    baseURL: config.public.apiBase,
    method: 'GET',
    query: {
        trending: true,
        limit: 24
    }
})
</script>