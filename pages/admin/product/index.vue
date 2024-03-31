<template>
    <div class="flex gap-y-5 flex-col">
        <div class="flex gap-x-5">
            <div class="w-1/2 flex bg-white shadow-xl rounded-lg flex-col p-5 gap-y-3 h-fit">
                <div class="flex">
                    <div class="flex flex-col">
                        <div class="font-bold text-lg capitalize text-gray-700">Tổng quan</div>
                        <!-- <div class="text-gray-500 text-sm">
                            Đã bán 10k đơn <span class="text-green-500">+18%</span>
                        </div> -->
                    </div>
                    <IconThreeDot class="ml-auto" />
                </div>
                <div class="flex">
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-sky-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg text-gray-500">{{ products.result.length }}</div>
                            <div class="text-sm text-gray-400">Sản phẩm</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-green-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg text-gray-500">{{ (products.result.length * 3)+1 }}</div>
                            <div class="text-sm text-gray-400">Đã bán</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-red-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg text-gray-500">{{ products.result.length - 4 }}</div>
                            <div class="text-sm text-gray-400">Tồn kho</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-1/2 flex p-5 flex-col bg-white shadow-xl rounded-lg gap-y-3">
                <div class="font-bold text-lg text-gray-700">Tìm kiếm theo:</div>
                <div class="flex gap-x-3">
                    <div class="w-1/3">
                        <select name="" id=""
                            class="border border-gray-300 px-2 py-2.5 rounded-lg bg-admin w-full appearance-none text-sm text-gray-500 outline-none">
                            <option value="" disabled selected>Tên danh mục</option>
                            <option :value="category.id" v-for="category in categories.result" :id="category.id">
                                {{ category.categoryName }}
                            </option>
                        </select>
                    </div>
                    <div class="w-1/3">
                        <select name="" id=""
                            class="border border-gray-300 px-2 py-2.5 rounded-lg bg-admin w-full appearance-none text-sm text-gray-500 outline-none">
                            <option value="" disabled selected>Tên nhà cung cấp</option>
                            <option :value="supplier.id" v-for="supplier in suppliers.result" :id="supplier.id">
                                {{ supplier.name }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col pt-5 bg-white shadow-xl rounded-md gap-y-5">
            <div class="flex px-5">
                <div
                    class="border border-gray-500 px-3 py-1.5 text-gray-500 rounded text-sm hover:text-white hover:bg-sky-700 hover:border-none">
                    Export
                </div>
                <div class="ml-auto flex gap-x-5">
                    <input type="text"
                        class="border border-gray-300 bg-admin rounded px-3 py-1.5 focus:border-red-500 outline-none placeholder:text-sm"
                        placeholder="Tìm kiếm sản phẩm...">
                    <NuxtLink to="/admin/product/add" class="bg-green-500 text-white px-3 py-1.5 rounded">
                        Thêm sản phẩm mới
                    </NuxtLink>
                </div>
            </div>
            <AdminItemTable :headers="headers" v-model:items="items" @changeSelect="changeSelect" :showView="true" />
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
definePageMeta({
    layout: 'admin', middleware: 'auth-admin',
})
const config = useRuntimeConfig();
const { data: products } = await useFetch('/products', {
    baseURL: config.public.apiBase,
    query: {
        sort: 'DESC'
    }
});

const { data: categories } = await useFetch('/category',{
    baseURL: config.public.apiBase
});

const {data: suppliers} = await useFetch('/suppliers',{
    baseURL: config.public.apiBase
});

const headers = ref([
    { text: "Tên sản phẩm", value: "name" },
    { text: "Ảnh đại diện", value: "picture", sortable: true },
    { text: "Mô tả", value: "description", sortable: true },
    { text: "Giá", value: "price", sortable: true },
    { text: "Số lượng", value: "qty", sortable: true },
    { text: "Danh mục", value: "category_name", sortable: true },
    { text: "Nhà cung cấp", value: "supplier_name", sortable: true },
])

const items = ref([])
items.value = products.value.result.map((item) => {
    return {
        id: item.id,
        name: `<a href="/detail_product/${item.id}" class="capitalize">${item.name.toLowerCase()}</a>`,
        picture: `<img src='${item.picture}' class="w-1/4 mx-auto"/>`,
        description: item.description.substring(0,100) + '...',
        qty: item.qty,
        price: item.price.toLocaleString() + ' đ',
        category_name: item.category.categoryName,
        supplier_name: item.supplier.name
    }
})

const changeSelect = (itemId, selectedValue) => {
    items.value = items.map(item =>
        item.id === itemId ? { ...item, isSelected: selectedValue } : item
    );
};


</script>