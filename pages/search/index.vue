<template>
    <div class="flex my-3 text-sm items-center gap-x-3">
        <NuxtLink to="/" class="uppercase flex items-center gap-x-2">
            <IconHome /> Trang Chủ
        </NuxtLink> &rArr; <span class="uppercase">Tìm kiếm: {{ route.query.name }}</span>
    </div>
    <div class="flex">
        <div class="w-full bg-white flex flex-col p-4 shadow-sm" v-if="products.result.length > 0">
            <div class="border-b border-gray-300 pb-4 mb-2 px-2">
                Sắp xếp theo:
                <select class="border rounded-lg px-5 py-2 mr-2">
                    <option value="">
                        Bán Chạy Tuần
                    </option>
                </select>
                <select class="border rounded-lg px-5 py-2" v-model="lengthProduct">
                    <option v-for="length in lengthArr" :value="length">
                        {{ length }} sản phẩm
                    </option>
                </select>
            </div>
            <div class="flex flex-wrap">
                <div class="w-1/4 flex flex-col" v-for="product in products.result" :id="product.id">
                    <ItemTrending :isFlashSale="false" :product="product" />
                </div>
            </div>
        </div>
        <div v-else class="w-full bg-white flex p-4 shadow-sm justify-center h-36 items-center font-bold gap-1">
            Không tìm thấy sản phẩm nào chứa từ khóa: <span class="text-red-500">{{ route.query.name }}</span>
        </div>
    </div>
</template>
<script setup>
const config = useRuntimeConfig();
const route = useRoute();
const lengthProduct = ref(24);
const lengthArr = ref([24,16,8,4,2]);

const { data: products } = await useFetch('/products', {
    baseURL: config.public.apiBase,
    method: 'GET',
    query: {
        name: route.query.name,
        limit: lengthProduct.value
    }
})

watch(() => route.query.name, async (newName) => {
    console.log(newName);
    const { data, pending, error } = await useFetch('/products', {
        baseURL: config.public.apiBase,
        method: 'GET',
        query: {
            name: newName,
            limit: lengthProduct.value
        }
    });
    products.value.result = data.value.result;
});

</script>