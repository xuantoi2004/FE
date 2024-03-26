<template>
    <div class="flex flex-col absolute top-full -right-28 w-96 shadow-sm border-2 rounded-lg" :class="{ hidden: isHoveringCart }">
        <div class="flex border-b border-gray-300 py-3 items-center bg-white px-3">
            <IconCart class="text-sm text-gray-300 mr-2" />
            <div class="font-semibold">Giỏ hàng ({{ cartStore.cart?.length || 0 }})</div>
        </div>
        
        <ItemMiniCart v-for="item in cartStore.cart" :item="item" :id="item.id" />
        <div class="flex justify-between items-center bg-white px-3 pb-2 rounded-b-lg">
            <div class="flex flex-col">
                <div>Tổng cộng</div>
                <div class="text-gray-800 font-semibold text-lg">{{ cartStore.totalPrice.toLocaleString() }} đ</div>
            </div>
            <NuxtLink to="/cart" class="text-white bg-gray-800 font-semibold px-4 py-2 rounded-lg hover:text-amber-400">Xem giỏ hàng</NuxtLink>
        </div>
    </div>
</template>
<script setup>
import ItemMiniCart from './ItemMiniCart.vue';

import { useCartStore } from '~/store/cart';

const cartStore = useCartStore();

const props = defineProps({
    isHoveringCart: {
        type: Boolean,
        default: true
    }
})

</script>