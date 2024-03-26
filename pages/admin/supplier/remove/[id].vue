<template>
    <div class="flex flex-col gap-y-5 p-5 rounded-lg shadow-xl bg-white w-1/3 mx-auto">
        <div class="text-sm font-semibold text-gray-900 text-center">Bạn có chắc chắn muốn xóa nhà cung cấp: {{ supplier.result.name }}</div>
        <div class="flex md:justify-center">
            <div class="flex gap-x-3">
                <button class="text-white bg-red-500 rounded py-1 px-4" @click="removeSupplier">Xóa</button>
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
const idSupplier = route.params.id;

const goBack = () => {
    useRouter().back();
}

const {data: supplier} = await useFetch('http://localhost:3000/api/suppliers/'+idSupplier, {
    method: 'GET'
})

const removeSupplier = async () => {
    await useFetch('http://localhost:3000/api/suppliers/'+idSupplier, {
        method: 'DELETE',
        onResponse({response}) {
            if(response.ok) {
                alert('Remove success')
            } else {
                alert('Remove failed')
            }
        },
    })
}

</script>