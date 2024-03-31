<template>
    <div class="flex gap-x-5">
        <div class="flex flex-col w-2/5 gap-y-5">
            <div class="flex bg-white shadow-xl rounded-lg flex-col p-5 gap-y-3 h-fit">
                <div class="flex">
                    <div class="flex flex-col">
                        <div class="font-bold text-lg capitalize text-gray-700">Tổng quan</div>
                    </div>
                    <IconThreeDot class="ml-auto" />
                </div>
                <div class="flex">
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-red-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg text-gray-500">{{ customers.result.length }}</div>
                            <div class="text-sm text-gray-400">Người dùng</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-green-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg text-gray-500">{{ customers.result.filter(item => item.isAdmin).length }}</div>
                            <div class="text-sm text-gray-400">Admin</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-sky-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg text-gray-500">{{ customers.result.filter(item => !item.isAdmin).length }}</div>
                            <div class="text-sm text-gray-400">Khách hàng</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="w-3/5 flex flex-col gap-y-5">
            <div class="flex p-5 flex-col bg-white shadow-xl rounded-lg gap-y-3">
                <div class="font-bold text-lg text-gray-700">Tìm kiếm theo: </div>
                <div class="flex gap-x-3">
                    <div class="w-1/3">
                        <select name="" id=""
                            class="border border-gray-300 px-2 py-2.5 rounded-lg bg-admin w-full appearance-none text-sm text-gray-600 outline-none">
                            <option value="" selected>Tên</option>
                            <option value="">SĐT</option>
                            <option value="">Email</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col pt-5 bg-white shadow-xl rounded-md gap-y-5">
        <div class="flex px-5">
            <div
                class="border border-gray-500 px-3 py-1.5 text-gray-500 rounded text-sm hover:text-white hover:bg-sky-700 hover:border-none">
                Export
            </div>
            <div class="ml-auto flex gap-x-5">
                <input type="text"
                    class="border border-gray-300 bg-admin rounded px-3 py-1.5 focus:border-red-500 outline-none placeholder:text-sm"
                    placeholder="Tìm người dùng...">
                <NuxtLink to="/admin/customer/add" class="bg-green-500 text-white px-3 py-1.5 rounded">
                    Thêm người dùng
                </NuxtLink>
            </div>
        </div>
        <AdminItemTable :headers="headers" :items="items" @changeSelect="changeSelect" />
    </div>
</template>
<script setup>
import { ref } from "vue";
definePageMeta({
    layout: 'admin', middleware: 'auth-admin',
})

const config = useRuntimeConfig();

const headers = ref([
    { text: "Ảnh đại diện", value: "avatar" },
    { text: "Họ và tên", value: "full_name" },
    { text: "SĐT", value: "phone", sortable: true },
    { text: "Email", value: "email", sortable: true },
    { text: "Giới tính", value: "gender", sortable: true },
    { text: "Vai trò", value: "role", sortable: true },
    { text: "Trạng thái", value: "status", sortable: true },
])

const {data: customers} = await useFetch('/customers', {
    baseURL: config.public.apiBase
});

const items = ref([]);
items.value = customers.value.result.map(item => {
    return {
        avatar: `<img src="${item.avatar}" class="w-1/5 mx-auto">`,
        full_name: item.firstName + ' ' + item.lastName,
        phone: item.phone,
        email: item.email,
        gender: item.gender ? 'Nam' : 'Nữ',
        role: item.isAdmin ? 'Admin' : 'Khách hàng',
        status: item.active ? 'Đang hoạt động' : 'Bị khóa',
        id: item.id
    }
})

const changeSelect = (itemId, selectedValue) => {
    items.value = items.map(item =>
        item.id === itemId ? { ...item, isSelected: selectedValue } : item
    );
};


</script>