<template>
    <div class="w-1/2 flex hover:shadow" v-for="product in products.result">
        <NuxtLink :to="'/detail_product/' + product.id" class="w-1/3">
            <img :src="product.picture" class="p-2 w-full mx-auto" alt="">
        </NuxtLink>
        <div class="flex flex-col w-2/3 p-2">
            <NuxtLink class="text-lg font-semibold" :to="'/detail_product/' + product.id">{{ product.name }}</NuxtLink>
            <div class="flex items-center">
                <div class="font-semibold text-orange-500 mr-2 w-2/3">
                    {{ product.price.toLocaleString() }} đ
                </div>
                <div class="bg-green-600 text-white py-0.5 px-1 rounded-md">-{{ product.discount }}%</div>
            </div>
            <div class="line-through">
                {{ (product.price * (product.discount/100) + product.price).toLocaleString() }} đ
            </div>
            <div class="flex">
                <IconStar class="w-5 text-orange-500" />
                <IconStar class="w-5 text-orange-500" />
                <IconStar class="w-5 text-orange-500" />
                <IconStar class="w-5 text-orange-500" />
                <IconStar class="w-5 text-orange-500" />

                <!-- <div class="text-orange-500">(0)</div> -->
            </div>
        </div>
    </div>
</template>
<script setup>
const config = useRuntimeConfig();
const props = defineProps({
    category: {
        type: Object,
        required: true
    }
})

const category = ref(props.category);

const { data: products } = await useFetch('/products', {
    baseURL: config.public.apiBase,
    method: 'GET',
    query: {
        categoryId: category.value.id,
        limit: 4
    }
});

</script>