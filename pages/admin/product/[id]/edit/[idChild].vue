<template>
    <!-- <Adminproduct.value.resultBreadCrumb /> -->
    <div class="flex flex-col gap-y-5 p-5 rounded-lg bg-white shadow-xl w-full mx-auto">
        <div class="flex flex-col gap-y-5">
            <div class="text-sm font-bold text-gray-700 uppercase">Sửa ảnh mô tả:</div>
            <div class="flex gap-y-3 items-center">
                <div class="w-1/2 flex justify-between items-center">
                    <img :src="prodChild.result.picture" class="w-1/5 mx-auto" alt="">
                </div>
                <input type="text" v-model="prodChild.result.picture" placeholder="nhập link ảnh mô tả cho sản phẩm"
                    class="h-fit w-1/2 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">

            </div>
        </div>

        <div class="w-1/3 flex gap-x-3 mx-auto">
            <button class="text-white bg-orange-500 rounded py-1 px-4" @click="editChild">Cập nhật</button>
            <button class="text-gray-600 border border-gray-600 rounded py-1 px-4" @click="useRouter().back()">Quay
                lại</button>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin', middleware: 'auth-admin',
})
const idChild = useRoute().params.idChild;
const { $objstring } = useNuxtApp();
const config = useRuntimeConfig();

const { data: prodChild } = await useFetch('/productdetails/' + idChild,{
    baseURL: config.public.apiBase
});

const editChild = async () => {
    await useFetch('/productdetails/' + idChild, {
        baseURL: config.public.apiBase,
        method: 'PATCH',
        body: $objstring(prodChild.value.result),
        onResponse: ({ response }) => {
            if (response.ok) {
                alert('Edit success');
                useRouter().back();
            } else {
                alert('Edit failed')
            }
        }
    })
}

</script>