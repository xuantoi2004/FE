<template>
    <div class="p-4 hover:shadow-md">
        <NuxtLink :to="'/detail_product/'+product.id" class="relative">
            <img :src="product.picture" class="rounded h-48 mx-auto" alt="">
            <div class="bg-orange-500 text-white rounded-full absolute top-5 right-1 z-10 text-sm p-0.5">{{product.discount}} %</div>
            <div v-if="!product.productAvailable" class="absolute inset-0 flex items-center justify-center">
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <div class="p-2 bg-red-500 text-white font-semibold z-10">
                    Hết hàng
                </div>
            </div>
        </NuxtLink>
        <div>
            <NuxtLink :to="'/detail_product/'+product.id" class="text-lg font-semibold">{{ product.name }}</NuxtLink>
        </div>
        <div class="flex flex-row justify-between">
            <div class="text-red-600 font-bold">
                {{ product.price.toLocaleString() }} đ
            </div>
            <!-- <div class="bg-gray-400 text-white rounded-lg px-3">Tập 1</div> -->
        </div>
        <div class="line-through">
            {{ (product.price * (product.discount / 100) + product.price).toLocaleString() }} đ
        </div>
        <div class="flex">
            <IconStar class="text-orange-500 w-4" />
            <IconStar class="text-orange-500 w-4" />
            <IconStar class="text-orange-500 w-4" />
            <IconStar class="text-orange-500 w-4" />
            <IconStar class="text-orange-500 w-4" />
            <div class="text-orange-500">(0)</div>
        </div>
        <div v-if="isFlashSale" class="text-center">
            <div class="w-full h-4 bg-gray-200 rounded relative">
                <div class="h-full bg-red-600 rounded" style="width: 80%"></div>
                <div class="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold">
                    đá bán 10
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        product: {
            type: Object,
            required: true
        },
        isFlashSale: {
            type: Boolean,
            default: true
        }
    })

    const product = ref(props.product)
</script>