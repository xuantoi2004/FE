<template>
    <div class="flex flex-col mt-4 border-t border-dashed border-green-300 gap-2">
        <div class="w-5/6 mx-auto">
            <div class="font-bold p-4 uppercase text-green-600 flex items-center gap-2 hover:underline">
                <IconStore />
                <NuxtLink :to="'/good_cate/' + goodCate.id">Mặt hàng: {{ goodCate.goodName }}</NuxtLink>
            </div>
            <div class="flex border-gray-300 pb-4">
                <div class="flex py-2 px-8 items-center">
                    <NuxtLink :to="'/category/' + category.id"
                        class="mr-4 px-4 py-2 first:text-green-500 first:border-green-500 first:border first:rounded-lg hover:shadow-md"
                        v-for="category in categories.result" :id="category.id">{{ category.categoryName }}</NuxtLink>
                </div>
            </div>
        </div>
        <div class="border-t border-green-200">
            <div class="flex w-5/6 mx-auto">
                <div class="pl-8 w-1/3">
                    <NuxtLink :to="'/good_cate/' + goodCate.id"><img :src="goodCate.picture"
                            class="h-80 border-r border-green-200 w-full" alt=""></NuxtLink>
                </div>
                <div class="w-2/3 flex flex-col">
                    <div class="flex flex-wrap">
                        <ItemCategoryIndex v-for="category in categories.result" :id="category.id"
                            :category="category" />
                    </div>
                    <NuxtLink :to="'/good_cate/' + goodCate.id"
                        class="px-5 py-2 w-2/12 rounded text-center mx-auto mt-4 hover:text-green-300 font-semibold mb-5 bg-green-600 text-white hover:shadow-md">
                        Xem Thêm
                    </NuxtLink>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
const config = useRuntimeConfig();
const props = defineProps({
    goodCate: {
        type: Object,
        required: true
    }
})

const goodCate = ref(props.goodCate);

const { data: categories } = await useFetch('/category/', {
    baseURL: config.public.apiBase,
    method: 'GET',
    query: {
        goodCateId: goodCate.value.id
    }
});

</script>