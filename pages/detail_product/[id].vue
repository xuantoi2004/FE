<template>
    <!-- breadcrumb -->
    <div class="flex my-3 text-sm items-center gap-x-3 uppercase">
        <NuxtLink to="/" class="uppercase flex items-center gap-x-2">
            <IconHome /> Trang Chủ
        </NuxtLink> 
        &rArr;
        <NuxtLink :to="'/category/'+product.result.category.goodCategory.id">{{ product.result.category.goodCategory.goodName }}</NuxtLink>
        &rArr;
        <NuxtLink :to="'/category/'+product.result.category.id">{{ product.result.category.categoryName }}</NuxtLink>
        &rArr;
        <span class="text-gray-500">{{ product.result.name }}</span>
    </div>
    <div class="bg-white rounded-lg">
        <div class="flex p-4 gap-x-3">
            <div class="flex flex-col w-1/12 p-2 gap-y-3">
                <img :src="product.result.picture" class="h-1/3 mx-auto" alt="">
                <img v-for="prodChild in prodChilds.result" :src="prodChild.picture" class="w-full" alt="">
            </div>
            <div class="flex w-3/12 max-h-96 p-2">
                <NuxtImg :src="product.result.picture" preset="cover" />
            </div>
            <div class="flex w-8/12 flex-col">
                <p class="font-semibold text-2xl">{{ product.result.name }}</p>
                <div class="flex flex-wrap mt-4">
                    <div class="w-1/2 flex mb-1">
                        <div class="w-1/2 font-semibold">Nhà cung cấp:</div>
                        <div class="w-1/2">{{ product.result.supplier.name }}</div>
                    </div>
                    <div class="w-1/2 flex mb-1">
                        <div class="w-1/2 font-semibold">
                            Tình trạng:
                        </div>
                        <div class="w-1/2">
                            {{ product.result.productAvailable ? 'có sẵn' : 'không có sẵn' }}
                        </div>
                    </div>
                    <div class="w-1/2 flex mb-1">
                        <div class="w-1/2 font-semibold">Danh mục:</div>
                        <div class="w-1/2">
                            {{ product.result.category.categoryName }}
                        </div>
                    </div>
                    <div class="w-1/2 flex mb-1">
                        <div class="w-1/2 font-semibold">Số sản phẩm còn lại:</div>
                        <div class="w-1/2">{{ product.result.qty }}</div>
                    </div>
                    <div class="w-full flex mb-1">
                        <div class="w-1/4 font-semibold">Mô tả:</div>
                        <div class="w-3/4">{{ product.result.description }}...</div>
                    </div>
                </div>
                <div class="flex mt-2">
                    <IconStar class="w-4 text-orange-500" />
                    <IconStar class="w-4 text-orange-500" />
                    <IconStar class="w-4 text-orange-500" />
                    <IconStar class="w-4 text-orange-500" />
                    <IconStar class="w-4 text-orange-500" />

                    <div class="text-orange-500 ml-2">(5 đánh giá)</div>
                </div>
                <!-- flash sale -->
                <div class="flex items-center mt-4">
                    <div class="text-red-700 font-bold text-3xl mr-3">
                        {{ product.result.price.toLocaleString() }} đ
                    </div>
                    <div class="line-through mr-3">
                        {{ (product.result.price * (product.result.discount / 100) + product.result.price).toLocaleString() }}
                        đ
                    </div>
                    <div class="bg-red-700 font-semibold text-white p-1 rounded-md text-sm">-{{ product.result.discount }}%
                    </div>
                </div>
                <div class="flex flex-col mt-4">
                    <div class="font-semibold">Thời gian giao hàng: 24-48h</div>
                    <div class="font-semibold flex gap-x-2">
                        Chính sách đổi trả: Đổi trả sản phẩm trong 30 ngày
                        <a href="#" class="text-blue-500 cursor-pointer font-semibold text-sm uppercase">
                            <IconQuestion />
                        </a>
                    </div>
                </div>
                <div class="flex items-center mt-4">
                    <div class="font-bold mr-4 w-1/6">Số lượng:</div>
                    <ItemInputNumberRange class="w-1/6" v-model:count="qtyItem" :max="product.result.qty" />
                </div>
                <div class="flex mt-4">
                    <button @click="addCart"
                        class="py-2 px-6 border-2 border-gray-800 rounded-lg flex items-center text-gray-800 font-bold cursor-pointer hover:bg-gray-800 hover:text-amber-400">
                        <IconCart class="mr-2" /> Thêm vào giỏ hàng
                    </button>
                    <div @click="buyNow" class="bg-gray-800 text-amber-400 py-2 px-10  rounded-lg font-bold cursor-pointer ml-2">
                        Mua ngay
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-4 bg-white rounded-lg">
        <div class="flex font-bold text-xl items-center p-4">
            <IconCoupon class="text-red-600 mr-4" /> ƯU ĐÃI LIÊN QUAN
        </div>
        <div class="flex p-4">
            <div class="font-semibold text-red-600">
                Tất cả
            </div>
            <div class="ml-4">
                Mã giảm giá
            </div>
            <div class="ml-4">
                Mã vận chuyển
            </div>
            <div class="ml-4">
                Mã thanh toán
            </div>
            <div class="ml-4">
                Ưu đãi khác
            </div>
            <div class="flex text-gray-400 ml-auto text-sm">
                Có thể áp dụng nhiều mã
                <IconNotice class="ml-1" />
            </div>
        </div>
        <div class="px-4 pb-4 relative">
            <!-- <div class="border-b border-gray-600"></div> -->
            <div class="border-b-2 border-red-600 w-1/12 absolute"></div>
        </div>
        <div class="p-4 flex flex-row items-center">
            <ItemCoupon class="text-orange-500 w-3.5/12 mr-2" :icon="1" />
            <ItemCoupon class="text-green-500 w-3.5/12 mr-2" :icon="2" />
            <ItemCoupon class="text-blue-500 w-3.5/12 mr-2" :icon="3" />
            <div class="flex items-center text-md flex-col ml-auto">
                <div class="bg-red-700 p-1 rounded-full">
                    <IconRight class="text-white" />
                </div>
                <div class="font-semibold text-xs text-red-700">
                    Xem thêm Mã
                </div>
            </div>
        </div>
    </div>

    <!-- related products -->
    <div class="mt-4 bg-white rounded-lg flex flex-col p-4">
        <div class="font-bold mb-4">SẢN PHẨM LIÊN QUAN</div>
        <div>
            <div class="font-semibold text-red-700 mb-2">Series Bộ</div>
            <div class="border-b-2 border-red-700 w-1/12"></div>
        </div>
        <div class="flex flex-wrap">
            <div class="w-1/5" v-for="prod in productSameCates.result" :id="prod.id">
                <ItemTrending :product="prod" :isFlashSale="false" />
            </div>
        </div>
    </div>

    <!-- buy with product -->
    <!-- <div class="mt-4 bg-white rounded-lg flex flex-col p-4">
        <div class="font-bold mb-4">SẢN PHẨM CÙNG MUA</div>
        <div class="flex flex-wrap">
            <div class="w-1/5" v-for="prodTrend in prodTrends.result" :id="prodTrend.id">
                <ItemTrending :product="prodTrend" :isFlashSale="true" />
            </div>
        </div>
    </div> -->

    <!-- product information -->
    <div class="mt-4 bg-white p-4 rounded-lg">
        <div class="font-bold text-md mb-4">Thông tin sản phẩm</div>
        <div class="flex flex-col">
            <div class="flex border p-4" v-for="prop in prodProps.result">
                <div class="font-semibold mr-2 w-1/2">{{ prop.nameProp }}</div>
                <div>{{ prop.valueProp }}</div>
            </div>
            <div class="flex border p-4">
                <div class="font-semibold mr-2 w-1/2">Nhà cung cấp</div>
                <div>{{ product.result.supplier.name }}</div>
            </div>
            <div class="flex border p-4">
                <div class="font-semibold mr-2 w-1/2">Danh mục</div>
                <div>{{ product.result.category.categoryName }}</div>
            </div>
            <div class="flex border p-4">
                <div class="font-semibold mr-2 w-1/2">Trạng thái</div>
                <div>{{ product.result.productAvailable ? 'có sẵn' : 'không có sẵn' }}</div>
            </div>
            <div class="flex border p-4">
                <div class="font-semibold mr-2 w-1/2">Mô tả</div>
                <div>{{ product.result.description }}</div>
            </div>
        </div>

    </div>
</template>
<script setup>
import { useCartStore } from '~/store/cart';

const config = useRuntimeConfig();
const idProduct = useRoute().params.id;

const qtyItem = ref(1);

const addCart = () => {
    cartStore.addToCart(product.value.result, qtyItem.value);
}

const buyNow = () => {
    cartStore.addToCart(product.value.result, 1);
    navigateTo('/cart')
}

const { data: product } = await useFetch('/products/' + idProduct,{
    baseURL: config.public.apiBase
});

useHead({
    title: product.value.result.name
})

const { data: productSameCates } = await useFetch('/products', {
    baseURL: config.public.apiBase,
    method: 'GET',
    query: {
        categoryId: product.value.result.category.id
    }
})

const { data: prodProps } = await useFetch('/productprops', {
    baseURL: config.public.apiBase,
    method: 'GET',
    query: {
        product: idProduct,
        limit: 3
    }
})

const { data: prodChilds } = await useFetch('/productdetails', {
    baseURL: config.public.apiBase,
    method: 'GET',
    query: {
        product: idProduct,
        limit: 3
    }
})

//cart
const cartStore = useCartStore();

</script>