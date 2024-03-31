<template>
    <div class="flex flex-col gap-y-5 p-5 rounded-lg shadow-xl bg-white w-2/3 mx-auto">
        <div class="text-sm text-gray-700 font-bold" id="add">Bạn có thật sự muốn xóa người dùng: {{
            customer.result.phone }} ?</div>
        <div class="flex md:justify-center">
            <div class="flex gap-x-3">
                <button class="text-white bg-orange-600 rounded py-1 px-4" @click="removeCustomer">Xóa</button>
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
const idCustomer = route.params.id;

const goBack = () => {
    useRouter().back();
}

const { data: customer } = await useFetch('/customers/' + idCustomer,{
    baseURL: config.public.apiBase
})

const removeCustomer = async () => {
    await useFetch('/customers/' + idCustomer, {
        baseURL: config.public.apiBase,
        method: 'DELETE',
        onResponse({ response }) {
            if (response.ok) {
                alert('Xóa thành công');
                goBack();
            } else {
                alert('Xóa thất bại')
            }
        },
    })
}

</script>