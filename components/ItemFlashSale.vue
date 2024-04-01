<template>
    <NuxtLink :to="'/detail_product/'+product.id" class="relative">
        <img :src="product.picture" :alt="product.name" class="h-48 mx-auto">
        <div class="bg-green-500 text-white rounded-full p-1 absolute top-5 right-0 z-10">{{product.discount}}%</div>
        <div class="absolute inset-0 flex items-center justify-center" :class="{hidden: product.productAvailable}">
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div class="p-2 bg-red-500 text-white font-semibold z-10 rounded">
                Hết hàng
            </div>
        </div>
    </NuxtLink>
    <div>
        <NuxtLink :to="'/detail_product/'+product.id" class="text-lg font-semibold">{{ product.name }}</NuxtLink>
    </div>
    <div class="text-orange-500 font-bold">
        {{ product.price.toLocaleString() }} đ
    </div>
    <div class="line-through">
        {{ (product.price * ((product.discount+5) / 100) + product.price).toLocaleString() }} đ
    </div>
    <div class="text-center">
        <div class="w-full h-4 bg-gray-200 rounded relative">
            <div class="h-full bg-green-600 rounded" style="width: 90%"></div>
            <div class="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold">
                đá bán 3
            </div>
        </div>

    </div>
</template>
<script setup>
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const product = ref(props.product);
</script>