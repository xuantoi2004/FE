<template>
    <div class="bg-slate-50 py-2.5">
        <div class="w-5/6 mx-auto">
            <div class="flex my-3 text-sm items-center gap-x-3">
                <NuxtLink to="/" class="uppercase flex items-center gap-x-2">
                    <IconHome /> Trang Chủ
                </NuxtLink> &rArr; <span class="uppercase">Tất cả sản phẩm</span>
            </div>
            <div class="flex">
                <div class="w-2/12 bg-white p-4 shadow-sm">
                    <div class="border-b border-gray-300 flex flex-col pb-2">
                        <div class="font-bold text-sm uppercase">Danh mục</div>
                        <div class="p-2" v-for="goodCate in goodCates.result">
                            <NuxtLink :to="`/good_cate/${goodCate.id}`">{{ goodCate.goodName }}</NuxtLink>
                        </div>
                    </div>

                </div>
                <div class="w-10/12 bg-white flex flex-col ml-2 p-4 shadow-sm">
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
                    <div class="flex flex-wrap">
                        <div class="w-1/4 flex flex-col" v-for="product in products.result" :id="product.id">
                            <ItemTrending :product="product" :isFlashSale="false" />
                        </div>
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
    method: 'GET'
})

const { data: goodCates } = await useFetch('/goods-category', {
    baseURL: config.public.apiBase,
    method: 'GET'
})
</script>