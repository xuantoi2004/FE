<template>
    <div class="flex flex-col gap-y-5 p-5 rounded-lg shadow-xl bg-white w-1/3 mx-auto">
        <div class="text-sm font-semibold text-gray-900 text-center">Bạn có chắc chắn muốn xóa sản phẩm: {{ product.result.name }}</div>
        <div class="flex md:justify-center">
            <div class="flex gap-x-3">
                <button class="text-white bg-red-500 rounded py-1 px-4" @click="removeProduct">Xóa</button>
                <button class="text-gray-400 border border-gray-400 rounded py-1 px-4" @click="goBack">Quay lại</button>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin', middleware: 'auth-admin',
})

const route = useRoute();
const idProduct = route.params.id;

const goBack = () => {
    useRouter().back();
}

const {data: product} = await useFetch('http://localhost:3000/api/products/'+idProduct, {
    method: 'GET'
})

const removeProduct = async () => {
    await useFetch('http://localhost:3000/api/products/'+idProduct, {
        method: 'DELETE',
        onResponse({response}) {
            if(response.ok) {
                alert('Xóa sản phẩm thành công');
                navigateTo('/admin/product');
            } else {
                alert('Xóa sản phẩm thất bại')
            }
        },
    })
}

</script>