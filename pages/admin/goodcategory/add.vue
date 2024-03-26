<template>
    <AdminItemBreadCrumb />
    <div class="flex flex-col gap-y-5 p-5 rounded-lg shadow-xl bg-white">
        <div class="text-sm text-gray-700 font-bold uppercase" id="add">Thêm ngành hàng mới</div>
        <div class="flex gap-x-10">
            <div class="w-1/2 flex flex-col gap-y-3">
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Tên</div>
                    <input type="text" v-model="goodCate.good_name" placeholder="nhập tên ngành hàng..."
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500 placeholder:text-sm">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Mô tả</div>
                    <textarea v-model="goodCate.description" placeholder="nhập mô tả cho ngành hàng..."
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500 placeholder:text-sm"></textarea>
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Link ảnh</div>
                    <input type="text" v-model="goodCate.picture" placeholder="nhập link ảnh"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500 placeholder:text-sm">
                </div>
            </div>
            <div class="w-1/2 flex flex-col gap-y-3">
                <div class="w-full text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Ảnh mô tả</div>
                <img class="w-1/3 rounded" :src="goodCate.picture" alt="">
            </div>
        </div>
        <div class="flex md:justify-center">
            <div class="flex gap-x-3">
                <button class="text-white bg-orange-600 rounded py-1 px-4 uppercase text-sm" @click="addGoodCate">Thêm mới</button>
                <button class="text-gray-400 border border-gray-400 rounded py-1 px-4 uppercase text-sm" @click="goBack">Quay lại</button>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin', middleware: 'auth-admin',
})

const goBack = () => {
    useRouter().back();
}

const goodCate = ref({
    "good_name": "",
    "description": "",
    "picture": "https://i.imgur.com/9qEXutu.png"
})

const { data: suppliers } = await useFetch('http://localhost:3000/api/suppliers');

const addGoodCate = async () => {
    await useFetch('http://localhost:3000/api/goods-category/', {
        method: 'POST',
        body: goodCate.value,
        onResponse({ response }) {
            if (response.ok) {
                alert('Add success');
                useRouter().back()
            } else {
                alert('Add failed')
            }
        },
    })
}

</script>