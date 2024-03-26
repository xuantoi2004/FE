<template>
    <AdminItemBreadCrumb />
    <div class="flex flex-col gap-y-5 p-5 rounded-lg shadow-xl bg-white">
        <div class="text-sm text-gray-700 font-bold uppercase" id="add">Sửa danh mục</div>
        <div class="flex gap-x-10">
            <div class="w-1/2 flex flex-col gap-y-3">
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Tên</div>
                    <input type="text" v-model="cate.categoryName" placeholder="nhập tên nhà cung cấp"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Mô tả</div>
                    <textarea v-model="cate.description" placeholder="nhập mô tả cho nhà cung cấp"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500"></textarea>
                </div>
            </div>
            <div class="w-1/2 flex flex-col gap-y-3">
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] ">Ảnh mô tả</div>
                    <input type="text" v-model="cate.picture" placeholder="nhập url ảnh"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] ">Ngành hàng</div>
                    <select v-model="cate.goodCateId"
                        class="w-2/3 px-2 py-2 border-gray-300 rounded-lg border outline-none bg-admin placeholder:lowercase focus:border-red-500 text-gray-500">
                        <option value="" selected disabled>Chọn ngành hàng</option>
                        <option v-for="goodcate in goodCates.result" :value="goodcate.id">
                            {{ goodcate.goodName }}
                        </option>
                    </select>
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] ">Trạng thái</div>
                    <select v-model="cate.active"
                        class="w-2/3 px-2 py-2 border-gray-300 rounded-lg border outline-none bg-admin placeholder:lowercase focus:border-red-500 text-gray-500">
                        <option value="true">Hoạt động</option>
                        <option value="false">Không hoạt động</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="flex md:justify-center">
            <div class="flex gap-x-3">
                <button class="text-white bg-orange-600 rounded py-1 px-4" @click="editCategory">Sửa</button>
                <button class="text-gray-400 border border-gray-400 rounded py-1 px-4" @click="goBack">Quay lại</button>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin', middleware: 'auth-admin',
})

const {$objstring} = useNuxtApp()

const route = useRoute();
const idCate = route.params.id;

const goBack = () => {
    useRouter().back();
}

const cate = ref({
    "categoryName": "",
    "description": "",
    "picture": "",
    "goodCateId": "",
    "active": ""
})

const { data: goodCates } = await useFetch('http://localhost:3000/api/goods-category');

const { data: initCate } = await useFetch('http://localhost:3000/api/category/' + idCate, {
    method: 'GET'
})

cate.value = {
    ...initCate.value.result,
    goodCateId: initCate.value.result.goodCategory.id,
    active: initCate.value.result.active
}

const editCategory = async () => {
    await useFetch('http://localhost:3000/api/category/' + idCate, {
        method: 'PATCH',
        body: $objstring(cate.value),
        watch: false,
        onResponse({ response }) {
            if (response.ok) {
                alert('Sửa danh mục thành công')
            } else {
                alert('Sửa danh mục thất bại')
            }
        },
    })
}

</script>