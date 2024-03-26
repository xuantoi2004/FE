<template>
    <div class="border p-2">
        <div class="relative">
            <img src="/img/product/op.jpg" alt="">
        </div>
        <div>
            {{ product?.title || 'Ba Lô Clever Hippo Fancy Fairy Forest - BF1224' }}
        </div>
        <div class="flex flex-row justify-between">
            <div class="text-red-600 font-bold">
                69.300đ
            </div>
            <div class="bg-red-600 text-white rounded-lg px-3">-18%</div>
        </div>
        <div class="line-through">
            77.000đ
        </div>
        <div class="flex">
            <IconStar class="w-4" />
            <IconStar class="w-4" />
            <IconStar class="w-4" />
            <IconStar class="w-4" />
            <IconStar class="w-4" />
            <div class="text-orange-500">(0)</div>
        </div>
    </div>
</template>
<script setup>

    const props = defineProps({
        product: Object
    });
</script>