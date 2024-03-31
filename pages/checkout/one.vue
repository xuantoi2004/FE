<template>
    <div class="flex flex-col gap-y-4 my-4">
        <!-- address -->
        <div class="bg-white px-4 py-1.5">
            <div class="border-b font-bold uppercase py-2 mb-2">Địa chỉ giao hàng</div>
            <div class="flex justify-between items-center">
                <div class="w-1/12 flex justify-center text-gray-800">
                    <input type="radio" name="address" value="1" v-model="address_option" class=" border-green-500" checked>
                </div>
                <div class="w-10/12">
                    {{ customer.result.firstName }} {{ customer.result.lastName }} | {{ customer.result.nation1 }} - {{
                        customer.result.city1 }} - {{ customer.result.district1 }} - {{ customer.result.address1 }}
                </div>
                <NuxtLink to="/profile#edit" class="w-1/12 text-blue-500 text-right text-sm">Sửa</NuxtLink>
            </div>
            <div class="flex justify-between items-center">
                <div class="w-1/12 flex justify-center text-gray-800">
                    <input type="radio" name="address" v-model="address_option" value="2" class=" border-green-500">
                </div>
                <div class="w-10/12">
                    {{ customer.result.firstName }} {{ customer.result.lastName }} | {{ customer.result.nation2 }} - {{
                        customer.result.city2 }} - {{ customer.result.district2 }} - {{ customer.result.address2 }}
                </div>
                <NuxtLink to="/profile#edit" class="w-1/12 text-blue-500 text-right text-sm">Sửa</NuxtLink>
            </div>
            <NuxtLink to="/profile#edit" class="flex justify-between cursor-pointer">
                <div class="w-1/12">
                    <IconCirclePlus class="text-gray-800 mx-auto" />
                </div>
                <div class="w-11/12">Giao hàng đến địa chỉ khác</div>
            </NuxtLink>
        </div>

        <!-- phone -->
        <div class="bg-white px-4 py-1.5">
            <div class="border-b font-bold uppercase py-2 mb-2">Số điện thoại nhận hàng</div>
            <div class="flex justify-between items-center">
                <div class="w-1/12 flex justify-center text-gray-800">
                    <IconPhone />
                </div>
                <div class="w-11/12">
                    <input type="text" class="border rounded px-2 py-1.5 outline-none w-1/3" placeholder="nhập số điện thoại" v-model="invoice.phone">
                </div>
            </div>
        </div>

        <!-- ship -->
        <div class="bg-white px-4 py-1.5">
            <div class="border-b font-bold uppercase py-2 mb-2">Phương thức vận chuyển</div>
            <div class="flex justify-between">
                <div class="w-1/12 flex justify-center text-gray-800">
                    <input type="radio" name="shipping" value="1" class=" border-green-500" checked>
                </div>
                <div class="w-11/12">Giao hàng tiêu chuẩn</div>
            </div>
            <div class="flex justify-between">
                <div class="w-1/12 flex justify-center text-gray-800">
                    <input type="radio" name="shipping" value="2" class=" border-green-500">
                </div>
                <div class="w-11/12">Giao hàng nhanh</div>
            </div>
        </div>

        <!-- payment -->
        <div class="bg-white px-4 py-1.5">
            <div class="border-b font-bold uppercase py-2 mb-2">Phương thức thanh toán</div>
            <div class="flex justify-between">
                <div class="w-1/12 flex justify-center text-gray-800">
                    <input type="radio" name="payment" value="1" checked class=" border-green-500">
                </div>
                <div class="w-11/12 flex gap-x-2">
                    <IconBankNote />
                    Thanh toán khi nhận hàng
                </div>
            </div>
            <div class="flex justify-between">
                <div class="w-1/12 flex justify-center text-gray-500">
                    <input type="radio" name="payment" value="2" disabled class=" border-green-500">
                </div>
                <div class="w-11/12 flex gap-x-2">
                    <IconCreditCard />
                    Thanh toán online(đang phát triển)
                </div>
            </div>
        </div>

        <!-- voucher -->
        <div class="bg-white px-4 py-1.5">
            <div class="border-b font-bold uppercase py-2 mb-2">Mã khuyến mãi/mã quà tặng</div>
            <div class="flex justify-between">
                <div class="w-2/12">
                    Mã KM/Quà tặng
                </div>
                <div class="w-10/12 flex flex-col gap-y-2">
                    <div class="flex items-center gap-x-3">
                        <div class="relative w-3/6">
                            <input type="text" class="border px-6 py-3 rounded-lg w-full outline-none"
                                placeholder="Nhập mã khuyến mãi/Quà tặng">
                            <button @click="AlertWIP"
                                class="bg-blue-500 text-white rounded-lg px-3 py-1.5 absolute right-2 top-1.5 shadow-sm">
                                Áp dụng
                            </button>
                        </div>
                        <div class="w-auto text-blue-500 underline text-sm">
                            Chọn mã khuyến mãi
                        </div>
                    </div>
                    <div class="flex items-center text-gray-400 gap-x-3 text-sm">
                        Có thể áp dụng đồng thời nhiều mã
                        <IconNotice />
                    </div>
                </div>
            </div>
        </div>

        <!-- re-check -->
        <div class="bg-white px-4 py-1.5">
            <div class="border-b font-bold uppercase py-2 mb-2">Kiểm tra lại đơn hàng</div>
            <div class="bg-white">
                <div class="flex justify-between">
                    <div class="w-2/12 border p-4 font-semibold text-sm">Ảnh</div>
                    <div class="w-6/12 border p-4 font-semibold text-sm">Tên sản phẩm</div>
                    <div class="w-1/12 border p-4 font-semibold text-sm">Giá</div>
                    <div class="w-2/12 border p-4 font-semibold text-sm">Số lượng</div>
                    <div class="w-1/12 border p-4 font-semibold text-sm">Thành tiền</div>
                </div>
                <div class="flex border-b border-r border-l" v-for="product in cartStore.cart" :id="product.id">
                    <div class="w-2/12 p-4">
                        <img :src="product.picture" class="w-1/2 mx-auto" alt="">
                    </div>
                    <div class="w-6/12 p-4">
                        <NuxtLink :to="'/detail_product/'+product.id">{{product.name}}</NuxtLink>
                    </div>
                    <div class="w-1/12 flex flex-col p-4">
                        <div>{{ product.price.toLocaleString() }} đ</div>
                        <div class="text-gray-300 line-through">{{ (product.price*product.discount + product.price).toLocaleString() }} đ</div>
                    </div>
                    <div class="w-2/12 p-4">
                        {{ product.qtyItem }}
                    </div>
                    <div class="w-1/12 p-4">
                        {{ (product.qtyItem * product.price).toLocaleString() }} đ
                    </div>
                </div>
            </div>
        </div>

        <!-- confirm -->
        <div class="bg-white px-4 py-1.5">
            <div class="flex border-b items-center py-2">
                <div class="w-8/12"></div>
                <div class="w-3/12 flex-col flex">
                    <div>Thành tiền</div>
                    <div>Phí vận chuyển (Giao hàng tiêu chuẩn)</div>
                    <div class="font-bold">Tổng Số Tiền (gồm VAT)</div>
                </div>
                <div class="w-1/12 flex flex-col">
                    <div>{{ cartStore.totalPrice.toLocaleString() }} đ</div>
                    <div>10,000 đ</div>
                    <div>{{ (cartStore.totalPrice+10000).toLocaleString() }} đ</div>
                </div>
            </div>
            <div class="flex justify-between p-4 items-center">
                <NuxtLink to="/cart" class="w-8/12 flex gap-x-3 items-center">
                    <IconBack /> Quay về giỏ hàng
                </NuxtLink>
                <button class="w-4/12 bg-gray-800 text-white px-4 py-2 rounded-lg uppercase text-center font-semibold hover:bg-rose-600" @click="addInvoice">
                    xác nhận thanh toán</button>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    middleware: ['auth', 'auth-checkout']
})

import { storeToRefs } from 'pinia';
import { useCartStore } from '~/store/cart';
import { useUserStore } from '~/store/user';

const {$objstring} = useNuxtApp();
const config = useRuntimeConfig();

const cartStore = useCartStore();
const userStore = useUserStore();
const address_option = ref(1);

const cart = storeToRefs(cartStore);

const { data: customer } = await useFetch('/customers/' + userStore.user.id,{
    baseURL: config.public.apiBase
});

const invoice = ref({
    full_name: customer.value.result.firstName + ' ' + customer.value.result.lastName,
    phone: customer.value.result.phone,
    // nation: '',
    // city: '',
    // district: '',
    // address: '',
    shipping: 1,
    payment: 1,
    total: cartStore.totalPrice,
    customerId: userStore.user.id
})

const invoiceChild = ref([]);

invoiceChild.value = cartStore.cart.map(item => {
    return {
        productId: item.id,
        qty: item.qtyItem,
        total: item.qtyItem*item.price
    }
})

const AlertWIP = () => {
    alert('Tính năng đang phát triển');
}

const addInvoice = async () => {
    const nation = customer.value.result['nation'+address_option.value];
    const city = customer.value.result['city'+address_option.value];
    const district = customer.value.result['district'+address_option.value];
    const address = customer.value.result['address'+address_option.value];

    invoice.value.nation = nation;
    invoice.value.city = city;
    invoice.value.district = district;
    invoice.value.address = address;

    const formSend = $objstring({...invoice.value});
    formSend.invoice_childs = invoiceChild.value;

    await useFetch('/invoice/checkout', {
        baseURL: config.public.apiBase,
        method: 'POST',
        body: formSend,
        onResponse: ({response}) => {
            if(response.ok){
                cartStore.removeCart();
                navigateTo('/checkout/two');
            } else {
                alert('Thanh toán không thành công. Vui lòng thử lại sau!');
            }
        }
    })
}

</script>
<style scoped>
input[type="radio"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: white;
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 50%;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
}

input[type="radio"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--tw-text-opacity);
    /* Windows High Contrast Mode */
    background-color: rgb(190 18 60 / var(--tw-text-opacity));
}

input[type="radio"]:checked::before {
    transform: scale(1);
}</style>