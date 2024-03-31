<template>
    <AdminItemBreadCrumb />
    <div class="flex flex-col gap-y-5 p-5 rounded-lg shadow-xl bg-white">
        <div class="text-sm text-gray-700 font-bold uppercase" id="add">Sửa nhà cung cấp</div>
        <div class="flex gap-x-10">
            <div class="w-full flex flex-col gap-y-3">
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] ">Tên</div>
                    <input type="text" v-model="goodCate.good_name" placeholder="nhập tên nhà cung cấp"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] ">Mô tả</div>
                    <textarea v-model="goodCate.description" placeholder="nhập mô tả cho nhà cung cấp"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500"></textarea>
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] ">Ảnh mô tả</div>
                    <input type="text" v-model="goodCate.picture" placeholder="nhập số điện thoại"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
            </div>
        </div>
        <div class="flex md:justify-center">
            <div class="flex gap-x-3">
                <button class="text-white bg-orange-600 rounded py-1 px-4" @click="editSupplier">Sửa</button>
                <button class="text-gray-400 border border-gray-400 rounded py-1 px-4" @click="goBack">Quay lại</button>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin', middleware: 'auth-admin',
})
const config = useRuntimeConfig();
const route = useRoute();
const idGoodCate = route.params.id;

const goBack = () => {
    useRouter().back();
}

const goodCate = ref({
    "good_name": "",
    "description": "",
    "picture": "",
})

const { data: initGoodCate } = await useFetch('/goods-category/' + idGoodCate, {
    baseURL: config.public.apiBase,
    method: 'GET'
})

goodCate.value = {
    ...initGoodCate.value.result,
    good_name: initGoodCate.value.result.goodName,
}

const editSupplier = async () => {
    await useFetch('/goods-category/' + idGoodCate, {
        baseURL: config.public.apiBase,
        method: 'PATCH',
        body: goodCate,
        onResponse({ response }) {
            if (response.ok) {
                alert('Edit success')
            } else {
                alert('Edit failed')
            }
        },
    })
}

</script>