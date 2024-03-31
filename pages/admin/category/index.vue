<template>
    <div class="flex gap-x-5">
        <div class="flex flex-col w-2/5 gap-y-5">
            <div class="flex shadow-md bg-white rounded-lg flex-col p-5 gap-y-3 h-fit">
                <div class="flex">
                    <div class="flex flex-col">
                        <div class="text-gray-500 font-bold text-lg capitalize">Tổng quan</div>
                        <div class="text-gray-400 text-sm">
                            <!-- Đã bán 10k đơn <span class="text-green-400">+18%</span> -->
                        </div>
                    </div>
                    <IconThreeDot class="ml-auto" />
                </div>
                <div class="flex">
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-red-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg text-gray-500">{{ items.length }}</div>
                            <div class="text-sm text-gray-400">Danh mục</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-green-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg text-gray-500">{{ products.result.length }}</div>
                            <div class="text-sm text-gray-400">Sản phẩm</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-sky-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg text-gray-500">{{ (products.result.length * 2)+1 }}</div>
                            <div class="text-sm text-gray-400">Đã bán</div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="flex flex-col gap-y-5 p-5 rounded-lg bg-white shadow-xl">
                <div class="text-sm font-bold uppercase text-gray-700" id="add">Thêm danh mục mới</div>
                <div class="flex flex-col gap-y-3">
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Ngành hàng
                        </div>
                        <select v-model="category.goodCateId"
                            class="w-2/3 px-2 py-2 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin text-sm">
                            <option value="" disabled selected>Tên ngành hàng</option>
                            <option v-for="item in goodCates.result" :value="item.id">{{ item.goodName }}</option>
                        </select>
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Tên</div>
                        <input type="text" v-model="category.categoryName" placeholder="nhập tên danh mục..."
                            class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin placeholder:lowercase focus:border-red-500 placeholder:text-sm">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Mô tả</div>
                        <textarea placeholder="nhập mô tả..." v-model="category.description"
                            class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin placeholder:lowercase focus:border-red-500 placeholder:text-sm"></textarea>
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Ảnh đại diện
                        </div>
                        <input type="text" placeholder="nhập url ảnh..." v-model="category.picture"
                            class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin placeholder:lowercase focus:border-red-500 placeholder:text-sm">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Trạng thái
                        </div>
                        <select
                            class="w-2/3 px-2 py-2 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin text-sm"
                            v-model="category.active">
                            <option value="" selected disabled>Chọn trạng thái</option>
                            <option value="1">Hoạt động</option>
                            <option value="0">Không hoạt động</option>
                        </select>
                    </div>
                </div>
                <div class="flex flex-col gap-y-3">
                    <div class="w-2/3 flex ml-auto gap-x-3">
                        <button class="text-white bg-green-600 rounded py-1 px-4" @click="addCategory">Thêm</button>
                        <button class="text-gray-400 border border-gray-400 rounded py-1 px-4">Reset</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-3/5 flex flex-col gap-y-5">
            <div class="flex p-5 flex-col bg-white shadow-xl rounded-lg gap-y-3">
                <div class="font-bold text-lg capitalize text-gray-500">Tìm kiếm theo</div>
                <div class="flex gap-x-3">
                    <div class="w-1/3">
                        <select name="" id=""
                            class="border border-gray-300 px-2 py-2.5 rounded-lg bg-admin w-full appearance-none text-sm text-gray-400 outline-none">
                            <option value="" disabled selected>Tên ngành hàng</option>
                            <option v-for="item in goodCates.result" :value="item.id">{{ item.goodName }}</option>
                        </select>
                    </div>
                    <div class="w-1/3 hidden">
                        <select name="" id=""
                            class="border border-gray-500 px-2 py-2.5 rounded-lg bg-admin w-full appearance-none text-sm text-gray-400">
                            <option value="">Select Plan</option>
                        </select>
                    </div>
                    <div class="w-1/3 hidden">
                        <select name="" id=""
                            class="border border-gray-500 px-2 py-2.5 rounded-lg bg-admin w-full appearance-none text-sm text-gray-400">
                            <option value="">Select Status</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="flex flex-col pt-5 bg-white shadow-xl rounded-md gap-y-5">
                <div class="flex px-5">
                    <div class="border border-gray-500 px-3 py-1.5 text-gray-500 rounded text-sm hover:text-white hover:bg-sky-700 hover:border-none"
                        @click="refreshPage">
                        Export
                    </div>
                    <div class="ml-auto flex gap-x-5">
                        <input type="text"
                            class="border border-gray-300 bg-admin rounded px-3 py-1.5 focus:border-red-500 outline-none placeholder:text-sm text-gray-500"
                            placeholder="Tìm danh mục...">
                        <NuxtLink to="/admin/category/add" class="bg-green-500 text-white px-3 py-1.5 rounded">
                            Thêm danh mục
                        </NuxtLink>
                    </div>
                </div>
                <AdminItemTable :headers="headers" v-model:items="items" @changeSelect="changeSelect" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
definePageMeta({
    layout: 'admin', middleware: 'auth-admin',
})

const {$objstring} = useNuxtApp();
const config = useRuntimeConfig();

const category = ref({
    categoryName: '',
    picture: '/img/default.jpg',
    goodCateId: '',
    description: '',
    active: ''
})

const { data: goodCates } = await useFetch('/goods-category', {
    baseURL: config.public.apiBase
});

const {data: products} = await useFetch('/products', {
    baseURL: config.public.apiBase
});


const headers = ref([
    { text: "Tên danh mục", value: "categoryName" },
    { text: "Ảnh đại diện", value: "picture" },
    { text: "Ngành hàng", value: "goodCateId" },
    { text: "Trạng thái", value: "active" },

])

const addCategory = async () => {
    await useFetch('/category', {
        baseURL: config.public.apiBase,
        method: 'POST',
        body: $objstring(category.value),
        watch: false,
        onResponse({ response }) {
            if (response.ok) {
                alert('Thêm danh mục thành công!')
                const result = response._data.result;
                items.value.unshift({
                    categoryName: result.categoryName,
                    picture: `<img src="${result.picture}" class="w-1/3 mx-auto">`,
                    goodCateId: result.goodCategory.goodName,
                    description: result.description,
                    active: result.active ? 'Hoạt động' : 'khóa'
                })
            } else {
                alert('Thêm danh mục thất bại')
            }
        }
    })
}

const items = ref([]);

const { data: initCates } = await useFetch('/category', {
    baseURL: config.public.apiBase
});

items.value = initCates.value.result.map(cate => {
    return {
        id: cate.id,
        categoryName: cate.categoryName,
        picture: `<img src="${cate.picture}" class="w-1/3 mx-auto">`,
        active: cate.active ? 'Hoạt động' : 'Khóa',
        goodCateId: cate.goodCategory.goodName
    }
})

watch(initCates, () => {
    items.value = initCates.value.result.map(cate => {
        return {
            id: cate.id,
            categoryName: cate.categoryName,
            picture: `<img src="${cate.picture}" class="w-1/3">`,
            active: cate.active ? 'Hoạt động' : 'Khóa',
            goodCateId: cate.goodCategory.goodName
        }
    })
})

const changeSelect = (itemId, selectedValue) => {
    items.value = items.map(item =>
        item.id === itemId ? { ...item, isSelected: selectedValue } : item
    );
};


</script>