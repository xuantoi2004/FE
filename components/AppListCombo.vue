<template>
    <div class="bg-white flex p-4 border-b border-gray-300 mt-4">
        <div class="text-orange-500 p-2 border border-orange-500 rounded-lg font-semibold">Sách Bán Chạy</div>
        <div class="p-2 ml-4">Light Novel</div>
        <div class="p-2 ml-4">Sách Mới</div>
    </div>
    <div class="flex bg-white flex-col">
        <ul class="flex flex-wrap">
            <li v-for="product in products" :key="product.id" class="w-1/5 p-3">
                <ItemCombo :product="product" />
            </li>
        </ul>
        <div class="text-center text-red-500 border-2 border-red-500 px-4 py-2 rounded-lg w-1/6 mx-auto my-4 font-semibold">
            Xem thêm 
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const products = ref([
    {
        id: 1,
        title: 'Nhà giả kim'
    },
    {
        id: 2,
        title: 'Tony Buổi Tối'
    },
    {
        id: 3,
        title: 'Tony Buổi Tối'
    },
    {
        id: 4,
        title: 'Tony Buổi Tối'
    },
    {
        id: 5,
        title: 'Tony Buổi Tối'
    },
]);
</script>