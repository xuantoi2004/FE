<template>

    <div class="flex flex-col my-3">
        <div class="flex my-2 items-center">
            <div class="text-xl mr-2">GIỎ HÀNG</div>
            <div>({{ cartStore.cart.length }} sản phẩm)</div>
        </div>
        <div class="flex">
            <div class="w-2/3 flex-col">
                <div class="bg-white flex p-4 rounded-lg">
                    <div class="w-1/12">
                        <input type="checkbox" class="max-w-full h-5 w-5" @click="checkedAll = !checkedAll">
                    </div>
                    <div class="flex w-6/12 items-center">
                        <div class="mr-1 font-bold">Chọn tất cả</div>
                        <div>({{ cartStore.cart.length }} sản phẩm)</div>
                    </div>
                    <div class="w-2/12">Số lượng</div>
                    <div class="w-2/12">Thành tiền</div>
                    <div class="w-1/12">Tác vụ</div>
                </div>
                <ItemOnCart :isChecked="checkedAll" :item="item" v-for="item in cartStore.cart" :id="item.id" />
            </div>
            <div class="w-1/3 flex flex-col ml-3">
                <div class="bg-white py-3 px-3 flex flex-col rounded-lg">
                    <div class="flex justify-between">
                        <div class="flex text-blue-500">
                            <IconCoupon />
                            KHUYẾN MÃI
                        </div>
                        <div class="flex text-blue-500 text-sm">
                            Xem thêm
                            <IconRight />
                        </div>
                    </div>
                    <ItemVoucher />
                    <ItemVoucher />
                    <div class="border-b border-dashed border-gray-300 my-2"></div>
                    <div class="flex bg-blue-200 text-blue-600 text-sm mt-1 py-2 px-3 justify-between rounded-lg">
                        <div>3 khuyến mãi đủ điều kiện</div>
                        <div>
                            <IconRight />
                        </div>
                    </div>
                    <div class="text-gray-400 text-sm mt-1 flex">
                        Có thể áp dụng nhiều mã
                        <IconNotice class="ml-1" />
                    </div>
                </div>
                <!-- thanh toan -->
                <div class="bg-white py-3 px-3 flex flex-col rounded-lg mt-4">
                    <div class="flex justify-between">
                        <div class="flex">
                            Thành tiền
                        </div>
                        <div class="flex text-sm">
                            {{ cartStore.totalPrice.toLocaleString() }} đ
                        </div>
                    </div>
                    <div class="border-b border-dashed border-gray-300 my-2"></div>
                    <div class="flex justify-between">
                        <div class="font-semibold">Tổng Số Tiền (đã bao gồm VAT)</div>
                        <div class="font-bold text-red-700">{{ (cartStore.totalPrice).toLocaleString() }} đ</div>
                    </div>
                    <button @click="checkout" class="mt-3 bg-red-700 py-2 px-4 rounded-lg text-white text-center font-semibold text-xl hover:bg-red-500">
                        THANH TOÁN
                    </button>
                    <div class="text-red-700 text-sm">(Giảm giá trên web chỉ áp dụng cho bán lẻ)</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    middleware: 'auth'
})

import { ref } from 'vue';
import { useCartStore } from '~/store/cart';

const checkedAll = ref(false);
const cartStore = useCartStore();

const checkout = () => {
    if(cartStore.cart.length > 0){
        navigateTo('/checkout/one');
    } else {
        alert('Giỏ hàng trống! Vui lòng mua thêm sản phẩm')
    }
}

</script>