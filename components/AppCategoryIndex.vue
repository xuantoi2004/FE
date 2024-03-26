<template>
    <div class="flex flex-col bg-white mt-4">
        <div class="font-bold p-4 uppercase">
            <NuxtLink :to="'/good_cate/'+goodCate.id">Ngành hàng: {{ goodCate.goodName }}</NuxtLink>
        </div>
        <div class="flex border-gray-300 border-b pb-4">
            <div class="flex py-2 px-8 items-center">
                <NuxtLink :to="'/category/'+category.id" class="mr-4 px-4 py-2 first:text-orange-500 first:border-orange-500 first:border first:rounded-lg" v-for="category in categories.result" :id="category.id">{{ category.categoryName }}</NuxtLink>
            </div>
        </div>
        <div class="flex py-4">
            <div class="pl-8 w-1/3">
                <NuxtLink :to="'/good_cate/'+goodCate.id"><img :src="goodCate.picture" class="h-80 border-r w-full" alt=""></NuxtLink>
            </div>
            <div class="w-2/3 flex flex-col">
                <div class="flex flex-wrap">
                    <ItemCategoryIndex v-for="category in categories.result" :id="category.id" :category="category" />
                </div>
                <NuxtLink :to="'/good_cate/'+goodCate.id"
                    class="text-center text-red-500 border-2 border-red-500 px-2 py-1 rounded-lg w-1/6 mx-auto my-4 font-semibold">
                    Xem Thêm
                </NuxtLink>
            </div>
        </div>

    </div>
</template>
<script setup>

const props = defineProps({
    goodCate: {
        type: Object,
        required: true
    }
})

const goodCate = ref(props.goodCate);

const { data: categories } = await useFetch('http://localhost:3000/api/category/', {
    method: 'GET',
    query: {
        goodCateId: goodCate.value.id
    }
});

</script>