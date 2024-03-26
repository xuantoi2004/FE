<template>
    <div class="flex bg-white py-3 px-3 border-b border-dashed">
        <img class="w-2/6 p-1" :src="item.picture" alt="">
        <div class="flex flex-col w-4/6 justify-between items-start">
            <div>
                <NuxtLink :to="'/detail_product/'+item.id">
                    {{ item.name }}
                </NuxtLink>
            </div>
            <div>
                <b>{{ item.price.toLocaleString() }} đ</b> x {{ item.qtyItem }}
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    item: {
        type: Object,
        required: true
    }
})
</script>