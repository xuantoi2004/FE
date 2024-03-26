<template>
    <div class="flex flex-col my-4 gap-y-3">
        <div class="flex bg-rose-600 gap-x-2 p-4 items-center justify-between">
            <IconCheck class="text-white w-1/6" />
            <div class="flex flex-col w-3/6 text-white font-semibold">
                <div class="text-xl">Bạn đã đặt hàng thành công !</div>
                <div>Mã đơn hàng của bạn là: <span class="text-yellow-200">#{{ invoice.id }}</span></div>
                <div>Bạn sẽ sớm nhận được email xác nhận đơn hàng từ chúng tôi</div>
            </div>
            <NuxtLink to="/profile#invoice" class="uppercase text-sm border-2 border-red-500 rounded w-1/6 py-4 px-2 text-center text-red-500 font-semibold cursor-pointer bg-rose-200 hover:text-white hover:border-white">
                Xem chi tiết đơn hàng
            </NuxtLink>
            <NuxtLink to="/" class="uppercase text-sm rounded w-1/6 py-4 px-2 text-center text-white font-semibold cursor-pointer bg-red-500 hover:border-white hover:border-2">
                Tiếp tục mua sắm
            </NuxtLink>
        </div>
        <div class="bg-white">
            <div class="flex justify-between">
                <div class="w-2/12 border p-4 font-semibold text-sm">Ảnh</div>
                <div class="w-6/12 border p-4 font-semibold text-sm">Tên sản phẩm</div>
                <div class="w-1/12 border p-4 font-semibold text-sm">Giá</div>
                <div class="w-2/12 border p-4 font-semibold text-sm">Số lượng</div>
                <div class="w-1/12 border p-4 font-semibold text-sm">Thành tiền</div>
            </div>
            <div class="flex border-b border-r border-l" v-for="ivc in invoice.invoiceChild" :id="ivc.id"> 
                <div class="w-2/12 p-4">
                    <img :src="ivc.product.picture" class="w-1/2 mx-auto" alt="">
                </div>
                <div class="w-6/12 p-4">
                    <NuxtLink :to="'/detail_product/'+ivc.product.id">{{ ivc.product.name }}</NuxtLink>
                </div>
                <div class="w-1/12 flex flex-col p-4">
                    <div>{{ (ivc.total/ivc.qty).toLocaleString() }} đ</div>
                    <div class="text-gray-300 line-through">{{((ivc.product.discount/100) * ivc.product.price + ivc.product.price).toLocaleString()}} đ</div>
                </div>
                <div class="w-2/12 p-4">
                    {{ ivc.qty }}
                </div>
                <div class="w-1/12 p-4">
                    {{ ivc.total.toLocaleString() }} đ
                </div>
            </div>
            
            <div class="flex">
                <div class="w-9/12"></div>
                <div class="w-2/12 border-r px-4 py-2">Thành tiền</div>
                <div class="w-1/12 px-4 py-2">{{ invoice.total.toLocaleString() }} đ</div>
            </div>
            <div class="flex">
                <div class="w-9/12"></div>
                <div class="w-2/12 border-r px-4 py-2">Phí vận chuyển</div>
                <div class="w-1/12 px-4 py-2">0 đ</div>
            </div>
            <div class="flex">
                <div class="w-8/12"></div>
                <div class="w-3/12 bg-gray-100 border-r px-4 py-2">Giao hàng tiêu chuẩn</div>
                <div class="w-1/12 px-4 py-2">0 đ</div>
            </div>
            <div class="flex">
                <div class="w-9/12"></div>
                <div class="w-2/12 border-r px-4 py-2">Tổng số tiền (gồm VAT)</div>
                <div class="w-1/12 text-red-500 px-4 py-2">{{ invoice.total.toLocaleString() }} đ</div>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    middleware: ['auth']
})

import { useUserStore } from '~/store/user';

const userStore = useUserStore();
const {data: invoices} = await useFetch('http://localhost:3000/api/invoice', {
    method: 'GET',
    query: {
        customerId: userStore.user.id,
        limit: 1
    }
})

const invoice = ref({
    ...invoices.value.result[0]
})

</script>
<style>
    .bg-birthday {
        background-image: url('/img/banner/birthday.svg');
        height: 45rem;
    }
</style>