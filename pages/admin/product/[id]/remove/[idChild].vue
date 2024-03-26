<template>
    <div class="flex flex-col gap-y-5 p-5 rounded-lg shadow-xl bg-white w-2/3 mx-auto">
        <div class="text-sm text-gray-700 font-bold" id="add">Bạn có thật sự muốn xóa sản phẩm con: {{ prodChild.result.nameDetail }} ?</div>
        <div class="flex md:justify-center">
            <div class="flex gap-x-3">
                <button class="text-white bg-orange-600 rounded py-1 px-4" @click="removeChild">Xóa</button>
                <button class="text-gray-400 border border-gray-400 rounded py-1 px-4" @click="goBack">Quay lại</button>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin', middleware: 'auth-admin',
})

const idChild = useRoute().params.idChild;
const { $objstring } = useNuxtApp();

const goBack = () => {
    useRouter().back();
}

const {data: prodChild} = await useFetch('http://localhost:3000/api/productdetails/' + idChild);


const removeChild = async () => {
    await useFetch('http://localhost:3000/api/productdetails/' + idChild, {
        method: 'DELETE',
        onResponse({ response }) {
            if (response.ok) {
                alert('Remove success');
                useRouter().back();
            } else {
                alert('Remove failed')
            }
        },
    })
}

</script>