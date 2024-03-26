<template>
    <div class="flex bg-white p-4 mb-2 text-sm items-center">
        <IconNotice class="text-red-700 mr-2" /> Bạn vui lòng cập nhật thông tin tài khoản:
        <button @click="$emit('update-user')" class="font-semibold text-red-700 ml-2">cập nhật ngay !</button>
    </div>
    <div class="bg-white p-4 flex flex-col">
        <div class="mb-3">BẢNG ĐIỀU KHIỂN CỦA KHÁCH HÀNG</div>
        <div class="bg-yellow-100 p-4">
            <div class="flex justify-between">
                <div>Họ và tên:</div>
                <div class="font-semibold">{{ user.firstName }} {{ user.lastName }}</div>
            </div>
            <div class="flex justify-between">
                <div>Vai trò:</div>
                <div class="font-semibold">{{ user.isAdmin ? 'Admin' : 'Thành viên' }}</div>
            </div>
            <div class="border-b border-gray-300 pb-3 my-4 font-semibold">Thông tin tài khoản</div>
            <div class="flex justify-between">
                <div>Số đơn hàng thành công năm 2023:</div>
                <div class="font-semibold">0</div>
            </div>
            <div class="flex justify-between">
                <div>Số tiền đã thanh toán năm 2023:</div>
                <div class="font-semibold">0</div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    user: {
        type: Object,
        required: true
    }
})

const user = ref(props.user);

</script>