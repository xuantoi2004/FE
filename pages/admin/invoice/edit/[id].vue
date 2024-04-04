<template>
    <div class="flex gap-x-5">
        <div class="flex flex-col bg-white shadow-lg w-5/6 py-5 gap-y-5 rounded-lg">
            <div class="flex justify-between text-gray-700 font-semibold px-4">
                <div class="text-gray-800 text-2xl font-bold">Fuji</div>
                <div>HÓA ĐƠN #1998</div>
            </div>
            <div class="flex px-4 justify-between text-gray-500 border-b pb-4">
                <div class="flex flex-col">
                    <div>Đồng Quang, Thái Nguyên, Việt Nam</div>
                    <div>Hoa quả sạch Fuji</div>
                    <div>0987196811</div>
                </div>
                <div class="flex flex-col text-right">
                    <div>Ngày đặt hàng: {{ formatDate(invoice.result.createdAt) }}</div>
                    <div>Ngày cấp: {{ formatDate(new Date().toISOString()) }}</div>
                </div>
            </div>
            <div class="flex px-4 justify-between text-gray-500 border-b pb-4">
                <div class="flex flex-col gap-y-1">
                    <div class="text-gray-700 font-semibold">Khách hàng:</div>
                    <div><input type="text" class="border rounded px-2 py-0.5 outline-none" v-model="invoice.result.full_name"></div>
                    <div><input type="text" class="border rounded px-2 py-0.5 outline-none" v-model="invoice.result.nation"> <input type="text" class="border rounded px-2 py-0.5 outline-none" v-model="invoice.result.city"> <input type="text" class="border rounded px-2 py-0.5 outline-none" v-model="invoice.result.district"></div>
                    <div><input type="text" class="border rounded px-2 py-0.5 outline-none" v-model="invoice.result.address"></div>
                    <div><input type="text" class="border rounded px-2 py-0.5 outline-none" v-model="invoice.result.phone"></div>
                </div>
                <div class="flex flex-col text-right gap-y-1">
                    <div class="text-gray-700 font-semibold">Phương thức:</div>
                    <div>
                        <select v-model="invoice.result.shipping" class="border rounded px-2 py-0.5 outline-none">
                            <option value="1">Giao hàng tiêu chuẩn</option>
                            <option value="2">Giao hàng nhanh</option>
                        </select>
                    </div>
                    <div>
                        <select v-model="invoice.result.payment" class="border rounded px-2 py-0.5 outline-none">
                            <option value="1">Thanh toán khi nhận hàng</option>
                            <option value="2">Thanh toán online</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="flex px-4 justify-between text-gray-600 border-b uppercase pb-4 text-sm font-semibold">
                <div class="w-1/4">Sản phẩm</div>
                <div class="w-1/4">Giá</div>
                <div class="w-1/4">Số lượng</div>
                <div class="w-1/4 text-right">Tổng tiền</div>
            </div>
            <div class="flex px-4 justify-between text-gray-600 border-b text-sm pb-4"
                v-for="product in invoice.result.invoiceChild" :id="product.id">
                <div class="w-1/4">
                    <NuxtLink :to="'/detail_product/' + product.product.id">{{ product.product.name }}</NuxtLink>
                </div>
                <div class="w-1/4">{{ (product.total / product.qty).toLocaleString() }} đ</div>
                <div class="w-1/4">{{ product.qty }}</div>
                <div class="w-1/4 text-right">{{ product.total.toLocaleString() }} đ</div>
            </div>
            <div class="flex px-4 justify-between">
                <div>
                    <div class="text-gray-700 font-semibold">Nhân viên lập hóa đơn:</div>
                    <div class="text-gray-500">{{ user.result.firstName + ' ' + user.result.lastName }}</div>
                </div>
                <div class="flex flex-col text-gray-500">
                    <div class="flex gap-x-1 justify-end">
                        Tạm tính:
                        <div class="text-gray-700 font-semibold">{{ invoice.result.total.toLocaleString() }} đ</div>
                    </div>
                    <div class="flex gap-x-1 justify-end">
                        Giảm giá:
                        <div class="text-gray-700 font-semibold">0%</div>
                    </div>
                    <div class="flex gap-x-1 justify-end">
                        VAT:
                        <div class="text-gray-700 font-semibold">0%</div>
                    </div>
                    <div class="flex gap-x-1 justify-end">
                        Tổng:
                        <div class="text-gray-700 font-semibold">{{ invoice.result.total.toLocaleString() }} đ</div>
                    </div>
                </div>
            </div>
            <!-- <div class="flex px-4 justify-end gap-x-3">
                <button class="bg-red-500 text-white px-4 py-1 flex gap-x-2 rounded uppercase items-center">
                    <IconPrinter />
                    In
                </button>
                <button class="bg-sky-500 text-white px-3 rounded uppercase flex gap-x-2 items-center">
                    <IconDownFile />
                    Tải xuống
                </button>
            </div> -->
        </div>
        <div class="flex flex-col w-1/6 bg-white shadow py-5 px-4 gap-y-3 h-fit rounded-lg">
            <button @click="editInvoice"
                class="bg-green-500 text-white uppercase px-5 py-1 font-semibold rounded text-center">Lưu</button>
            <button @click="useRouter().back()"
                class="bg-gray-500 text-white uppercase px-5 py-1 font-semibold rounded text-center">Quay lại</button>
        </div>
    </div>
</template>
<script setup>
import { useUserStore } from '~/store/user';

definePageMeta({
    layout: 'admin',
    middleware: ['auth-admin', 'auth']
})

const {$objstring} = useNuxtApp();
const config = useRuntimeConfig();

const idInvoice = useRoute().params.id;

const userStore = useUserStore();
const { data: user } = await useFetch('/customers/' + userStore.user.id,{
    baseURL: config.public.apiBase
});
const { data: invoice } = await useFetch('/invoice/' + idInvoice,{
    baseURL: config.public.apiBase
});

const formatDate = (inputDateString) => {
    const date = new Date(inputDateString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    return formattedDate;
}

const editInvoice = async () => {
    await useFetch('/invoice/'+idInvoice, {
        baseURL: config.public.apiBase,
        method: 'PATCH',
        body: $objstring(invoice.value.result),
        onResponse: ({response}) => {
            if(response.ok) {
                alert('Cập nhật hóa đơn thành công!');
                navigateTo('/admin/invoice/'+idInvoice);
            } else {
                alert('Cập nhật hóa đơn thất bại!')
            }
        }
    })
}


</script>