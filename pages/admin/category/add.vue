<template>
    <AdminItemBreadCrumb />
    <div class="flex flex-col gap-y-5 p-5 rounded-lg bg-white shadow-xl w-full mx-auto">
        <div class="text-sm font-bold text-gray-700 uppercase">Thêm Danh Mục Mới</div>
        <div class="flex gap-x-5">
            <div class="flex flex-col gap-y-3 w-1/2">
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Ngành hàng</div>
                    <select v-model="category.goodCateId" placeholder="nhập đường dẫn..."
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none bg-admin uppercase text-xs text-gray-500 focus:border-red-500">
                        <option value="" selected disabled>Chọn ngành hàng</option>
                        <option :value="gc.id" v-for="gc in goodCates.result">{{ gc.goodName }}</option>
                    </select>
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Tên</div>
                    <input type="text" placeholder="nhập tên danh mục..." v-model="category.categoryName"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin placeholder:uppercase placeholder:text-xs focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Mô tả</div>
                    <textarea v-model="category.description" placeholder="nhập mô tả..."
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none  bg-admin focus:border-red-500 placeholder:uppercase placeholder:text-xs text-gray-500"></textarea>
                </div>
            </div>

            <div class="flex flex-col gap-y-3 w-1/2">
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Ảnh đại diện</div>
                    <input type="text" v-model="category.picture" placeholder="nhập link ảnh..."
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none placeholder:uppercase bg-admin placeholder:text-xs text-gray-500 focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Trạng thái</div>
                    <select placeholder="nhập đường dẫn..."
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none bg-admin uppercase text-xs text-gray-500 focus:border-red-500"
                        v-model="category.active">
                        <option value="" selected disabled>Chọn trạng thái</option>
                        <option value="1">Hoạt động</option>
                        <option value="0">Không hoạt động</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="flex gap-x-3 mx-auto">
            <button class="text-white bg-green-500 rounded py-1 px-4" @click="addCate">Thêm</button>
            <button class="text-gray-400 border border-gray-400 rounded py-1 px-4" @click="useRouter().back()">Quay
                lại</button>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin', middleware: 'auth-admin',
})

const config = useRuntimeConfig();
const { $objstring } = useNuxtApp();

const category = ref({
    categoryName: '',
    description: '',
    picture: '/img/default.jpg',
    active: '',
    goodCateId: ''
})

const { data: goodCates } = await useFetch('/goods-category', {
    baseURL: config.public.apiBase
});

const addCate = async () => {
    await useFetch('/category', {
        baseURL: config.public.apiBase,
        method: 'POST',
        body: $objstring(category.value),
        onResponse: ({ response }) => {
            if (response.ok) {
                alert('Thêm danh mục thành công');
            } else {
                alert('Thêm danh mục thất bại');
            }
        }
    })
}

</script>