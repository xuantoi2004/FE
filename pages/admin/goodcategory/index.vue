<template>
    <AdminItemBreadCrumb />
    <div class="flex gap-x-5">
        <div class="w-2/5 gap-y-5 flex flex-col">
            <div class="flex bg-white shadow-md rounded-lg flex-col p-5 gap-y-3 h-fit">
                <div class="flex">
                    <div class="flex flex-col">
                        <div class="font-bold text-lg capitalize text-gray-700">Tổng quan</div>
                    </div>
                </div>
                <div class="flex">
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-red-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg text-gray-500">{{ items.length }}</div>
                            <div class="text-sm text-gray-500">Ngành hàng</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-green-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg text-gray-500">{{ categories.result.length }}</div>
                            <div class="text-sm text-gray-500">Danh mục</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-blue-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg text-gray-500">{{ products.result.length }}</div>
                            <div class="text-sm text-gray-500">Sản phẩm</div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="flex flex-col gap-y-5 p-5 rounded-lg bg-white shadow-xl" :class="{
                'border border-red-500' : focusAdd
            }">
                <div class="font-bold text-gray-700 text-sm uppercase" id="add">Thêm ngành hàng mới :</div>
                <div class="flex flex-col gap-y-3">
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-xs uppercase">Tên ngành hàng</div>
                        <input type="text" placeholder="nhập tên ngành hàng" v-model="goodCate.good_name"
                            class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500 text-gray-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-xs uppercase">Mô tả</div>
                        <textarea v-model="goodCate.description" placeholder="nhập mô tả"
                            class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500 text-gray-500"></textarea>
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-xs uppercase">Ảnh đại diện</div>
                        <input type="text" v-model="goodCate.picture" placeholder="url ảnh đại diện"
                            class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500 text-gray-500">
                    </div>
                </div>
                <div class="flex flex-col gap-y-3">
                    <div class="w-2/3 flex ml-auto gap-x-3">
                        <button class="text-white bg-green-500 rounded py-1 px-4 uppercase text-sm" @click="addGoodCate">Thêm</button>
                        <button class="text-gray-400 border border-gray-400 rounded py-1 px-4 uppercase text-sm">Reset</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-3/5 flex flex-col gap-y-5">

            <div class="flex flex-col pt-5 shadow-xl bg-white rounded-md gap-y-5">
                <div class="flex px-5">
                    <div
                        class="border border-gray-300 px-3 py-1.5 text-gray-500 rounded text-sm hover:text-white hover:bg-sky-700 hover:border-none uppercase">
                        Export
                    </div>
                    <div class="ml-auto flex gap-x-5">
                        <input type="text"
                            class="border border-gray-300 bg-admin rounded px-3 py-1.5 focus:border-red-500 outline-none text-gray-500 placeholder:uppercase placeholder:text-xs"
                            placeholder="Tìm ngành hàng...">
                        <NuxtLink to="/admin/goodcategory/add" class="bg-green-500 text-white px-3 py-1.5 rounded uppercase text-xs">
                            Thêm ngành hàng
                        </NuxtLink>
                    </div>
                </div>
                <AdminItemTable :headers="headers" v-model:items="items" @changeSelect="changeSelect" @removeItem="removeItem"/>
            </div>
        </div>

    </div>
</template>
<script setup>
import { ref } from "vue";
definePageMeta({
    layout: 'admin', middleware: 'auth-admin',
})
const config = useRuntimeConfig();
const goodCate = ref({
    good_name: '',
    description: '',
    picture: '/img/default.jpg',
})

const {data: categories} = await useFetch('/category',{
    baseURL: config.public.apiBase
});
const {data: products} = await useFetch('/products',{
    baseURL: config.public.apiBase
});
const headers = ref([
    { text: "Tên ngành hàng", value: "name" },
    { text: "Mô tả", value: "description", sortable: true },
    { text: "Ảnh đại diện", value: "picture", sortable: true },

])

let items = ref([]);

// Fetch the goods categories and populate the items array
const { data: goodsCategories } = await useFetch('/goods-category',{
    baseURL: config.public.apiBase
});

// After fetching the data, populate the items array
items.value = goodsCategories.value.result.map(gc => ({
  name: gc.goodName,
  description: gc.description,
  picture: `<img src="${gc.picture}" class="w-1/3 mx-auto">`,
  id: gc.id
}));

const addGoodCate = async () => {
    await useFetch('/goods-category', {
        baseURL: config.public.apiBase,
        method: 'POST',
        body: goodCate.value,
        async onResponse({
            request, response, options
        }) {
            if (response.ok) {
                alert('Tạo ngành hàng thành công!')
                const result = response._data.result;
                items.value.unshift({
                    name: result.goodName,
                    description: result.description,
                    picture: `<img src="${result.picture}" class="w-1/3">`,
                    id: result.id
                })
            } else {
                alert('Tạo ngành hàng thất bại!')
            }
        }
    })
}

const changeSelect = (itemId, selectedValue) => {
    items.value = items.value.map(item =>
        item.id === itemId ? { ...item, isSelected: selectedValue } : item
    );
};

const removeItem = async (itemId) => {
    const {data: result} = await useFetch(`/goods-category/${itemId}`, {
        baseURL: config.public.apiBase,
        method: 'DELETE'
    })

    if(result.value.status == 'success') {
        items.value = items.value.filter(item => item.id !== itemId);
    }
}


</script>