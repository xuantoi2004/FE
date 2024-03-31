<template>
    <div class="flex flex-col gap-y-5 p-5 rounded-lg shadow-xl bg-white w-2/3 mx-auto">
        <div class="text-sm text-gray-700 font-bold" id="add">Bạn có thật sự muốn xóa danh mục: {{ category.result.categoryName }} ?</div>
        <div class="flex md:justify-center">
            <div class="flex gap-x-3">
                <button class="text-white bg-orange-600 rounded py-1 px-4" @click="removeCategory">Xóa</button>
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
const idCategory = route.params.id;

const goBack = () => {
    useRouter().back();
}

const { data: category } = await useFetch('/category/' + idCategory, {
    baseURL: config.public.apiBase,
    method: 'GET'
})

const removeCategory = async () => {
    await useFetch('/category/' + idCategory, {
        baseURL: config.public.apiBase,
        method: 'DELETE',
        onResponse({ response }) {
            if (response.ok) {
                alert('Remove success');
                goBack()
            } else {
                alert('Remove failed')
            }
        },
    })
}

</script>