<template>
    <div class="flex flex-col gap-y-5 p-5 rounded-lg shadow-xl bg-white w-2/3 mx-auto">
        <div class="text-sm text-gray-700 font-bold" id="add">Bạn có thật sự muốn xóa ngành hàng: {{ goodCate.result.goodName }} ?</div>
        <div class="flex md:justify-center">
            <div class="flex gap-x-3">
                <button class="text-white bg-orange-600 rounded py-1 px-4" @click="removeGoodCate">Xóa</button>
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
const idGoodCate = route.params.id;

const goBack = () => {
    useRouter().back();
}

const {data: goodCate} = await useFetch('http://localhost:3000/api/goods-category/'+ idGoodCate);

const removeGoodCate = async () => {
    await useFetch('http://localhost:3000/api/goods-category/' + idGoodCate, {
        method: 'DELETE',
        onResponse({ response }) {
            if (response.ok) {
                alert('Xóa ngành hàng thành công');
                useRouter().back();
            } else {
                alert('Xóa ngành hàng thất bại')
            }
        },
    })
}

</script>