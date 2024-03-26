<template>
    <table class="table-auto border-collapse">
        <thead>
            <tr class="bg-gray-200">
                <th class="p-2 text-center">
                    <input type="checkbox" @click="toggleAllCheckbox()">
                </th>
                <th v-for="item in headers" :key="item" class="text-gray-500 text-center uppercase font-semibold text-sm py-2.5 px-5">{{
                    item.text }}</th>
                <th class="text-center text-gray-500 uppercase font-semibold text-sm" v-if="showAction">Tác vụ</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.id" class="border border-gray-200">

                <td class="text-center">
                    <input type="checkbox" class="outline-gray-500" v-model="item.isSelected"
                        @change="$emit('changeSelect', item.id, item.isSelected)" />
                </td>

                <td class="text-center px-5 py-2.5 text-sm text-gray-500" v-for="header in headers" :key="header" v-html="item[header.value]">
                </td>
                <td class="text-center p-4" v-if="showAction">
                    <NuxtLink :to="`${route.path}/${item.id}`" class="rounded bg-sky-500 text-white px-3 py-1.5" v-if="showView">Xem</NuxtLink>
                    <NuxtLink :to="`${route.path}/edit/${item.id}`" class="rounded bg-orange-500 text-white px-3 py-1.5 mx-1">Sửa</NuxtLink>
                    <NuxtLink :to="`${route.path}/remove/${item.id}`" class="rounded bg-red-500 text-white px-3 py-1.5">Xóa</NuxtLink>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>
import { ref } from 'vue';

const route = useRoute();

const checkboxCheck = ref(false);

const props = defineProps({
    headers: {
        type: Array,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    showAction: {
        type: Boolean,
        default: true
    },
    showView: {
        type: Boolean,
        default: false
    }
});

</script>