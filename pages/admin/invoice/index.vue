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
                            <div class="font-semibold text-lg text-gray-500">{{ invoices.result.length }}</div>
                            <div class="text-sm text-gray-400">Đơn hàng</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-green-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg text-gray-500">{{ invoices.result.filter(item => item.status == 2).length }}</div>
                            <div class="text-sm text-gray-400">Đã duyệt</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-sky-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg text-gray-500">{{ invoices.result.filter(item => item.status == 0).length }}</div>
                            <div class="text-sm text-gray-400">Đã hủy</div>
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
                    placeholder="Tìm hóa đơn...">
                <button class="bg-green-500 text-white px-3 py-1.5 rounded" @click="wip">
                    Thêm hóa đơn
                </button>
            </div>
        </div>
        <AdminItemTable :headers="headers" :items="items" :show-view="true" />
    </div>
</template>
<script setup>
import { ref } from "vue";
definePageMeta({
    layout: 'admin', middleware: 'auth-admin',
})
const config = useRuntimeConfig();
const wip = () => {
    alert('tính năng đang phát triển');
}

const headers = ref([
    { text: "Mã hóa đơn", value: "invoice_id" },
    { text: "Họ và tên", value: "full_name" },
    { text: "SĐT người đặt", value: "phone", sortable: true },
    { text: "Địa chỉ", value: "address", sortable: true },
    { text: "Người tạo", value: "user", sortable: true },
    { text: "Số đơn hàng", value: "qty", sortable: true },
    { text: "Tổng tiền", value: "total", sortable: true },
    { text: "Trạng thái", value: "status", sortable: true },
])

const {data: invoices} = await useFetch('/invoice',{
    baseURL: config.public.apiBase
});

const items = ref([]);
items.value = invoices.value.result.map(item => {
    return {
        id: item.id,
        invoice_id: '#'+item.id,
        full_name: item.full_name,
        phone: item.phone,
        address: item.address,
        user: item.customer.phone,
        qty: item.invoiceChild.length,
        total: item.total.toLocaleString()+ ' đ',
        status: item.status == 1 ? `<span class="bg-orange-500 text-white px-2 rounded">CHỜ DUYỆT</span>` :  item.status == 2 ? `<span class="bg-green-500 text-white px-2 rounded">ĐÃ DUYỆT</span>` : `<span class="bg-red-500 text-white px-2 rounded">TỪ CHỐI</span>`
    }
})


</script>